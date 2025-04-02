import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Call = () => {
  return (
    <div className="fixed top-[50%] -translate-y-1/2 md:right-[40px] right-0 z-10 bg-[#0E0D0D]/50 p-4 flex flex-col gap-4 rounded-l-[15px]">
      <Link
        href={"https://t.me/+79220046935"}
        className="flex items-center gap-2"
      >
        <Image
          className="w-8"
          src={"/images/telegram.svg"}
          alt=""
          width={65}
          height={65}
        />
      </Link>
      <Link
        href={"https://wa.me/79220046935"}
        className="flex items-center gap-2"
      >
        <Image
          className="w-8"
          src={"/images/whatsapp.svg"}
          alt=""
          width={65}
          height={65}
        />
      </Link>
      <Link href={`tel:+79220046935`}>
        <Image
          className="w-8"
          src={"/images/call.svg"}
          alt=""
          width={65}
          height={65}
        />
      </Link>
    </div>
  );
};
