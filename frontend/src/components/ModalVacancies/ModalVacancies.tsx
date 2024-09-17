import { useModal } from '@/hooks/useModal';
import React from 'react'
import { AppModal } from '../AppModal';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { Button } from '../Button';


export const ModalVacancies = () => {
    const { open, handleOpen, handleClose } = useModal();
  return (
    <>
     <div
        className={`container mt-[105px] flex flex-col items-center `}
      >
        <h1 className="text-lg text-[32px] text-white lg:text-[40px] font-bold md:mt-12 mt-8">
          ВАКАНСИИ
        </h1>
        <p className="text-white text-center text-lg md:mt-20 mt-8">
          Здесь мы найдём применение всем твоим качествам, которыми ты
          обладаешь.
        </p>
        <Button onButtonClick={handleOpen} className='border border-white mt-12 py-6 !rounded-[30px]' title='связаться с нами'></Button>
        <div className="text-white grid md:grid-cols-2 md:gap-16 gap-4 md:mt-16 mt-8 w-full">
          <div className="flex flex-col gap-4 items-center justify-center bg-[rgb(46,40,37)] aspect-video rounded-[40px] border border-white">
            <h3 className="font-bold text-lg md:text-[32px]">МЕНЕДЖЕР</h3>
            <p>от 80 тысяч в месяц</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center aspect-video bg-[rgb(46,40,37)] rounded-[40px] border border-white">
            <h3 className="font-bold text-lg md:text-[32px]">МАСТЕР</h3>
            <p>от 150 тысяч в месяц</p>
          </div>
        </div>
        <div className="self-start md:mt-16 mt-8">
          <p className="text-white font-bold text-left text-lg ">
            Работа исключительно в наших комфортабельных салонах.
          </p>
          <p className="text-white font-bold text-left  text-lg mt-4">
            Преимущества работы у нас:
          </p>
        </div>
        <ul className="text-white self-start mt-4 list-disc pl-4 flex flex-col gap-2 pb-8">
          <li>Без интимных услуг</li>
          <li>Опыт работы не обязателен</li>
          <li>Стабильный высокий заработок</li>
          <li>Гибкий график</li>
          <li>Безопасность и конфиденциальность гарантируется</li>
        </ul>
      </div>
    <AppModal isOpen={open} closeHandler={handleClose}>
    <SignUpForm handleClose={handleClose} />
  </AppModal>
    </>
  )
}
