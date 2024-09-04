import { useQuery } from '@tanstack/react-query';
import React, { FC, useState } from 'react'
import { Master } from '../MastersBlock/MastersBlock';
import Image from 'next/image';
import { Button } from '../Button';
import { useModal } from '@/hooks/useModal';
import { AppModal } from '../AppModal';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { api } from '@/shared/api/api';
import Link from 'next/link';
import { PhotoPopup } from '../PhotoPopup/PhotoPopup';


type Props = {
    id: number
}

export const MastersDetailClient:FC<Props> = ({id}) => {
    const { open, handleOpen, handleClose } = useModal();
    const [selectedImage, setSelectedImage] = useState<string>("");
    const {
      open: openPhoto,
      handleOpen: handleOpenPhoto,
      handleClose: handleClosePhoto,
    } = useModal();
    const getMaster = () => api.getMastersById(id);
    const handleImageClick = (url: string) => {
        setSelectedImage(url);
        handleOpenPhoto();
      };
    const {data: master, isLoading} = useQuery<Master>({queryKey:['master', id.toString()], queryFn: getMaster});  
    if(!master) return (
        <Link className='text-white uppercase underline text-[36px] mt-24' href={"/masters"}>Перейти к выбору мастера</Link>
    );
  return (
    <div className="w-full mt-24 flex flex-col md:gap-24 gap-12">
      <article
        key={master.name.concat(master.id.toString())}
        className="w-full"
      >
        <div className="flex items-center md:gap-12 gap-4">
          <div className="">
            <Image
              style={{ objectFit: "cover" }}
              alt={master.name}
              src={master.avatar}
              width={300}
              height={300}
              className=" rounded-[50%] md:w-[300px] md:h-[300px] w-[120px] h-[120px]"
            />
          </div>
          <div className="flex flex-col gap-6 w-[60%]">
            <div className="flex items-center justify-between max-lg:flex-col lg:flex-row">
              <h2 className="text-white text-[24px] font-bold">
                {master.name}
              </h2>
              <Button
                type="button"
                onButtonClick={handleOpen}
                className="!bg-bg-gray max-md:px-6 max-md:my-4"
                title="Записаться"
              ></Button>
            </div>
            <div className="text-text-gray flex gap-8 text-center justify-between max-md:hidden">
              <div>
                <p>{`${master.age} лет`}</p>
                <p>возраст</p>
              </div>
              <div>
                <p>{`${master.height} см`}</p>
                <p>рост</p>
              </div>
              <div>
                <p>{`${master.weight} кг`}</p>
                <p>вес</p>
              </div>
              <div>
                <p>{`${master.size}`}</p>
                <p>размер груди</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-text-gray flex gap-8 text-center justify-between md:hidden mt-4">
          <div>
            <p>{`${master.age} лет`}</p>
            <p>возраст</p>
          </div>
          <div>
            <p>{`${master.height} см`}</p>
          </div>
          <div>
            <p>{`${master.weight} кг`}</p>
          </div>
          <div>
            <p>{`${master.size}`}</p>
            <p>размер</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-[32px] text-white lg:text-[32px] font-bold md:mt-12 mt-8 max-md:hidden">
            ФОТО МАСТЕРА
          </h3>
          <div className="lg:grid lg:grid-cols-3 md:mt-12 mt-4 flex flex-wrap gap-8 justify-around">
            <Image
              style={{ objectFit: "cover" }}
              quality={100}
              onClick={() => handleImageClick(master.imageSecond)}
              src={master.imageSecond}
              alt={master.age.toString()}
              className="rounded-lg md:w-[300px] md:h-[399px] w-[140px] h-[182px]"
              width={500}
              height={600}
            />
            <Image
              style={{ objectFit: "cover" }}
              quality={100}
              onClick={() => handleImageClick(master.imageThird)}
              src={master.imageThird}
              alt={master.age.toString()}
              className=" rounded-lg md:w-[300px] md:h-[399px] w-[140px] h-[182px]"
              width={500}
              height={600}
            />
            <Image
              style={{ objectFit: "cover" }}
              quality={100}
              onClick={() => handleImageClick(master.avatar)}
              src={master.avatar}
              alt={master.age.toString()}
              className=" rounded-lg md:w-[300px] md:h-[399px] w-[140px] h-[182px]"
              width={500}
              height={600}
            />
          </div>
        </div>
      </article>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
      <AppModal isOpen={openPhoto} closeHandler={handleClosePhoto}>
        <PhotoPopup url={selectedImage||""} />
      </AppModal>
    </div>
  );
}
