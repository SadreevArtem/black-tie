import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const TelegrammBlock = () => {
  return (
    <div className="container text-white flex flex-col items-center gap-4">
      <h2 className="text-lg md:text-xl text-white lg:text-2xl font-extrabold text-center">
        Приватный TELEGRAM для VIP гостей
      </h2>
      <div className="mt-4">
        <Link
          href={"https://t.me/Cchocolate_tmn"}
          className="flex items-center border border-white rounded-[80px] pr-6"
        >
          <Image src={"/images/tg.svg"} alt="" width={65} height={100} />
          <p className="uppercase">подпишись в телеграмм</p>
        </Link>
      </div>
      <div className="relative">
        <Image
          src={"/images/000.png"}
          className="md:h-[600px] w-auto"
          alt="спа-шоколад"
          width={1776}
          quality={100}
          height={1376}
        />
      </div>
    </div>
  );
}
