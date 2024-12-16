"use client";
import { Drawer, Flex, Image, Space } from "antd";
import React, { useState } from "react";
import Link from "antd/es/typography/Link";
import Text from "antd/es/typography/Text";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import { strapiImage } from "@/lib/strapi/strapiImage";
import { Button } from "../elements/button";

type Props = {
  data: {
    buttons: any[];
    menus: {
      URL: string;
      text: string;
    }[];
    socials: {
      text: string;
      URL: string;
      target?: string;
    }[];
    logo: {
      company?: string;
      image: {
        url: string;
        alt: string;
      };
    };
  };
  locale: string;
};

export const Nav1 = ({ data, locale }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuSwitch = () => {
    setMenuOpen(!menuOpen);
  };
  const Icon = (key: string, path: string, target?: string) => {
    switch (key) {
      case "facebook":
        return (
          <Link href={path} target={target}>
            <Facebook className="stroke-white" size={20} />
          </Link>
        );
      case "instagram":
        return (
          <Link href={path} target={target}>
            <Instagram className="stroke-white" size={20} />
          </Link>
        );
      case "twitter":
        return (
          <Link href={path} target={target}>
            <Twitter className="stroke-white" size={20} />
          </Link>
        );

      default:
        break;
    }
  };
  return (
    <div className="fixed top-0 z-40 w-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur-lg">
      <Flex className="justify-between items-center gap-[40px] px-4 py-3 max-w-7xl mx-auto">
        {data?.logo && (
          <Link href="./">
            <Image
              preview={false}
              src={data?.logo ? strapiImage(data?.logo?.image?.url) : ""}
              height={28}
              alt={data?.logo?.image?.alt}
            />
          </Link>
        )}
        <div className="hidden md:block">
          <Space size={20}>
            {data?.menus?.map((menu: any, i: number) => {
              return (
                <Link
                  key={i}
                  href={`/${locale}/${menu?.URL}`}
                  className="group/menu"
                >
                  <Text className="!text-white group-hover/menu:!text-blue-500 py-3 font-medium !text-base">
                    {menu?.text}
                  </Text>
                  <div className="w-0 h-[1px] bg-blue-500 group-hover/menu:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
              );
            })}
          </Space>
        </div>
        {data?.buttons && (
          <div>
            {data?.buttons?.map &&
              data?.buttons?.map((button: any, i: number) => {
                return (
                  <Link key={button?.id} href={`/${locale}${button.URL}`}>
                    <Button variant={button?.type}>{button?.text}</Button>
                  </Link>
                );
              })}
          </div>
        )}

        <Menu className="block md:hidden cursor-pointer" onClick={menuSwitch} />
      </Flex>
      <Drawer
        className="!h-auto md:!hidden"
        placement="top"
        open={menuOpen}
        onClose={menuSwitch}
        closable={false}
        title={
          <Flex className="justify-between items-center">
            {data?.logo && (
              <Link href="./">
                <Image
                  preview={false}
                  src={data?.logo ? strapiImage(data?.logo?.image?.url) : ""}
                  height={40}
                  alt={data?.logo?.image?.alt}
                />
              </Link>
            )}
            <X className="cursor-pointer" onClick={menuSwitch} />
          </Flex>
        }
      >
        <Flex className="gap-[10px] sm:gap-[20px] justify-center">
          {data?.menus?.map((d: any, i: number) => {
            return (
              <Link key={i} href={`/${locale}/${d?.URL}`}>
                <Text className="block py-[8px] hover:border-b-[2px] hover:border-primary !text-white">
                  {d?.label}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Drawer>
    </div>
  );
};

export default Nav1;
