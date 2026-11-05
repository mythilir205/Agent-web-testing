import re
import struct
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
REPORTS = ROOT / "test-artifacts/automationexercise/reports"
SOURCE = REPORTS / "03-TEST-EXECUTION-REPORT.md"
EXECUTION = ROOT / "test-artifacts/automationexercise/test-execution"
OUTPUT = REPORTS / "06-TEST-CASE-EVIDENCE-REPORT.docx"
EMU_PER_INCH = 914400

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
    "ct": "http://schemas.openxmlformats.org/package/2006/content-types",
}
for prefix, uri in NS.items():
    ET.register_namespace(prefix if prefix != "rel" else "", uri)


def tag(prefix, name):
    return f"{{{NS[prefix]}}}{name}"


def parse_report(markdown):
    summary = dict(
        (key, value.replace("`", "").replace("**", "").strip())
        for key, value in re.findall(r"^- \*\*([^*]+)\*\*: (.*)$", markdown, re.M)
    )
    sections = re.split(r"(?=^### TC-)", markdown, flags=re.M)
    cases = []
    for section in sections:
        header = re.match(r"^### (TC-\S+) — `([^`]+)`", section)
        if not header:
            continue
        fields = {
            key: value.replace("`", "").replace("**", "").strip()
            for key, value in re.findall(r"^- \*\*([^*]+)\*\*: (.*)$", section, re.M)
        }
        screenshot_directory = EXECUTION / "screenshots" / "automationexercise.cy.js" / header.group(1)
        before_screenshot = screenshot_directory / "before.png"
        after_screenshot = screenshot_directory / "after.png"
        step_screenshots = sorted(screenshot_directory.glob("step-*.png"))
        failure_screenshot = screenshot_directory / "failure.png"
        cases.append({
            "id": header.group(1),
            "name": header.group(2),
            "fields": fields,
            "before_screenshot": before_screenshot if before_screenshot.is_file() else None,
            "after_screenshot": after_screenshot if after_screenshot.is_file() else None,
            "step_screenshots": step_screenshots,
            "failure_screenshot": failure_screenshot if failure_screenshot.is_file() else None,
        })
    if len(cases) != 74:
        raise ValueError(f"Expected 74 case results in the execution report, found {len(cases)}.")
    missing = [
        case["id"]
        for case in cases
        if case["fields"].get("Status") != "NOT RUN"
        and (not case["before_screenshot"] or not case["after_screenshot"])
    ]
    if missing:
        raise ValueError(f"Missing screenshots for executed cases: {', '.join(missing)}")
    return summary, cases


def add_run(parent, text, bold=False, color=None, size=None):
    run = ET.SubElement(parent, tag("w", "r"))
    props = ET.SubElement(run, tag("w", "rPr"))
    if bold:
        ET.SubElement(props, tag("w", "b"))
    if color:
        ET.SubElement(props, tag("w", "color"), {tag("w", "val"): color})
    if size:
        ET.SubElement(props, tag("w", "sz"), {tag("w", "val"): str(size)})
    text_node = ET.SubElement(run, tag("w", "t"))
    text_node.text = text
    return run


def add_paragraph(body, text="", style=None, bold=False, color=None):
    paragraph = ET.SubElement(body, tag("w", "p"))
    if style:
        props = ET.SubElement(paragraph, tag("w", "pPr"))
        ET.SubElement(props, tag("w", "pStyle"), {tag("w", "val"): style})
    add_run(paragraph, text, bold=bold, color=color)
    return paragraph


def add_labeled_paragraph(body, label, value, status=False):
    paragraph = ET.SubElement(body, tag("w", "p"))
    add_run(paragraph, f"{label}: ", bold=True)
    color = {
        "PASSED": "177245",
        "FAILED": "B42318",
    }.get(value) if status else None
    add_run(paragraph, value or "Not recorded", bold=status, color=color)


