import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME, SITE_URL } from "./site";

interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  category?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    areaServed: "Worldwide",
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  areaServed = "Worldwide",
  category,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType: "Supplier sourcing and export coordination",
    provider: {
      "@id": `${SITE_URL}#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    ...(category ? { category } : {}),
    url: `${SITE_URL}${path}`,
  };
}

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
