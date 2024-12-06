import { Button } from "@/components/elements/button";
import { strapiImage } from "@/lib/strapi/strapiImage";
import React from "react";

type aboutProps = {
  coverImage: {
    url: string;
    alt: string;
  };
  heading: string;
  description: string;
  buttons?: {
    text: string;
    URL: string;
    type: string;
    target?: string;
  }[];
};

export const HeroAbout = ({
  coverImage,
  heading,
  description,
  buttons,
}: aboutProps) => {
  return (
    <div
      className="aspect-[19/6] w-full  bg-cover bg-right bg-no-repeat"
      style={{
        backgroundImage: `url(${
          coverImage
            ? strapiImage(coverImage.url)
            : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        })`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-950 to-transparent z-[0]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-blue-100 z-10 flex flex-col justify-center h-full w-full gap-6 md:gap-8 lg:gap-10 relative">
        <h1 className="text-5xl font-bold max-w-4xl w-full text-white">
          {heading}
        </h1>
        <p className="text-base font-light text-neutral-300 max-w-4xl w-full">
          {description}
        </p>
        {buttons && (
          <div className="flex flex-col gap-4 w-full">
            {buttons.map((button, index) => (
              <Button key={index} href={button.URL} variant="primary">
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
