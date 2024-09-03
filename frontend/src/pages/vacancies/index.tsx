import React, { ReactElement } from 'react'
import { BaseLayout } from '../../../layouts/BaseLayout/BaseLayout'
import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { montserrat } from '..'

const Vacancies = () => {
  return (
    <>
      <AppHead title="Вакансии" description="" />
      <Header />
      <div
        className={`container mt-[105px] flex flex-col items-center ${montserrat.className}`}
      >
        <h1 className="text-lg text-[32px] text-white lg:text-[40px] font-bold md:mt-12 mt-8">
          ВАКАНСИИ
        </h1>
        <p className="text-white text-center text-lg md:mt-20 mt-8">
          Здесь мы найдём применение всем твоим качествам, которыми ты
          обладаешь.
        </p>
        <div className="text-white grid md:grid-cols-2 md:gap-16 gap-4 md:mt-16 mt-8 w-full">
          <div className="flex flex-col gap-4 items-center justify-center bg-bg-gray aspect-video rounded-lg">
            <h3 className="font-bold text-lg md:text-[32px]">МЕНЕДЖЕР</h3>
            <p>от 80 тысяч в месяц</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center aspect-video bg-bg-gray rounded-lg">
            <h3 className="font-bold text-lg md:text-[32px]">МАСТЕР</h3>
            <p>от 150 тысяч в месяц</p>
          </div>
        </div>
        <div className='self-start md:mt-16 mt-8'>
          <p className="text-white font-bold text-left text-lg ">
            Работа исключительно в наших комфортабельных салонах.
          </p>
          <p className="text-white font-bold text-left  text-lg mt-4">
            Преимущества работы у нас:
          </p>
        </div>
        <ul className='text-white self-start mt-4 list-disc pl-4 flex flex-col gap-2 pb-8'>
            <li>Без интимных услуг</li>
            <li>Опыт работы не обязателен</li>
            <li>Стабильный высокий заработок</li>
            <li>Гибкий график</li>
            <li>Безопасность и конфиденциальность гарантируется</li>
        </ul>
      </div>
    </>
  );
}


Vacancies.getLayout = function getLayout(page: ReactElement) {
    return (
      <BaseLayout>
        {page}
      </BaseLayout>
    )
  }

export default Vacancies;