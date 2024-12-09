import React from "react";
import { Heading } from "./elements/heading";

type FeaturesCardProps = {
  data: {
    heading: string;
    description: string;
  };
};

export const FeaturesCard = ({ data }: FeaturesCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4 p-6 rounded-lg shadow-md border border-blue-800 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all duration-200 ease-in-out">
      <h4 className="text-lg font-bold text-white">{data.heading}</h4>

      <div className="w-20 h-[2px] bg-blue-400"></div>
      <p className="text-sm text-blue-100 line-clamp-4">{data.description}</p>
    </div>
  );
};
