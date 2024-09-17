import React, { useState } from "react";
import clsx from "clsx";
import { AppSwiper } from "../AppSwiper/AppSwiper";
import { SwiperButton } from "../AppSwiper/components/SwiperButton/SwiperButton";
import { Programm, Services } from "@/shared/static/types";
import { ServicesCard } from "./ServicesCard/ServicesCard";


type Props = {
  title?: string;
  className?: string;
  rating?: boolean;
};

export const ServicesBlock: React.FC<Props> = ({
  title = "",
  className
}) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const services = [
    {id:1,
      name:"",
      description: "<b>такси до салона</b><br/> прекрасный вечер начинается с <br/> поездки за наш счет",
      image: "/images/card1.png"},
      {id:2,
        name:"",
        description: "<b>GOLD КАРТА</b>  10% скидка<br/> всем подписчикам Telegram канала",
        image: "/images/card2.png"},
        {id:3,
          name:"",
          description: "<b>САУНА</b><br/> для наших гостей сауна <b>круглосуточно</b>!<br/> от 2,5 часов программы и БОНУС САУНА ",
          image: "/images/card4.png"},
          {id:4,
            name:"",
            description: "Бесплатные напитки из нашего бара!",
            image: "/images/card3.png"},
  ]
  return (
    <div className={clsx(" py-4", className)}>
      <div className="container flex items-center md:justify-between mb-6 md:mb-8">
        

        <div className="flex gap-6 max-md:hidden ml-auto">
          <SwiperButton ref={setPrevEl} type="prev" />
          <SwiperButton ref={setNextEl} type="next" />
        </div>
      </div>

      <AppSwiper
        containerClassName="md:container"
        slideClassName="pb-3 !w-[360px] md:!w-[600px]"
        items={services}
        itemsSlideSlot={(item: Services) => <ServicesCard item={item} />}
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
