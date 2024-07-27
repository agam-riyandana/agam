import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";

const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Agam Riyandana Is",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agam Riyandana  Is a Digital Creator from Indonesia<a href=\"https://agamriyandana.my.id\">Agam Riyandana</a> Portofolio.",
      },
    }
  ],
  headline: "Agam Riyandana Adalah",
  description:
    "Agam Riyandana  Is a Digital Creator from Indonesia.",
  author: {
    "@type": "Person",
    name: "Agam Riyandana",
    url: "https://agamriyandana.my.id",
  },
  image: "",
  datePublished: "2022-12-10",
  dateModified: "2024-07-27",
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}
