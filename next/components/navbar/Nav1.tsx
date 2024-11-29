"use client";
import { Affix, Divider, Drawer, Flex, Image, Space } from "antd";
import React, { useState } from "react";
import Link from "antd/es/typography/Link";
import Text from "antd/es/typography/Text";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import { strapiImage } from "@/lib/strapi/strapiImage";

type Props = {
  data: {
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
      url: string;
      alt: string;
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
    <div className="fixed top-0 z-40 w-full bg-gray-950 backdrop-blur-lg">
      <Flex className="justify-between items-center gap-[40px] px-4 py-2 max-w-7xl mx-auto">
        {data?.logo && (
          <Link href="./">
            <Image
              preview={false}
              src={
                "https://www.khelpasal.com/_next/image?url=%2Flogo-white.png&w=256&q=75"
              }
              height={30}
              alt={data?.logo?.alt}
            />
          </Link>
        )}
        <Space size={20} className="hidden md:flex">
          {data?.menus?.map((menu: any, i: number) => {
            return (
              <Link key={i} href={`/${locale}/${menu?.URL}`}>
                <Text className="!text-white py-[8px] border-b-0 hover:border-b-[2px] hover:border-primary">
                  {menu?.text}
                </Text>
              </Link>
            );
          })}
        </Space>
        {data?.socials && (
          <Space className="hidden sm:flex" size={"middle"}>
            {data?.socials.map((social: any, index: number) => (
              <Flex
                key={index}
                className="bg-primary rounded-full justify-center items-center h-[32px] w-[32px]"
              >
                {Icon(social.text, social.URL, social.target)}
              </Flex>
            ))}
          </Space>
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
                  src={data?.logo?.url}
                  height={40}
                  alt={data?.logo?.alt}
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
        <Divider />
        {data?.socials && (
          <Flex className="justify-center gap-[20px]">
            {data?.socials.map((item: any, index: number) => (
              <Flex
                key={index}
                className="bg-primary rounded-full justify-center items-center h-[32px] w-[32px]"
              >
                {Icon(item.platform, item.path)}
              </Flex>
            ))}
          </Flex>
        )}
      </Drawer>
    </div>
  );
};

export default Nav1;
