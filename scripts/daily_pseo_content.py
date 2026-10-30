#!/usr/bin/env python3
"""Generate five template-based Kaapstays SEO drafts daily and email their GitHub links.

No AI/content-generation API is used. Articles are structured editorial drafts and must
be fact-checked and improved before publication. SMTP is used only for email delivery.
"""
import datetime as dt
import os
import re
import smtplib
import subprocess
from email.message import EmailMessage
from pathlib import Path

SITE = "https://kaapstays.co.za"
MEETING_URL = "https://calendar.app.google/6Jk4HBCx46S32vx68"
RECIPIENT = os.getenv("EMAIL_TO") or "ongezile.mqokeli@gmail.com"
TODAY = dt.datetime.now(dt.timezone.utc).date()
OUT_DIR = Path("content/drafts")

# Five distinct buyer-intent topics per day. The index advances daily to avoid
# regenerating the same five titles on consecutive days.
TOPICS = [
    {"category": "manganese", "title": "How to Evaluate a South African Manganese Supplier", "keyword": "South African manganese suppliers", "angle": "supplier due diligence"},
    {"category": "manganese", "title": "Manganese Ore Sourcing Checklist for International Buyers", "keyword": "manganese ore sourcing", "angle": "procurement preparation"},
    {"category": "chrome", "title": "A Practical Guide to Chrome Ore Sourcing in South Africa", "keyword": "chrome ore sourcing South Africa", "angle": "sourcing process"},
    {"category": "chrome", "title": "Questions to Ask Before Requesting a Chrome Ore Quote", "keyword": "chrome ore quotation", "angle": "quotation readiness"},
    {"category": "fruit", "title": "How Importers Can Prepare to Source South African Fruit", "keyword": "South African fruit exporters", "angle": "fruit sourcing preparation"},
    {"category": "manganese", "title": "Manganese Procurement: Specifications Buyers Should Clarify", "keyword": "manganese procurement", "angle": "specification clarity"},
    {"category": "chrome", "title": "Chrome Ore Buyer Due Diligence: A Pre-Order Checklist", "keyword": "chrome ore supplier due diligence", "angle": "counterparty checks"},
    {"category": "fruit", "title": "A Buyer’s Checklist for Sourcing South African Apples", "keyword": "South African apple suppliers", "angle": "fresh apple procurement"},
    {"category": "manganese", "title": "Preparing a Clear Manganese Sourcing Brief", "keyword": "manganese sourcing request", "angle": "buyer brief"},
    {"category": "chrome", "title": "What to Include in a South African Chrome Sourcing Enquiry", "keyword": "South African chrome sourcing enquiry", "angle": "enquiry preparation"},
    {"category": "fruit", "title": "Fresh Fruit Export Enquiries: Details Buyers Should Prepare", "keyword": "fresh fruit exports South Africa", "angle": "export enquiry"},
    {"category": "manganese", "title": "Comparing Manganese Offers: Questions Beyond the Price", "keyword": "compare manganese ore offers", "angle": "offer comparison"},
    {"category": "chrome", "title": "Comparing Chrome Ore Offers: A Buyer’s Framework", "keyword": "compare chrome ore offers", "angle": "offer comparison"},
    {"category": "fruit", "title": "How to Prepare a South African Dried-Fruit Sourcing Brief", "keyword": "South African dried fruit suppliers", "angle": "dried fruit sourcing"},
    {"category": "manganese", "title": "From First Contact to Due Diligence: Manganese Sourcing Steps", "keyword": "manganese sourcing process", "angle": "process planning"},
    {"category": "chrome", "title": "Planning a Chrome Ore Purchase: Documents and Checks to Discuss", "keyword": "chrome ore purchase checklist", "angle": "document readiness"},
    {"category": "fruit", "title": "Questions to Ask When Sourcing South African Fruit for Import", "keyword": "import South African fruit", "angle": "importer questions"},
    {"category": "manganese", "title": "Manganese Sourcing Risks Buyers Should Check Before Committing", "keyword": "manganese sourcing risks", "angle": "risk review"},
    {"category": "chrome", "title": "Chrome Sourcing Risks and Counterparty Checks for Buyers", "keyword": "chrome sourcing risks", "angle": "risk review"},
    {"category": "fruit", "title": "Fresh Fruit Sourcing: Quality, Packaging and Cold-Chain Questions", "keyword": "fresh fruit sourcing South Africa", "angle": "quality and logistics"},
]

