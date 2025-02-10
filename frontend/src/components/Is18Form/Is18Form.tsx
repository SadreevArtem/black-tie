import { useAgeCheckStore } from "@/store/is18";
import { useRouter } from "next/navigation";
import React from "react";

export const Is18Form = () => {
  const router = useRouter();
  const verifyAge = useAgeCheckStore((state) => state.verifyAge);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="md:text-[24px] text-white text-[15px]">
        Вам уже исполнилось 18 лет?
      </h2>
      <div className="flex gap-4 text-white">
        <button
          onClick={() => verifyAge()}
          className="bg-transparent font-bold md:w-[170px] w-[106px] h-[38px] md:h-[50px] text-[15px] border border-white rounded-[5px] hover:bg-bg-opacity transition delay-100"
        >
          Да
        </button>
        <button
          onClick={() => router.back()}
          className="bg-bg-opacity md:w-[170px] md:h-[50px] w-[106px] h-[38px] text-[15px] rounded-[5px] border border-black hover:border-white transition delay-100"
        >
          Нет
        </button>
      </div>
    </div>
  );
};
