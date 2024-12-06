"use client";
import { Modal } from "antd";
import { Play, X } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/elements/button";
import { strapiImage } from "@/lib/strapi/strapiImage";
import React from "react";
import { VideoCard } from "../videoCard";

type aboutProps = {
  videoData: {
    url: string;
    thumbnail: {
      url: string;
    };
  };
  statData: {
    stat: string;
    description: string;
  }[];
  coverImage: {
    url: string;
    alt: string;
  };
  contents: {
    title: string;
    description: string;
    button: {
      text: string;
      URL: string;
      type: string;
      target?: string;
    };
  };
};

const stats = ({
  stat,
  description,
}: {
  stat: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-start text-center gap-1 py-5 w-full last:border-none border-b border-blue-400">
      <p className="text-4xl font-bold text-blue-500">{stat}</p>
      <p className="text-base font-light text-neutral-400">{description}</p>
    </div>
  );
};

const content = ({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: {
    text: string;
    URL: string;
    type: string;
    target?: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-6 px-6 py-4 items-start justify-center ">
      <h1 className="text-4xl font-semibold text-white">
        What is{" "}
        <span className="italic font-serif text-blue-500 text-5xl">
          {title}
        </span>
      </h1>
      <p className="text-base !font-light text-neutral-300 line-clamp-8">
        {description}
      </p>
      <Button href={button?.URL} variant="primary">
        {button?.text}
      </Button>
    </div>
  );
};

export const WhoAreWe = ({
  statData,
  coverImage,
  contents,
  videoData,
}: aboutProps) => {
  return (
    <div className="pb-40">
      <div className="relative w-full h-full bg-gradient-to-tl from-slate-900 to-blue-900">
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 max-w-7xl mx-auto pt-40 pb-[400px] h-full">
          {statData && (
            <div className="w-full flex flex-col gap-2 p-6 items-start justify-center ">
              {statData.map((stat, index) => (
                <div key={index}>
                  {stats({
                    stat: stat.stat,
                    description: stat.description,
                  })}
                </div>
              ))}
            </div>
          )}

          <div
            className="w-full h-full bg-blue-200 bg-cover bg-right rounded-lg"
            style={{
              backgroundImage: `url(${
                coverImage
                  ? strapiImage(coverImage?.url)
                  : "https://plus.unsplash.com/premium_photo-1661629267218-52bf36bd7c67?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              })`,
            }}
          ></div>
          <div className="w-full h-full col-span-2">
            {content({ ...contents })}
          </div>
        </div>
      </div>
      <div className="-mt-[250px]">
        <VideoCard videoData={videoData} />
      </div>
    </div>
  );
};
