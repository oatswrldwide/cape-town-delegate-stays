# Kaapstays

Kaapstays is a South African sourcing gateway for international buyers. The site presents product categories, sourcing services and a meeting-booking workflow for rooibos, tea, fresh apples, dried fruit and nuts.

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


## Daily pSEO content drafts

The GitHub Actions workflow `.github/workflows/daily-kaapstays-pseo.yml` runs daily at 08:00 South Africa time (06:00 UTC) and can also be run manually from the Actions tab. It creates one review-only Markdown draft under `content/drafts/`, commits it to the main branch, and emails a direct GitHub link.

The content rotation covers manganese sourcing, chrome sourcing and South African fruit exports. Drafts are not published to the live website automatically. Review factual claims, search intent, uniqueness, internal links and metadata before creating a public route.

Configure these repository Actions secrets under Settings → Secrets and variables → Actions:

- `OPENAI_API_KEY`: API key for article generation.
- `SMTP_HOST`: SMTP server hostname for the sending mailbox.
- `SMTP_PORT`: normally `587` for STARTTLS.
- `SMTP_USERNAME`: full email address used to authenticate.
- `SMTP_PASSWORD`: mailbox password or provider-issued app password.
- `EMAIL_TO`: recipient email address; defaults to `ongezile.mqokeli@gmail.com` if omitted.

To test, open Actions → Daily Kaapstays pSEO Draft → Run workflow. The first run requires valid OpenAI and SMTP secrets. A successful run commits the Markdown draft before sending its email so the link is available when the message arrives. API usage and mail-provider limits may incur costs.
