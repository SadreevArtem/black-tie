import { useQuery } from '@tanstack/react-query';
import React, { FC, useState } from 'react'
import Image from 'next/image';
import { Button } from '../Button';
import { useModal } from '@/hooks/useModal';
import { AppModal } from '../AppModal';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { api } from '@/shared/api/api';
import Link from 'next/link';
import { PhotoPopup } from '../PhotoPopup/PhotoPopup';
import { Programm } from '@/shared/static/types';


type Props = {
    id: number
}

export const ProgramsDetailClient:FC<Props> = ({id}) => {
    const { open, handleOpen, handleClose } = useModal();   
    const getProgram = () => api.getProgramsById(id);
    
    const {data: programm, isLoading} = useQuery<Programm>({queryKey:['program', id.toString()], queryFn: getProgram});  
    if(!programm) return (
        <Link className='text-white uppercase underline text-[36px] mt-24' href={"/programs"}>Перейти к выбору программы</Link>
    );
    
  return (
    <div className="w-full md:mt-24 mt-8 flex flex-col md:gap-24 gap-12">
      <article>
        <div className="flex md:gap-8 gap-4 max-md:flex-col">
          <div className="relative md:w-[40%] md:h-[360px] h-[220px] shrink-0">
            <Image
              src={programm.image || "/images/empty.png"}
              alt={programm.name || "Аватар"}
              fill
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
              <Image src={"/images/clock.png"} alt="clock" width={35} height={35} className='max-md:w-[30px]'/>
              <p className='text-white text-3xl'>{programm.currentPrice}</p>
            </div>
            <p className='text-white lg:text-[42px] text-[24px] font-extrabold uppercase'>{programm.name}</p>
            <div className='flex gap-4'>
              <Button onButtonClick={handleOpen} className='bg-white lg:py-4 max-lg:px-4 !m-0 !text-black font-normal hover:bg-white' title='записаться'></Button>
              <Link href={`tel:+79220058113`}>
              <Button title='позвонить' className='!m-0 lg:py-4 max-lg:px-4 !bg-[#323232] opacity-50 font-normal'></Button>
              </Link>
            </div>
            <p className='text-white'>Допускается поверхностные прикосновения в зоне бикини,
            поцелуи по телу. НЕ является сексуальной услугой.</p>
            <p className='text-white font-bold text-[24px]'>ОПИСАНИЕ</p>
            <p className='text-white'>{programm.description}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-8'>
          {programm.services.split(',').map((service, i) =>(
            <p className='text-white border-2 font-bold border-white bg-bg-gray rounded-[20px] p-5' key={service.concat(i.toString())}>{service}</p>
          ))}
        </div>
      </article>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
    </div>
  );
}