DETAILS = {
    "manganese": {
        "product": "manganese ore",
        "checks": [
            "the exact product description and specification required by the buyer",
            "whether an assay or independent laboratory report is available and how it will be verified",
            "declared origin, available quantity and whether the seller is authorised to offer it",
            "sampling, inspection, rejection and dispute procedures agreed by both parties",
            "the proposed Incoterm, delivery point, shipment window and allocation of costs",
        ],
        "documents": "Ask counterparties to identify the documents they can actually provide, and have your trade, legal and logistics advisers confirm what is required for the transaction and destination.",
        "risk": "Do not treat an indicative specification, sample, seller presentation or draft offer as proof that a shipment exists or meets contract requirements.",
    },
    "chrome": {
        "product": "chrome ore",
        "checks": [
            "the grade and specification required by the intended end use",
            "whether assay data and sampling methodology can be independently checked",
            "the stated origin, quantity, availability and seller's authority to offer the material",
            "inspection, acceptance, rejection and dispute-resolution terms",
            "the proposed Incoterm, delivery point, shipment window and cost responsibilities",
        ],
        "documents": "Ask counterparties to list the documents they can supply, then independently confirm destination-market, transport, customs and contractual requirements with qualified advisers.",
        "risk": "A quotation or certificate shared by a counterparty is not, by itself, independent proof of stock, origin, quality or authority to sell.",
    },
    "fruit": {
        "product": "South African fruit",
        "checks": [
            "fruit type, variety, grade, size range and intended market",
            "seasonal availability and confirmation of the actual packing window",
            "pack format, labelling, shelf-life expectations and quality tolerances",
            "cold-chain arrangements, transit time assumptions and temperature monitoring",
            "destination-country phytosanitary, import, residue and labelling requirements",
        ],
        "documents": "Confirm current import and phytosanitary requirements with the destination country's competent authority and the relevant exporter or packhouse before making commitments.",
        "risk": "Fruit availability, quality, seasonality and import eligibility vary. Do not promise a variety, volume, certification or shipping date until the responsible supplier confirms it.",
    },
}

def make_article(item, index):
    category = item["category"]
    detail = DETAILS[category]
    product = detail["product"]
    date_label = TODAY.isoformat()
    slug = re.sub(r"[^a-z0-9]+", "-", item["title"].lower()).strip("-")
    path = OUT_DIR / f"{date_label}-{index:02d}-{slug}.md"
    checks = "\n".join(f"- {x.capitalize()}." for x in detail["checks"])
    title = item["title"]
    keyword = item["keyword"]
    paragraphs = f"""# {title}

International buyers looking at {product} from South Africa need a clear brief, credible counterparties and a verification process before they discuss a transaction. This guide focuses on {item["angle"]} and provides a practical starting point for importers, procurement teams and trading businesses. It is general guidance, not confirmation of current stock, pricing or a specific supplier.

## Start with a defined buying requirement

Before approaching potential suppliers, write down what you need and why. A useful sourcing brief identifies the intended application or market, the required product specification, target quantity, delivery destination, preferred timing and the commercial terms you want to discuss. Separate essential requirements from preferences so that counterparties can respond clearly.

For {product}, avoid vague descriptions. State the specifications that matter to your business and ask each counterparty to confirm which requirements it can meet. If a specification, test method or quality tolerance is critical, agree how it will be evidenced and who will verify it before you commit.

## Due-diligence checklist

Use the following points to organise an initial conversation:

{checks}

These are questions to verify, not claims that a supplier has already passed the checks. Record who supplied each answer, when it was received and what independent evidence supports it. Where the transaction is material, obtain appropriate legal, trade, inspection and logistics advice before paying deposits or signing a contract.

## Compare offers on more than headline price

An offer is only comparable when the underlying assumptions are clear. Check whether each proposal refers to the same product specification, quantity, delivery point, currency, Incoterm, shipment period, inspection process and payment milestones. Ask counterparties to itemise exclusions and explain any conditions that could change the final delivered cost.

For commodity transactions, a low headline price is not enough to establish that an offer is workable. Verify the identity and authority of the seller, the evidence supporting product claims, the agreed inspection process and the contractual remedy if the product or delivery differs from the agreement. Do not rely solely on screenshots, forwarded documents or unverified introductions.

## Documents and requirements to confirm

{detail["documents"]} Requirements depend on the commodity, route, contract and destination. Do not assume a generic checklist is complete for your particular transaction.

{detail["risk"]} Keep a written record of open questions and do not present unverified information to your own customers as confirmed.

## A practical first-contact workflow

1. Prepare a concise buyer brief with product, specification, quantity, destination and timing.
2. Ask the prospective counterparty to confirm which requirements it can meet and what evidence it can provide.
3. Verify the counterparty independently using appropriate company, trade and professional checks.
4. Agree the inspection, document, delivery, payment and dispute processes in writing before commitment.
5. Re-check time-sensitive information immediately before signing or arranging payment.

For fruit buyers, include variety, grade, packaging, packing window, cold-chain expectations and destination-market requirements. For manganese and chrome buyers, focus on agreed specifications, assay verification, origin, quantity, inspection and delivery terms. In every case, confirm the details with the responsible counterparties.

## Frequently asked questions

### Can Kaapstays guarantee supply or product availability?
No. This draft does not represent confirmed inventory, a verified offer or a guarantee of a transaction. Any specific availability, specification, price or timeline must be confirmed by the relevant counterparty.

### What should I send in an initial sourcing enquiry?
Share the product you need, required specification, quantity range, destination, timing and any essential commercial or documentation requirements. Say which details are flexible and which are mandatory.

### Should I pay before completing due diligence?
Do not rely on an introduction or an unverified document as sufficient evidence. Use appropriate independent checks and obtain qualified advice on the proposed contract and payment arrangements before committing funds.

## Prepare your sourcing brief

Kaapstays is a South African sourcing gateway for international buyers. If you would like to discuss a sourcing requirement, prepare your product details and book an export meeting using the shared link below. A meeting is an opportunity to discuss the request; it is not a guarantee of supply.

[Book an Export Meeting]({MEETING_URL})

---

## Editorial and SEO review notes

- Target keyword: **{keyword}**
- Category: **{category}**
- Draft date: {date_label}
- Draft method: template-generated without an AI or content-generation API.
- Before publication: add verified, original expertise; check all current trade and destination-market requirements; confirm the page is meaningfully distinct from existing content; add relevant internal links; check canonical URL and metadata.
- Do not add invented supplier names, stock, grades, assays, certificates, prices, volumes, shipping dates or legal claims.
"""
    meta = f"Practical {category} sourcing guidance for international buyers: prepare a brief, verify counterparties and clarify specifications, documents and delivery terms."
    frontmatter = f'''---
title: "{title}"
date: "{date_label}"
category: "{category}"
target_keyword: "{keyword}"
meta_description: "{meta}"
status: "draft"
draft_method: "template"
---

> Editorial status: DRAFT — template-generated, not independently researched, fact-checked or ready for automatic publication.

Suggested URL slug: /{slug}/
Primary CTA: Book an Export Meeting — {MEETING_URL}

'''
    path.write_text(frontmatter + paragraphs, encoding="utf-8")
    return path, title, keyword, category

