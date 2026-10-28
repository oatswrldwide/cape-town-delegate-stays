#!/usr/bin/env python3
"""Daily Kaapstays SEO draft generator and email notifier."""
import datetime as dt
import json
import os
import re
import smtplib
import subprocess
import urllib.request
from email.message import EmailMessage
from pathlib import Path

SITE = "https://kaapstays.co.za"
MEETING_URL = "https://calendar.app.google/6Jk4HBCx46S32vx68"
TODAY = dt.datetime.now(dt.timezone.utc).date()
CATEGORIES = [
    ("manganese", "South African manganese sourcing"),
    ("chrome", "South African chrome sourcing"),
    ("fruit", "South African fruit exports"),
]
category, pillar = CATEGORIES[(TODAY.toordinal() - 1) % len(CATEGORIES)]
TOPICS = {
    "manganese": [
        "How international buyers can evaluate South African manganese suppliers",
        "Questions to ask before sourcing manganese ore from South Africa",
        "South African manganese sourcing: documents and specifications buyers should clarify",
        "A practical guide to manganese ore procurement from South Africa",
    ],
    "chrome": [
        "How international buyers can approach chrome ore sourcing in South Africa",
        "Chrome ore procurement checklist for international buyers",
        "Questions to clarify before requesting a South African chrome quotation",
        "South African chrome sourcing: specifications, logistics and supplier due diligence",
    ],
    "fruit": [
        "How international buyers can source South African apples",
        "South African fruit exports: a buyer's checklist for starting a sourcing enquiry",
        "Questions importers should ask when sourcing fresh fruit from South Africa",
        "How to prepare a clear sourcing brief for South African fruit suppliers",
    ],
}
topic = TOPICS[category][(TODAY.toordinal() // 3) % len(TOPICS[category])]
out_dir = Path("content/drafts")
out_dir.mkdir(parents=True, exist_ok=True)
slug = re.sub(r"[^a-z0-9]+", "-", topic.lower()).strip("-")[:75]
out_path = out_dir / f"{TODAY.isoformat()}-{slug}.md"

def generate_article():
    payload = {
        "model": os.getenv("OPENAI_MODEL", "gpt-4.1-mini"),
        "messages": [
            {"role": "system", "content": "You write careful B2B export sourcing content. Never fabricate facts. Return valid JSON only."},
            {"role": "user", "content": f"""
Create one original B2B SEO article draft for Kaapstays, a South African sourcing gateway
helping international buyers investigate South African products.
Today's content pillar: {pillar}. Working topic: {topic}.
Audience: international importers, commodity traders, procurement teams and distributors.

Return ONLY valid JSON with keys: title, meta_description, target_keyword,
secondary_keywords (array), suggested_slug, excerpt, article_markdown,
fact_check_notes (array), internal_link_suggestions (array).
Write 900-1300 words, natural professional English, useful and commercially credible,
with H2/H3 headings, a buyer checklist, FAQs, and one clear CTA.
Avoid repetitive city/keyword doorway pages. Do not invent supplier names, live inventory,
grades, assays, certifications, prices, export volumes, lead times, or legal requirements.
For manganese/chrome, advise buyers to confirm specifications, assay, origin, quantity,
Incoterms, shipment schedule, documents and independent inspection with counterparties.
Do not imply Kaapstays has verified stock or can guarantee transactions.
For fruit, advise buyers to confirm variety, season, grade, pack format, phytosanitary/import
requirements, cold-chain, availability and destination-market requirements.
Distinguish general guidance from facts needing current verification.
Position Kaapstays as a sourcing coordination gateway, not a mine, producer, exporter of
record, customs broker or logistics provider unless explicitly verified.
Include the CTA to book an export meeting: {MEETING_URL}
Do not add another email address, enquiry form or competing CTA.
This is a draft for human review, not automatic publication.
"""}
        ],
        "temperature": 0.5,
        "response_format": {"type": "json_object"},
    }
    request = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Authorization": "Bearer " + os.environ["OPENAI_API_KEY"],
                 "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        data = json.load(response)
    return json.loads(data["choices"][0]["message"]["content"])

def main():
    if out_path.exists():
        print("Draft already exists: " + str(out_path))
        return
    article = generate_article()
    required = ["title", "meta_description", "target_keyword", "article_markdown"]
    missing = [key for key in required if not article.get(key)]
    if missing:
        raise ValueError("AI response missing required fields: " + str(missing))
    clean = lambda value: str(value).replace('"', "'").replace("\n", " ")
    lines = [
        "---",
        'title: "' + clean(article["title"]) + '"',
        'date: "' + TODAY.isoformat() + '"',
        'category: "' + category + '"',
        'target_keyword: "' + clean(article["target_keyword"]) + '"',
        'meta_description: "' + clean(article["meta_description"]) + '"',
        'status: "draft"',
        "---", "",
        "> Editorial status: DRAFT — review all claims before publishing.", "",
        "Suggested URL slug: /" + str(article.get("suggested_slug", slug)).strip("/") + "/",
        "Content pillar: " + pillar,
        "Excerpt: " + str(article.get("excerpt", "")), "",
        article["article_markdown"].strip(), "",
        "## SEO and editorial review",
        "- Target keyword: " + article["target_keyword"],
        "- Secondary keywords: " + ", ".join(article.get("secondary_keywords", [])),
        "- Internal-link suggestions: " + "; ".join(article.get("internal_link_suggestions", [])),
        "- Fact-check notes: " + "; ".join(article.get("fact_check_notes", [])),
        "- Primary CTA: Book an Export Meeting — " + MEETING_URL, "",
        "## Publication checklist",
        "- [ ] Verify current requirements and all factual statements.",
        "- [ ] Confirm this page answers a distinct buyer question.",
        "- [ ] Add relevant internal links and verify metadata/canonical URL.",
        "- [ ] Review the CTA and use the shared Kaapstays meeting link.",
        "- [ ] Publish only after human approval.", "",
    ]
    out_path.write_text("\n".join(lines), encoding="utf-8")
    # Commit and push before emailing so the GitHub link is live when received.
    subprocess.run(["git", "config", "user.name", "github-actions[bot]"], check=True)
    subprocess.run(["git", "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"], check=True)
    subprocess.run(["git", "add", str(out_path)], check=True)
    subprocess.run(["git", "commit", "-m", "Add daily SEO draft: " + TODAY.isoformat()], check=True)
    subprocess.run(["git", "push"], check=True)
    repo = os.getenv("GITHUB_REPOSITORY", "oatswrldwide/cape-town-delegate-stays")
    file_url = "https://github.com/" + repo + "/blob/main/" + out_path.as_posix()
    msg = EmailMessage()
    msg["Subject"] = "Kaapstays SEO draft: " + category.title() + " — " + article["title"]
    msg["From"] = os.environ["SMTP_USERNAME"]
    msg["To"] = os.getenv("EMAIL_TO", "ongezile.mqokeli@gmail.com")
    msg.set_content(
        "Your daily Kaapstays SEO draft is ready for review.\n\n"
        "Pillar: " + pillar + "\nTarget keyword: " + article["target_keyword"] +
        "\nMeta description: " + article["meta_description"] +
        "\n\nOpen the draft in GitHub:\n" + file_url +
        "\n\nThis is a saved draft, not a live page. Review claims, differentiation, "
        "internal links and search intent before publishing.\n\nMeeting CTA: " + MEETING_URL
    )
    with smtplib.SMTP(os.environ["SMTP_HOST"], int(os.getenv("SMTP_PORT", "587")), timeout=30) as server:
        server.starttls()
        server.login(os.environ["SMTP_USERNAME"], os.environ["SMTP_PASSWORD"])
        server.send_message(msg)
    print("Generated " + str(out_path) + " and emailed " + msg["To"])

if __name__ == "__main__":
    main()
