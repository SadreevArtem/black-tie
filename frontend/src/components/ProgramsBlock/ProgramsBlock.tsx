import React, { useState } from "react";
import clsx from "clsx";
import { AppSwiper } from "../AppSwiper/AppSwiper";
import { SwiperButton } from "../AppSwiper/components/SwiperButton/SwiperButton";
import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { Programm } from "@/shared/static/types";
import { ProgrammCard } from "./ProgrammCard/ProgrammCard";
import { tenor } from "@/pages";

type Props = {
  title?: string;
  className?: string;
  rating?: boolean;
};

export const ProgramsBlock: React.FC<Props> = ({
  title = "Программы",
  className,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const getPrograms = () => api.getPrograms();
  const { data: masters = [], isLoading } = useQuery<Programm[]>({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });
  if (!masters.length) {
    return null;
  }
  return (
    <div className={clsx(" py-4", className)}>
      <div className="container flex items-center md:justify-between mb-6 md:mb-8">
        <h2
          className={clsx(
            "self-center md:text-[40px] text-white  max-md:ml-auto mr-auto font-normal",
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
        items={masters}
        itemsSlideSlot={(item: Programm) => <ProgrammCard item={item} />}
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
