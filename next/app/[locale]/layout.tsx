import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import { generateMetadataObject } from "@/lib/shared/metadata";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Button } from "antd";
import Nav1 from "@/components/navbar/Nav1";

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

  const nav1Data = await fetchContentType(
    "nav1",
    `filters[locale][$eq]=${locale}`,
    true
  );
  console.log(nav1Data.Navbar.socials, "nav1Data");
  return (
    <html lang={locale}>
      <AntdRegistry>
        <ViewTransitions>
          <CartProvider>
            <body
              className={cn(
                inter.className,
                "bg-charcoal antialiased h-full w-full"
              )}
            >
              {/* <Navbar data={pageData.navbar} locale={locale} /> */}
              <Nav1 data={nav1Data.Navbar} locale={locale} />
              {children}
              <Button type="primary">Primary</Button>

              <Footer data={pageData.footer} locale={locale} />
            </body>
          </CartProvider>
        </ViewTransitions>
      </AntdRegistry>
    </html>
  );
}
