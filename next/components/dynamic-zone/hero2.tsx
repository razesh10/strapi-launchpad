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
      className="h-screen overflow-hidden relative flex flex-col items-center justify-center max-w-7xl mx-auto "
      style={{
        backgroundImage: `url(${bg_image && strapiImage(bg_image?.url)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Heading
        as="h1"
        className="text-4xl md:text-4xl lg:text-8xl font-semibold text-center mt-6 relative z-10  py-6"
      >
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
  );
};
