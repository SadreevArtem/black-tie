import React, { ReactElement } from "react";
import { BaseLayout } from "../../../layouts/BaseLayout/BaseLayout";
import { AppHead } from "@/components/AppHead/AppHead";
import { Header } from "@/components/Header/Header";
import { montserrat } from "..";
import { ProgramsList } from "@/components/ProgramsList/ProgramsList";
import { Footer } from "@/components/Footer/Footer";
import { Call } from "@/components/Call/Call";

const Programs = () => {
  return (
    <>
      <AppHead
        title="Программы эромассажа sexy massage Тюмень spa-chocolate.ru"
        description="спа-салон релакс массажа в Тюмени, цены на массаж"
      />
      <Header />
      <div
        className={`container mt-[105px] flex flex-col ${montserrat.className}`}
      >
        <h1 className="text-[1px] opacity-5">
          массажный салон секс erotic massage
        </h1>
        <h2 className="text-[32px] text-white lg:text-[64px] font-normal md:mt-12 mt-8">
          Виды услуг
        </h2>
        <p className="text-white lg:text-[24px] mt-8">
          Продуманные до мелочей программы.
        </p>
        <p className="lg:text-[24px] text-white">Идеальное исполнение!</p>
        <ProgramsList />
      </div>
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
      <Call />
    </>
  );
};

Programs.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Programs;
