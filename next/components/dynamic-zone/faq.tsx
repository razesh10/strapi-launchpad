"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/elements/heading";
import { useState } from "react";

export const FAQ = ({
  heading,
  sub_heading,
  faqs,
}: {
  heading: string;
  sub_heading: string;
  faqs: any[];
}) => {
  return (
    <Container className="flex flex-col items-center justify-between pb-20">
      <div className="relative z-20 py-10 md:pt-20">
        <Heading as="h1" className="mt-4 !text-4xl">
          {heading}
        </Heading>
        <p className="mt-4 text-neutral-400 max-w-3xl mx-auto text-center">
          {sub_heading}
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <Accordion items={faqs} />
      </div>
    </Container>
  );
};

const Accordion = ({
  items,
}: {
  items: { question: string; answer: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-blue-700 hover:border-blue-500 rounded-md transition-all duration-100 ease-in-out"
        >
          <button
            className="w-full text-left p-4 focus:outline-none transition-all duration-100 ease-in-out"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center transition-all duration-100 ease-in-out">
              <span className="font-medium text-neutral-100">
                {item.question}
              </span>
              <div
                className={`flex flex-col items-center justify-center relative group/plus w-4 h-4`}
              >
                <div className="w-4 h-[2px] bg-blue-500 rounded-full group-hover/plus:bg-white"></div>
                <div
                  className={`h-4 w-[2px] bg-blue-500 rounded-full absolute transform transition-transform group-hover/plus:bg-white ${
                    activeIndex === index ? "-rotate-90" : ""
                  }`}
                ></div>
              </div>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-100 ease-in-out ${
              activeIndex === index
                ? "max-h-screen px-4 pb-4 bg-transparent"
                : "max-h-0 px-4"
            }`}
          >
            <p className="text-gray-300">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
