# Kaapstays

Kaapstays is a South African sourcing gateway for international buyers. The site presents product categories, sourcing services and a meeting-booking workflow for rooibos, tea, fresh apples, dried fruit and nuts, with additional content drafts covering manganese and chrome sourcing.

## Development

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run lint
npm run build
npm run build:pages
```

The live domain is `https://kaapstays.co.za`. All enquiry and booking calls to action should use the shared `MEETING_URL` in `src/lib/site.ts` to book an export meeting. The direct contact email is `ongezile.mqokeli@gmail.com`; do not add separate enquiry forms or competing contact CTAs.

## Daily five-article content drafts

The GitHub Actions workflow `.github/workflows/daily-kaapstays-pseo.yml` runs daily at 08:00 South Africa time (06:00 UTC) and can also be run manually from the Actions tab. It generates five Markdown drafts per run under `content/drafts/`, commits them to the main branch, and emails their direct GitHub links to `ongezile.mqokeli@gmail.com`.

The generator does **not** call an AI/content-generation API. It uses a rotating set of editorial topics and structured templates covering manganese, chrome and South African fruit. The result is a starting draft, not independently researched or AI-written content. Drafts are not published to the live website automatically. Review every draft, add verified and original value, check search intent and differentiation, and confirm current trade or destination-market requirements before publishing.

### Required GitHub Actions secrets

Under Settings → Secrets and variables → Actions, configure the SMTP credentials for the mailbox or email provider used to send the digest:

- `SMTP_HOST`: SMTP server hostname.
- `SMTP_PORT`: usually `587` for STARTTLS.
- `SMTP_USERNAME`: sending mailbox username, commonly the full email address.
- `SMTP_PASSWORD`: mailbox password or provider-issued app password.
- `EMAIL_TO` is not required; the workflow sends to `ongezile.mqokeli@gmail.com`.

No `OPENAI_API_KEY` is needed. SMTP is still required to send email; GitHub Actions cannot send an email directly from a workflow without a mail delivery method.

To test, open Actions → Daily Kaapstays pSEO Drafts → Run workflow. A successful run creates five files, pushes them to GitHub and sends one email containing all five draft links. The links open Markdown files in GitHub; they are not public live-page URLs. The workflow does not publish content to the website.