def add_table(body, rows, header=True):
    table = ET.SubElement(body, tag("w", "tbl"))
    properties = ET.SubElement(table, tag("w", "tblPr"))
    borders = ET.SubElement(properties, tag("w", "tblBorders"))
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        ET.SubElement(borders, tag("w", edge), {
            tag("w", "val"): "single",
            tag("w", "sz"): "4",
            tag("w", "space"): "0",
            tag("w", "color"): "AEB8C2",
        })
    for index, row in enumerate(rows):
        table_row = ET.SubElement(table, tag("w", "tr"))
        for value in row:
            cell = ET.SubElement(table_row, tag("w", "tc"))
            cell_props = ET.SubElement(cell, tag("w", "tcPr"))
            if header and index == 0:
                shade = ET.SubElement(cell_props, tag("w", "shd"))
                shade.set(tag("w", "fill"), "EAF0F6")
            paragraph = ET.SubElement(cell, tag("w", "p"))
            add_run(paragraph, value, bold=(header and index == 0))
    return table


def add_image(body, screenshot, image_index, relationships):
    rel_id = f"rIdImage{image_index}"
    media_name = f"screenshot-{image_index:02d}.png"
    relationships.append((rel_id, f"media/{media_name}"))
    image = screenshot.read_bytes()
    if image[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"Expected PNG screenshot: {screenshot}")
    pixel_width, pixel_height = struct.unpack(">II", image[16:24])
    cx = min(EMU_PER_INCH * 6, pixel_width * 9525)
    cy = int(cx * pixel_height / pixel_width)
    max_height = int(EMU_PER_INCH * 4.5)
    if cy > max_height:
        cx = int(cx * max_height / cy)
        cy = max_height

    paragraph = ET.SubElement(body, tag("w", "p"))
    run = ET.SubElement(paragraph, tag("w", "r"))
    drawing = ET.SubElement(run, tag("w", "drawing"))
    inline = ET.SubElement(drawing, tag("wp", "inline"), {
        "distT": "0", "distB": "0", "distL": "0", "distR": "0",
    })
    ET.SubElement(inline, tag("wp", "extent"), {"cx": str(cx), "cy": str(cy)})
    ET.SubElement(inline, tag("wp", "docPr"), {
        "id": str(image_index),
        "name": media_name,
        "descr": f"Failure screenshot for test case {screenshot.name}",
    })
    frame = ET.SubElement(inline, tag("wp", "cNvGraphicFramePr"))
    ET.SubElement(frame, tag("a", "graphicFrameLocks"), {"noChangeAspect": "1"})
    graphic = ET.SubElement(inline, tag("a", "graphic"))
    graphic_data = ET.SubElement(graphic, tag("a", "graphicData"), {
        "uri": NS["pic"],
    })
    picture = ET.SubElement(graphic_data, tag("pic", "pic"))
    nonvisual = ET.SubElement(picture, tag("pic", "nvPicPr"))
    ET.SubElement(nonvisual, tag("pic", "cNvPr"), {
        "id": str(image_index),
        "name": media_name,
        "descr": f"Failure screenshot for {screenshot.name}",
    })
    ET.SubElement(nonvisual, tag("pic", "cNvPicPr"))
    fill = ET.SubElement(picture, tag("pic", "blipFill"))
    ET.SubElement(fill, tag("a", "blip"), {tag("r", "embed"): rel_id})
    stretch = ET.SubElement(fill, tag("a", "stretch"))
    ET.SubElement(stretch, tag("a", "fillRect"))
    shape = ET.SubElement(picture, tag("pic", "spPr"))
    transform = ET.SubElement(shape, tag("a", "xfrm"))
    ET.SubElement(transform, tag("a", "off"), {"x": "0", "y": "0"})
    ET.SubElement(transform, tag("a", "ext"), {"cx": str(cx), "cy": str(cy)})
    geometry = ET.SubElement(shape, tag("a", "prstGeom"), {"prst": "rect"})
    ET.SubElement(geometry, tag("a", "avLst"))


