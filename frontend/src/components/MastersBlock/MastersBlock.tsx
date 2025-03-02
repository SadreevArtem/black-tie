import React, { useState } from "react";
import clsx from "clsx";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { AppSwiper } from "../AppSwiper/AppSwiper";
import { SwiperButton } from "../AppSwiper/components/SwiperButton/SwiperButton";
import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { tenor } from "@/pages";

export type Master = {
  id: number;
  published: boolean;
  name: string;
  age: number;
  height: number;
  weight: number;
  size: number;
  avatar: string;
  imageSecond: string;
  imageThird: string;
  createdAt: string;
};

type Props = {
  title?: string;
  className?: string;
  rating?: boolean;
};

export const MastersBlock: React.FC<Props> = ({
  title = "Мастера",
  className,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const getMasters = () => api.getMasters();
  const { data: masters = [], isLoading } = useQuery<Master[]>({
    queryKey: ["masters"],
    queryFn: getMasters,
  });
  if (!masters.length) {
    return null;
  }
  return (
    <div className={clsx("py-4 md:my-4", className)}>
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
        slideClassName="pb-3 !w-[180px] md:!w-[300px]"
        items={masters}
        itemsSlideSlot={(item: Master) => <ReviewCard item={item} />}
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
