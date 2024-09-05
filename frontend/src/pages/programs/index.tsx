import React, { ReactElement } from 'react'
import { BaseLayout } from '../../../layouts/BaseLayout/BaseLayout'
import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { montserrat } from '..'
import { ProgramsList } from "@/components/ProgramsList/ProgramsList";
import { Footer } from '@/components/Footer/Footer'

const Programs = () => {
  return (
    <>
      <AppHead title="Программы" description="" />
      <Header />
      <div
        className={`container mt-[105px] flex flex-col items-center ${montserrat.className}`}
      >
        <h1 className="text-lg text-[32px] text-white lg:text-[40px] font-bold md:mt-12 mt-8">
          ВИДЫ УСЛУГ
        </h1>
        <p className="text-white text-center font-bold lg:text-[24px] mt-8">
          Продуманные до мелочей программы.
        </p>
        <p className="text-center font-bold lg:text-[24px] text-gray-500">
          Идеальное исполнение!
        </p>
        <ProgramsList />
      </div>
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
    </>
  );
}


Programs.getLayout = function getLayout(page: ReactElement) {
    return (
      <BaseLayout>
        {page}
      </BaseLayout>
    )
  }

export default Programs;