def build_document(summary, cases):
    document = ET.Element(tag("w", "document"))
    body = ET.SubElement(document, tag("w", "body"))
    relationships = []

    add_paragraph(body, "Test Case Execution Evidence", "Title")
    add_labeled_paragraph(body, "Project", "Automation Exercise Web QA")
    for label, key in (
        ("Target", "Target URL"),
        ("Framework / browser", "Framework / browser"),
        ("Execution start / end", "Execution start / end"),
        ("Duration", "Duration"),
        ("Report generated", "Report generated"),
    ):
        add_labeled_paragraph(body, label, summary.get(key, "Not recorded"))

    add_paragraph(body, "Execution summary", "Heading1")
    add_table(body, [
        ["Total cases", "Executed", "Passed", "Failed", "Skipped", "Not run", "Pass rate"],
        [
            summary.get("Inventory cases", ""),
            summary.get("Executed", ""),
            summary.get("Passed", ""),
            summary.get("Failed", ""),
            summary.get("Skipped / not applicable", ""),
            summary.get("Not run / missing result", ""),
            summary.get("Pass rate (executed cases)", ""),
        ],
    ])
    add_paragraph(
        body,
        "This report records all 74 inventory cases with before/after images and screenshots "
        "after browser actions, grouped by case. Failures are not automatically classified as application defects.",
    )

    add_paragraph(body, "Results overview", "Heading1")
    add_table(body, [["Case", "Name", "Scenario / reference", "Status"]] + [
        [
            case["id"],
            case["name"],
            case["fields"].get("Scenario / reference", ""),
            case["fields"].get("Status", "Not recorded"),
        ]
        for case in cases
    ])

    add_paragraph(body, "Case-by-case execution details", "Heading1")
    image_index = 0
    for case in cases:
        fields = case["fields"]
        add_paragraph(body, f'{case["id"]} — {case["name"]}', "Heading2")
        for label in (
            "Scenario / reference",
            "Priority / type",
            "Requirements",
            "Status",
            "Execution time",
            "Steps executed",
            "Expected result",
            "Actual result",
            "Evidence",
            "Notes",
        ):
            add_labeled_paragraph(body, label, fields.get(label, "Not recorded"), label == "Status")
        if case["before_screenshot"] and case["after_screenshot"]:
            image_index += 1
            add_paragraph(body, "Before execution", "Heading3")
            add_image(body, case["before_screenshot"], image_index, relationships)
            add_paragraph(body, str(case["before_screenshot"].relative_to(ROOT)))
            for step_screenshot in case["step_screenshots"]:
                image_index += 1
                add_paragraph(body, step_screenshot.stem, "Heading3")
                add_image(body, step_screenshot, image_index, relationships)
                add_paragraph(body, str(step_screenshot.relative_to(ROOT)))
            image_index += 1
            add_paragraph(body, "After result", "Heading3")
            add_image(body, case["after_screenshot"], image_index, relationships)
            add_paragraph(body, str(case["after_screenshot"].relative_to(ROOT)))
            if case["failure_screenshot"]:
                image_index += 1
                add_paragraph(body, "Cypress failure screenshot", "Heading3")
                add_image(body, case["failure_screenshot"], image_index, relationships)
                add_paragraph(body, str(case["failure_screenshot"].relative_to(ROOT)))

    add_paragraph(body, "Run artifacts", "Heading1")
    for artifact in (
        "test-artifacts/automationexercise/reports/cypress-results.json",
        "test-artifacts/automationexercise/test-execution/cypress-run-step-by-step.log",
        summary.get("Execution video", ""),
        "test-artifacts/automationexercise/test-execution/README.md",
        "test-artifacts/automationexercise/reports/05-FINAL-CLOSURE-REPORT.md",
    ):
        if artifact:
            add_paragraph(body, artifact)

    section = ET.SubElement(body, tag("w", "sectPr"))
    page_size = ET.SubElement(section, tag("w", "pgSz"), {"w": "12240", "h": "15840"})
    page_size.set(tag("w", "orient"), "portrait")
    ET.SubElement(section, tag("w", "pgMar"), {
        "top": "900", "right": "900", "bottom": "900", "left": "900",
        "header": "450", "footer": "450", "gutter": "0",
    })
    return document, relationships, image_index


