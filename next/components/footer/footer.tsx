import React from "react";
import { FooterRow } from "./footer-row";
import Link from "next/link";
import Image from "next/image";
import { strapiImage } from "@/lib/strapi/strapiImage";

type FooterProps = {
  logo: any;
  footer_row: {
    title: string;
    footer_links: {
      URL: string;
      text: string;
    }[];
  }[];
  locale: string;
};

export const Footer = ({ footer_row, locale, logo }: FooterProps) => {
  return (
    <div className="flex flex-col items-center gap-8 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 pt-20 pb-8 px-4">
      <div className="flex justify-between items-start gap-4 max-w-7xl mx-auto w-full">
        {/* Left */}
        <div className="flex flex-col gap-6 md:gap-10">
          <Link href="/">
            <Image
              src={strapiImage(logo?.image?.url)}
              alt={logo?.image?.alt}
              height={40}
              width={200}
            />
          </Link>
        </div>
        {/* Right */}
        {footer_row && (
          <div className="flex gap-20 flex-wrap">
            {footer_row?.map((item: any, index: number) => (
              <FooterRow key={index}>
                <p className="text-sm md:text-base text-neutral-100">
                  {item?.title}
                </p>
                {item?.footer_links?.map((link: any, index: number) => (
                  <Link
                    key={index}
                    href={`/${locale}${link.URL}`}
                    className="hover:text-white capitalize"
                  >
                    {link.text.toLowerCase()}
                  </Link>
                ))}
              </FooterRow>
            ))}
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-neutral-600 max-w-7xl mx-auto"></div>
      <div>
        <p className="text-base text-neutral-400 text-center">
          &copy; {new Date().getFullYear()} Khelpasal
        </p>
      </div>
    </div>
  );
};
