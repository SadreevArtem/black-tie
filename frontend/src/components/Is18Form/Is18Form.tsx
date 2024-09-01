import { useAgeCheckStore } from '@/store/is18';
import { useRouter } from 'next/navigation';
import React from 'react'

export const Is18Form = () => {
  const router = useRouter();
  const verifyAge = useAgeCheckStore(state=> state.verifyAge)
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="md:text-[48px] text-white text-[24px]">
        Вам уже исполнилось 18 лет?
      </h2>
      <div className="flex gap-4 mt-4 text-white">
        <button
          onClick={() => verifyAge()}
          className="bg-bg-opacity p-2 md:px-16 px-12 text-[24px] rounded-[80px] hover:bg-black transition hover:text-primary"
        >
          Да
        </button>
        <button
          onClick={() => router.back()}
          className="bg-bg-opacity p-2 md:px-16 px-12 text-[24px] rounded-[80px] hover:bg-black transition hover:text-primary "
        >
          Нет
        </button>
      </div>
    </div>
  );
}
