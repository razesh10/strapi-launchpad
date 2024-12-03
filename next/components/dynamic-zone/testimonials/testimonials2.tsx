"use client";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import { strapiImage } from "@/lib/strapi/strapiImage";
import { Image, Space } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";

type CarouselDataProps = {
  image: {
    url: string;
    alt: string;
  };
  content: string;
  user_name: string;
  designation: string;
};

type TestimonmialProps = {
  data: CarouselDataProps[];
  heading: string;
  sub_heading: string;
};

export const Testimonial2 = ({
  data,
  heading,
  sub_heading,
}: TestimonmialProps) => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const Content = ({ data }: { data: any }) => {
    return (
      <div className="grid grid-cols-12 max-w-7xl mx-auto gap-10 md:gap-14 relative px-8 overflow-visible">
        <div className="col-span-3 overflow-visible">
          <div className="relative aspect-square w-full overflow-visible">
            <div className="absolute top-2 left-2 w-full aspect-square bg-blue-700"></div>

            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              }
              preview={false}
              className="aspect-square object-cover object-center w-full h-full z-10"
              alt={data?.image?.alt}
            />
          </div>
        </div>
        <div className="col-span-9 pt-4 pb-10">
          <div className="flex flex-col h-full !justify-between gap-3">
            <p className="line-clamp-4 !leading-normal font-medium !text-xl text-white">
              {data?.content}
            </p>
            <div className="flex justify-between items-start relative">
              <Space size={2} direction="vertical">
                <p className="!font-medium !text-xl text-blue-200">
                  {data?.user_name}
                </p>
                <p className="!text-slate-400 text-sm">{data?.designation}</p>
              </Space>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <div className="flex flex-col gap-[120px] py-40 overflow-visible max-w-7xl mx-auto">
      <div>
        <Heading
          as={"h2"}
          size="md"
          className="text-center font-bold !text-4xl"
        >
          {heading}
        </Heading>
        <Subheading>{sub_heading}</Subheading>
      </div>
      <div className="w-full relative overflow-visible">
        <div className="absolute -top-[60px] left-[-400px] bg-gradient-to-r from-slate-900 via-slate-900 to-transparent h-[80%] w-[100%]"></div>

        <Slider {...settings} className="h-full w-full" ref={sliderRef}>
          {data?.map((item: any, index: number) => (
            <Content key={index} data={item} />
          ))}
        </Slider>
        <div className="flex gap-2 absolute md:bottom-[70px] md:right-4 transition-all duration-500 ease-in-out">
          <ArrowLeft
            className="cursor-pointer w-7 h-7 hover:text-neutral-500"
            onClick={previous}
          />
          <ArrowRight
            className="cursor-pointer w-7 h-7 hover:text-neutral-500"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};
