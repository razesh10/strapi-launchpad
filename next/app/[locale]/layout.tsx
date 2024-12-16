import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import { generateMetadataObject } from "@/lib/shared/metadata";

import { Footer } from "@/components/footer/footer";
import { CartProvider } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import fetchContentType from "@/lib/strapi/fetchContentType";
import Nav1 from "@/components/navbar/Nav1";
import { WhoAreWe } from "@/components/dynamic-zone/about/who-are-we";
import { HeroAbout } from "@/components/dynamic-zone/about/hero-about";
import { Video } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Default Global SEO for pages without them
export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const pageData = await fetchContentType(
    "global",
    `&filters[locale][$eq]=${params.locale}&populate=seo.metaImage`,
    true
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pageData = await fetchContentType(
    "global",
    `filters[locale][$eq]=${locale}`,
    true
  );

  const navData = await fetchContentType(
    "nav1",
    `filters[locale][$eq]=${locale}`,
    true
  );
  console.log(navData);

  const footer = await fetchContentType(
    "footer",
    `filters[locale][$eq]=${locale}`,
    true
  );

  return (
    <html lang={locale}>
      <AntdRegistry>
        <ViewTransitions>
          <CartProvider>
            <body
              className={cn(
                inter.className,
                "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-800 antialiased h-full w-full"
              )}
            >
              <div className="mb-[60px]">
                <Nav1 data={navData?.Navbar} locale={locale} />
              </div>

              {children}
              <Footer
                footer_row={footer?.footer_row}
                locale={locale}
                logo={footer?.logo}
              />
            </body>
          </CartProvider>
        </ViewTransitions>
      </AntdRegistry>
    </html>
  );
}
