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
