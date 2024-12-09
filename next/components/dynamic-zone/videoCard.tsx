"use client";
import { strapiImage } from "@/lib/strapi/strapiImage";
import { Modal } from "antd";
import { Play, X } from "lucide-react";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayerModal = ({ data, closeModal }: any) => {
  const styles = `.ant-modal {
      box-shadow:none;
      .ant-modal-content{
      -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
        background:transparent;
        .ant-modal-close-x{
        color:white;
        font-weight:600;
        }
    }
    }`;
  return (
    <>
      <style>{styles}</style>
      <Modal
        closeIcon={<X strokeWidth={2} />}
        open={data?.visible}
        footer={null}
        className="ant-modal !w-[90%] md:!w-4/5 lg:!w-2/3 !p-0 top-0 !bg-transparent"
        destroyOnClose
        onCancel={closeModal}
      >
        <ReactPlayer
          playing={true}
          className="mt-10 aspect-video"
          controls
          width={"100%"}
          height={"100%"}
          url={data?.url}
        />
      </Modal>
    </>
  );
};

export const VideoCard = ({
  videoData,
}: {
  videoData: { url?: string; thumbnail: { url: string } };
}) => {
  const [videoModal, setVideoModal] = useState({
    visible: false,
    url: "",
  });
  const handleVideoModal = (url?: string) => {
    console.log("clicked");
    if (url) {
      setVideoModal({
        visible: true,
        url: url,
      });
    } else {
      setVideoModal({
        visible: false,
        url: "",
      });
    }
  };

  return (
    <>
      {/* video modwal  here*/}
      <VideoPlayerModal
        data={videoModal}
        closeModal={() => handleVideoModal()}
      />
      <div className="w-full max-w-7xl mx-auto px-4">
        <div
          className="relative flex justify-center items-center aspect-[16/7] rounded-xl shadow-lg bg-white cursor-pointer bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              videoData
                ? strapiImage(videoData.thumbnail.url)
                : "https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            })`,
          }}
          onClick={() =>
            handleVideoModal(
              videoData?.url
                ? videoData?.url
                : "https://www.youtube.com/watch?v=Lox0P-M8B7A&list=RDLox0P-M8B7A&start_radio=1"
            )
          }
        >
          <div className="rounded-full bg-blue-700 w-[60px] h-[60px] aspect-square border-blue-700 border-2 hover:bg-transparent transition-all duration-300 hover:scale-110 flex items-center justify-center group/play">
            <Play className="fill-white group-hover/play:fill-blue-600 scale-110 group-hover/play:scale-125 transition-all duration-300 stroke-none translate-x-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};
