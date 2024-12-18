import React from "react";
import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import Link from "next/link";
import { strapiImage } from "@/lib/strapi/strapiImage";
import { Button } from "../elements/button";

export const Hero2 = ({
  heading,
  sub_heading,
  buttons,
  locale,
  bg_image,
}: {
  heading: string;
  sub_heading: string;
  bg_image?: {
    url: string;
    alt: string;
  };
  buttons: any[];
  locale: string;
}) => {
  return (
    <div
      className="h-screen w-full bg-cover relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg_image && strapiImage(bg_image?.url)})`,
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-950 via-slate-900 to-slate-800 opacity-[0.95] w-full h-full"></div>
      <div className="overflow-hidden flex flex-col items-center justify-center px-8 z-10 gap-2 md:gap-4 lg:gap-6">
        <Heading as="h2" className="lg:!text-6xl font-bold text-center">
          {heading}
        </Heading>
        <Subheading>{sub_heading}</Subheading>
        <div className="flex space-x-5 items-center mt-8">
          {buttons &&
            buttons.map((button) => (
              <Link key={button?.id} href={`/${locale}${button.URL}`}>
                <Button variant={button?.variant}>{button.text}</Button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
