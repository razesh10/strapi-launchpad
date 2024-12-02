import React from "react";
import { Subheading } from "../elements/subheading";
import { Heading } from "../elements/heading";
import { FeaturesCard } from "../features-card";

type Props = {
  heading: string;
  sub_heading?: string;
  data: any;
};

export const Feature2 = ({ data, heading, sub_heading }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <div className="flex flex-col items-center gap-14 py-20 max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center gap-1">
        <Heading className="text-center font-bold !text-5xl">{heading}</Heading>
        <Subheading>{sub_heading}</Subheading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {data.map((item: any, index: number) => (
          <FeaturesCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
