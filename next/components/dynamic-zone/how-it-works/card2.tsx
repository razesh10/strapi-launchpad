import React from "react";

export const Card2 = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="flex gap-10 items-center even:flex-row-reverse relative">
      <div>
        <p className="text-slate-600 text-[80px] font-bold opacity-30">
          {"0" + index}
        </p>
      </div>
      <div
        className={`flex items-center relative ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-[300px] h-px bg-gradient-to-r from-neutral-800 to-neutral-400 rounded-full"></div>
        <div className="flex flex-col gap-2 items-start justify-center rounded-md shadow-md bg-gradient-to-br from-slate-900 to-blue-900 p-5 w-[400px] h-[120px] ">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-neutral-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