def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    # Select a rotating window of five topics, with the starting point changing daily.
    start = TODAY.toordinal() % len(TOPICS)
    selected = [TOPICS[(start + i) % len(TOPICS)] for i in range(5)]
    created = [make_article(item, i + 1) for i, item in enumerate(selected)]

    subprocess.run(["git", "config", "user.name", "github-actions[bot]"], check=True)
    subprocess.run(["git", "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"], check=True)
    for path, _, _, _ in created:
        subprocess.run(["git", "add", str(path)], check=True)
    subprocess.run(["git", "commit", "-m", f"Add five Kaapstays SEO drafts: {TODAY.isoformat()}"], check=True)
    # The branch may receive edits after checkout; rebase this generated commit
    # onto the latest remote main before pushing to avoid non-fast-forward errors.
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], check=True)
    subprocess.run(["git", "push", "origin", "HEAD:main"], check=True)

    repo = os.getenv("GITHUB_REPOSITORY", "oatswrldwide/cape-town-delegate-stays")
    lines = [
        f"Your five Kaapstays content drafts for {TODAY.isoformat()} are saved in GitHub.",
        "",
        "These are template-generated drafts, not AI-written or independently researched articles. Please review and add original, verified value before publishing. They are not live website URLs.",
        "",
    ]
    for number, (path, title, keyword, category) in enumerate(created, start=1):
        url = f"https://github.com/{repo}/blob/main/{path.as_posix()}"
        lines.append(f"{number}. [{category.upper()}] {title}")
        lines.append(f"   Target keyword: {keyword}")
        lines.append(f"   Draft: {url}")
        lines.append("")
    lines.extend(["Book an export meeting: " + MEETING_URL, ""])
    message = EmailMessage()
    message["Subject"] = f"Kaapstays: 5 daily SEO drafts — {TODAY.isoformat()}"
    message["From"] = os.environ["SMTP_USERNAME"]
    message["To"] = RECIPIENT
    message.set_content("\n".join(lines))

    with smtplib.SMTP(os.environ["SMTP_HOST"], int(os.getenv("SMTP_PORT") or "587"), timeout=30) as server:
        server.starttls()
        server.login(os.environ["SMTP_USERNAME"], os.environ["SMTP_PASSWORD"])
        server.send_message(message)
    print(f"Created {len(created)} drafts and emailed links to {RECIPIENT}")

if __name__ == "__main__":
    main()
