import React from "react";
import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { strapiImage } from "@/lib/strapi/strapiImage";
import Link from "next/link";
import { Button } from "../elements/button";
import Image from "next/image";

export const CTA2 = ({
  heading,
  sub_heading,
  locale,
  image,
  buttons,
}: {
  heading: string;
  sub_heading: string;
  locale: string;
  image: any;
  buttons: any;
}) => {
  return (
    <div className="py-10 md:py-20 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br shadow-md from-blue-900 via-slate-800 to-slate-950 p-10 rounded-xl flex items-center justify-center md:justify-between gap-10  w-full">
        <div className="flex flex-col items-center md:items-start gap-8">
          <Heading className="text-3xl font-bold text-center md:!text-left">
            {heading}
          </Heading>
          <p className="text-center md:text-left text-neutral-200">
            {sub_heading}
          </p>
          <Link href={`/${locale}${buttons?.URL}`}>
            <Button variant={buttons?.variant}>{buttons?.text}</Button>
          </Link>
        </div>
        <div className="lg:w-[340px] md:w-[300px] aspect-square rounded-lg overflow-hidden">
          <Image
            src={strapiImage(image?.url)}
            alt={image?.alt}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
