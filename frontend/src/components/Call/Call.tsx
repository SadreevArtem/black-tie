import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const Call = () => {
  return (
    <div className="fixed top-[50%] -translate-y-1/2 md:right-[40px] right-[10px] z-10 bg-[#7F6B6B]/50 p-4 py-8 flex flex-col gap-4 rounded-[40px]">
      <Link href={`tel:+79220058113`}>
        <Image
          className="w-10"
          src={"/images/phone-call.svg"}
          alt=""
          width={65}
          height={65}
        />
      </Link>
      <Link
        href={"https://t.me/chocolate_spa"}
        className="flex items-center gap-2"
      >
        <Image
          className="w-10"
          src={"/images/telegram-black.svg"}
          alt=""
          width={65}
          height={65}
        />
      </Link>
      <Link
        href={"https://wa.me/79220058113"}
        className="flex items-center gap-2"
      >
        <Image
          className="w-10"
          src={"/images/whatsapp-black.svg"}
          alt=""
          width={65}
          height={65}
        />
      </Link>
    </div>
  );
}
