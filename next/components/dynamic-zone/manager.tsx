import React from "react";
import dynamic from "next/dynamic";

interface DynamicZoneComponent {
  __component: string;
  id: number;
  [key: string]: any;
}

interface Props {
  dynamicZone: DynamicZoneComponent[];
  locale: string;
}

const componentMapping: { [key: string]: any } = {
  "dynamic-zone.hero": dynamic(() => import("./hero").then((mod) => mod.Hero), {
    ssr: false,
  }),
  "dynamic-zone.features": dynamic(
    () => import("./features").then((mod) => mod.Features),
    { ssr: false }
  ),
  "dynamic-zone.testimonials": dynamic(
    () => import("./testimonials").then((mod) => mod.Testimonials),
    { ssr: false }
  ),
  "dynamic-zone.how-it-works": dynamic(
    () => import("./how-it-works").then((mod) => mod.HowItWorks2),
    { ssr: false }
  ),
  "dynamic-zone.brands": dynamic(
    () => import("./brands").then((mod) => mod.Brands),
    { ssr: false }
  ),
  "dynamic-zone.pricing": dynamic(
    () => import("./pricing").then((mod) => mod.Pricing),
    { ssr: false }
  ),
  "dynamic-zone.launches": dynamic(
    () => import("./launches").then((mod) => mod.Launches),
    { ssr: false }
  ),
  "dynamic-zone.cta": dynamic(() => import("./cta").then((mod) => mod.CTA), {
    ssr: false,
  }),
  "dynamic-zone.form-next-to-section": dynamic(
    () => import("./contact1").then((mod) => mod.Contact1),
    { ssr: false }
  ),
  "dynamic-zone.faq": dynamic(() => import("./faq").then((mod) => mod.FAQ), {
    ssr: false,
  }),
  "dynamic-zone.related-products": dynamic(
    () => import("./related-products").then((mod) => mod.RelatedProducts),
    { ssr: false }
  ),
  "dynamic-zone.related-articles": dynamic(
    () => import("./related-articles").then((mod) => mod.RelatedArticles),
    { ssr: false }
  ),
  "dynamic-zone.hero2": dynamic(
    () => import("./hero2").then((mod) => mod.Hero2),
    { ssr: false }
  ),
  "dynamic-zone.feature2": dynamic(
    () => import("./Feature2").then((mod) => mod.Feature2),
    { ssr: false }
  ),
  "dynamic-zone.cta2": dynamic(() => import("./cta2").then((mod) => mod.CTA2), {
    ssr: false,
  }),
  "dynamic-zone.testimonials2": dynamic(
    () =>
      import("./testimonials/testimonials2").then((mod) => mod.Testimonial2),
    {
      ssr: false,
    }
  ),
  "dynamic-zone.who-are-we": dynamic(
    () => import("./about/who-are-we").then((mod) => mod.WhoAreWe),
    {
      ssr: false,
    }
  ),
  "dynamic-zone.hero-about": dynamic(
    () => import("./about/hero-about").then((mod) => mod.HeroAbout),
    {
      ssr: false,
    }
  ),
};

const DynamicZoneManager: React.FC<Props> = ({ dynamicZone, locale }) => {
  return (
    <div>
      {dynamicZone.map((componentData) => {
        const Component = componentMapping[componentData.__component];
        if (!Component) {
          console.warn(`No component found for: ${componentData.__component}`);
          return null;
        }
        return (
          <Component
            key={componentData.id}
            {...componentData}
            locale={locale}
          />
        );
      })}
    </div>
  );
};

export default DynamicZoneManager;
