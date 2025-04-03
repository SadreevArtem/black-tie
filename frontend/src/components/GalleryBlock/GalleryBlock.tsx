import React, { useState } from "react";
import clsx from "clsx";
import { AppSwiper } from "../AppSwiper/AppSwiper";
import { SwiperButton } from "../AppSwiper/components/SwiperButton/SwiperButton";
import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { Gallery, Programm } from "@/shared/static/types";
import { tenor } from "@/pages";
import { ProgrammCard } from "../ProgramsBlock/ProgrammCard/ProgrammCard";
import { GalleryCard } from "./GalleryCard/GalleryCard";

type Props = {
  title?: string;
  className?: string;
  rating?: boolean;
};

export const GalleryBlock: React.FC<Props> = ({
  title = "Галерея",
  className,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const gallery = [
    {
      id: 1,
      name: "apartment",
      image: "/images/apart/2.jpeg",
    },
    {
      id: 2,
      name: "apartment",
      image: "/images/apart/10.jpeg",
    },
    {
      id: 3,
      name: "apartment",
      image: "/images/apart/6.jpeg",
    },
    {
      id: 4,
      name: "apartment",
      image: "/images/apart/7.jpeg",
    },
    {
      id: 5,
      name: "apartment",
      image: "/images/apart/4.jpeg",
    },
    {
      id: 6,
      name: "apartment",
      image: "/images/apart/11.jpeg",
    },
    {
      id: 7,
      name: "apartment",
      image: "/images/apart/12.jpeg",
    },
    {
      id: 8,
      name: "apartment",
      image: "/images/apart/13.jpeg",
    },
    {
      id: 9,
      name: "apartment",
      image: "/images/apart/14.jpeg",
    },
    {
      id: 10,
      name: "apartment",
      image: "/images/apart/15.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/16.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/17.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/18.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/19.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/20.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/21.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/22.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/23.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/24.jpeg",
    },
    {
      id: 11,
      name: "apartment",
      image: "/images/apart/25.jpeg",
    },
  ];

  return (
    <div className={clsx(" py-4", className)}>
      <div className="container flex items-center md:justify-between mb-6 md:mb-8">
        <h2
          className={clsx(
            "self-center md:text-[40px] text-[24px] text-white mr-auto font-normal",
            tenor.className
          )}
        >
          {title}
        </h2>

        <div className="flex gap-6 max-md:hidden">
          <SwiperButton ref={setPrevEl} type="prev" />
          <SwiperButton ref={setNextEl} type="next" />
        </div>
      </div>

      <AppSwiper
        containerClassName="md:container"
        slideClassName="pb-3 !w-[300px] md:!w-[600px]"
        items={gallery}
        itemsSlideSlot={(item: Gallery) => <GalleryCard item={item} />}
        prevEl={prevEl}
        nextEl={nextEl}
        slidesPerView="auto"
        slidesPerGroup={1}
        breakpoints={{
          320: {
            spaceBetween: 12,
            allowTouchMove: true,
            slidesOffsetAfter: 16,
            slidesOffsetBefore: 16,
          },
          768: {
            spaceBetween: 32,
            allowTouchMove: false,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
        }}
      />
    </div>
  );
};
