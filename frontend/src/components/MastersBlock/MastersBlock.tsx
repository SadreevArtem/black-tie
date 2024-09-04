import React, { useState } from "react";
import clsx from "clsx";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { AppSwiper } from "../AppSwiper/AppSwiper";
import { SwiperButton } from "../AppSwiper/components/SwiperButton/SwiperButton";
import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";


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
  items: Master[];
  title?: string;
  className?: string;
  rating?: boolean;
};

export const MastersBlock: React.FC<Props> = ({
  title = "МАСТЕРА",
  className
}) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const getMasters = () => api.getMasters();
   const {data: masters = [], isLoading} = useQuery<Master[]>({queryKey:['masters'], queryFn: getMasters});   
  if (!masters.length) {
    return null;
  }
  return (
    <div className={clsx("bg-black py-4", className)}>
      <div className='container flex items-center justify-between mb-6 md:mb-8'>
        <h2 className='text-lg md:text-xl text-white lg:text-2xl font-extrabold'>{title}</h2>

        <div className='flex gap-6 max-md:hidden'>
          <SwiperButton ref={setPrevEl} type='prev' />
          <SwiperButton ref={setNextEl} type='next' />
        </div>
      </div>

      <AppSwiper
        containerClassName='md:container'
        slideClassName='pb-3 !w-[180px] md:!w-[300px]'
        items={masters}
        itemsSlideSlot={(item: Master) => <ReviewCard item={item} />}
        prevEl={prevEl}
        nextEl={nextEl}
        slidesPerView='auto'
        slidesPerGroup={1}
        breakpoints={{
          320: {
            spaceBetween: 12,
            allowTouchMove: true,
            slidesOffsetAfter: 16,
            slidesOffsetBefore: 16
          },
          768: {
            spaceBetween: 32,
            allowTouchMove: false,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0
          }
        }}
      />
    </div>
  );
};
