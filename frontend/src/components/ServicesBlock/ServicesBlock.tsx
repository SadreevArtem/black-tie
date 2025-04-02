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

export const ServicesBlock: React.FC<Props> = ({ title = "", className }) => {
  const services = [
    {
      id: 1,
      name: "Такси до салона",
      description: "прекрасный вечер начинается с  поездки <br/>за наш счет",
      image: "/images/card1.png",
      mobImage: "/images/mob_card1.jpeg",
      imagePosition: "right",
    },
    {
      id: 2,
      name: "GOLD КАРТА",
      description: "10% скидка всем подписчикам <br/>Telegram канала",
      image: "/images/card2.png",
      mobImage: "/images/mob_card3.jpeg",
      imagePosition: "right",
    },
    // {
    //   id: 3,
    //   name: "",
    //   description:
    //     "<b>САУНА</b><br/> для наших гостей сауна <b>круглосуточно</b>!<br/> от 2,5 часов программы и БОНУС САУНА ",
    //   image: "/images/card4.png",
    // },
    {
      id: 4,
      name: "",
      description: "Бесплатные напитки<br/> из нашего бара!",
      image: "/images/card3.png",
      mobImage: "/images/mob_card2.jpeg",
      imagePosition: "right",
    },
  ];
  return (
    <div
      className={clsx(
        "container md:py-[92px] flex flex-col md:gap-[50px] gap-5 max-md:-mt-[54px]",
        className
      )}
    >
      {services.map((service) => (
        <ServicesCard
          key={service.id}
          name={service.name}
          imageUrl={service.image}
          mobImage={service.mobImage}
          description={service.description}
          imagePosition={service.imagePosition}
        />
      ))}
    </div>
  );
};