def build_styles():
    styles = ET.Element(tag("w", "styles"))
    normal = ET.SubElement(styles, tag("w", "style"), {
        tag("w", "type"): "paragraph", tag("w", "default"): "1", tag("w", "styleId"): "Normal",
    })
    ET.SubElement(normal, tag("w", "name"), {tag("w", "val"): "Normal"})
    props = ET.SubElement(normal, tag("w", "rPr"))
    ET.SubElement(props, tag("w", "rFonts"), {tag("w", "ascii"): "Arial", tag("w", "hAnsi"): "Arial"})
    ET.SubElement(props, tag("w", "sz"), {tag("w", "val"): "20"})
    for style_id, name, size, color in (
        ("Title", "Title", "36", "17365D"),
        ("Heading1", "heading 1", "30", "17365D"),
        ("Heading2", "heading 2", "24", "17365D"),
        ("Heading3", "heading 3", "22", "17365D"),
    ):
        style = ET.SubElement(styles, tag("w", "style"), {
            tag("w", "type"): "paragraph", tag("w", "styleId"): style_id,
        })
        ET.SubElement(style, tag("w", "name"), {tag("w", "val"): name})
        rpr = ET.SubElement(style, tag("w", "rPr"))
        ET.SubElement(rpr, tag("w", "b"))
        ET.SubElement(rpr, tag("w", "color"), {tag("w", "val"): color})
        ET.SubElement(rpr, tag("w", "sz"), {tag("w", "val"): size})
    return styles


def package_docx(summary, cases):
    document, image_relationships, image_count = build_document(summary, cases)
    content_types = ET.Element(tag("ct", "Types"))
    ET.SubElement(content_types, tag("ct", "Default"), {
        "Extension": "rels", "ContentType": "application/vnd.openxmlformats-package.relationships+xml",
    })
    ET.SubElement(content_types, tag("ct", "Default"), {
        "Extension": "xml", "ContentType": "application/xml",
    })
    ET.SubElement(content_types, tag("ct", "Default"), {
        "Extension": "png", "ContentType": "image/png",
    })
    ET.SubElement(content_types, tag("ct", "Override"), {
        "PartName": "/word/document.xml",
        "ContentType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
    })
    ET.SubElement(content_types, tag("ct", "Override"), {
        "PartName": "/word/styles.xml",
        "ContentType": "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
    })

    root_rels = ET.Element(tag("rel", "Relationships"))
    ET.SubElement(root_rels, tag("rel", "Relationship"), {
        "Id": "rId1",
        "Type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        "Target": "word/document.xml",
    })
    document_rels = ET.Element(tag("rel", "Relationships"))
    ET.SubElement(document_rels, tag("rel", "Relationship"), {
        "Id": "rIdStyles",
        "Type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
        "Target": "styles.xml",
    })
    for rel_id, target in image_relationships:
        ET.SubElement(document_rels, tag("rel", "Relationship"), {
            "Id": rel_id,
            "Type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
            "Target": target,
        })

    with zipfile.ZipFile(OUTPUT, "w", zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("[Content_Types].xml", ET.tostring(content_types, encoding="utf-8", xml_declaration=True))
        archive.writestr("_rels/.rels", ET.tostring(root_rels, encoding="utf-8", xml_declaration=True))
        archive.writestr("word/document.xml", ET.tostring(document, encoding="utf-8", xml_declaration=True))
        archive.writestr("word/styles.xml", ET.tostring(build_styles(), encoding="utf-8", xml_declaration=True))
        archive.writestr("word/_rels/document.xml.rels", ET.tostring(document_rels, encoding="utf-8", xml_declaration=True))
        image_index = 0
        for case in cases:
            for image in (
                [case["before_screenshot"]]
                + case["step_screenshots"]
                + [case["after_screenshot"], case["failure_screenshot"]]
            ):
                if image is not None:
                    image_index += 1
                    archive.write(image, f"word/media/screenshot-{image_index:02d}.png")
    return image_count


def main():
    if not SOURCE.is_file():
        raise FileNotFoundError(f"Execution report not found: {SOURCE}")
    summary, cases = parse_report(SOURCE.read_text(encoding="utf-8"))
    screenshot_count = package_docx(summary, cases)
    print(f"Generated {OUTPUT.relative_to(ROOT)} with {len(cases)} cases and {screenshot_count} embedded execution screenshots.")


if __name__ == "__main__":
    main()
