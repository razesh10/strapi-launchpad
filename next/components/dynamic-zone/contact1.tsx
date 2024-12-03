import { strapiImage } from "@/lib/strapi/strapiImage";
import { Image } from "antd";
import { Link } from "next-view-transitions";
import React from "react";

export const Contact1 = ({
  heading,
  sub_heading,
  form,
  social_media_icon_links,
  image,
}: {
  heading: string;
  sub_heading: string;
  form: any;
  social_media_icon_links: any;
  image: {
    url: string;
    alt: string;
  };
}) => {
  return (
    <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto px-4 py-40">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl text-white font-semibold">{heading}</h1>
          <p className="text-left text-neutral-300">{sub_heading}</p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          {form?.inputs?.map((input: any, index: number) => {
            const commonClasses =
              "w-full rounded-md border-2 border-blue-800 bg-transparent px-4 py-2 text-white outline-none focus:border-blue-500 focus:bg-transparent";

            return (
              <div key={index} className="flex flex-col gap-2">
                {input?.type !== "submit" && (
                  <label
                    htmlFor={input?.id || input?.name}
                    className="text-neutral-300"
                  >
                    {input?.name}
                  </label>
                )}
                {input?.type === "text" ? (
                  <input
                    id={input?.id || input?.name}
                    type="text"
                    placeholder={input?.placeholder || "Enter text"}
                    className={commonClasses}
                  />
                ) : input?.type === "email" ? (
                  <input
                    id={input?.id || input?.name}
                    type="email"
                    placeholder={input?.placeholder || "Enter email"}
                    className={commonClasses}
                  />
                ) : input?.type === "textarea" ? (
                  <textarea
                    id={input?.id || input?.name}
                    placeholder={input?.placeholder || "Enter your message"}
                    className={`${commonClasses} min-h-32`}
                  />
                ) : input?.type === "submit" ? (
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-2 text-white hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 transition-all duration-300 ease-in-out"
                  >
                    {input?.name}
                  </button>
                ) : null}
              </div>
            );
          })}
        </form>
        <div className="flex gap-5 items-center justify-center w-full">
          {social_media_icon_links?.map((social: any, index: number) => (
            <Link
              href={social?.link?.URL}
              target={social?.link?.target}
              key={index}
            >
              <Image
                preview={false}
                src={social?.image && strapiImage(social?.image?.url as string)}
                alt={social?.image?.alt}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      <div
        className="w-full h-full rounded-md bg-blue-700 bg-cover bg-center font-serif text-white text-7xl flex justify-center items-center italic"
        style={{
          backgroundImage: `url(${image && strapiImage(image?.url)})`,
        }}
      >
        xSite.
      </div>
    </div>
  );
};
