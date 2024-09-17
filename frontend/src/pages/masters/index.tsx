import React, { ReactElement } from 'react'
import { BaseLayout } from '../../../layouts/BaseLayout/BaseLayout'
import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { montserrat } from '..'
import { MastersList } from '@/components/MastersList/MastersList'
import { Footer } from '@/components/Footer/Footer'
import { Call } from '@/components/Call/Call'

const Masters = () => {
  return (
    <>
      <AppHead title="Мастера" description="" />
      <Header />
      <div
        className={`container mt-[105px] flex flex-col items-center ${montserrat.className}`}
      >
        <h1 className="text-lg text-[32px] text-white lg:text-[40px] font-bold md:mt-12 mt-8">
          МАСТЕРА
        </h1>
        <p className="text-white text-center lg:text-[24px] mt-8">
          Самые красивые и профессиональные мастера помогут вам максимально
          расслабиться в нашем удивительном салоне эротического массажа
        </p>
        <MastersList />
      </div>
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
      <Call />
    </>
  );
}


Masters.getLayout = function getLayout(page: ReactElement) {
    return (
      <BaseLayout>
        {page}
      </BaseLayout>
    )
  }

export default Masters;