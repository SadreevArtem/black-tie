import { FC } from "react";
import clsx from "clsx";
import { montserrat, tenor } from "@/pages";

export const AboutBlock: FC = () => {
  return (
    <div className="container text-white flex flex-col gap-4">
      {/* <h1 className="opacity-10 text-[1px]">Салон Эротического массажа в Тюмени для мужчин</h1> */}
      <h2
        className={clsx(
          "self-center md:text-[40px] text-[24px] text-white mr-auto font-normal",
          tenor.className
        )}
      >
        О клубе
      </h2>
      <div className="mt-1">
        <p className="text-lg">
          Мы заботимся о комфорте и безопасности гостей, поэтому они
          возвращаются снова. Обратите внимание на то, что салон не оказывает
          интимных услуг.
        </p>
      </div>
      <div className={clsx("md:grid grid-cols-12 gap-4", montserrat.className)}>
        <div className="col-span-5 grid-rows-6 grid gap-4">
          <div className="border border-white p-6 rounded-[10px] row-span-4 flex flex-col justify-around">
            <div>
              <h3 className={clsx("font-bold uppercase text-[18px]")}>
                Комфорт
              </h3>
              <p className="mt-4 text-[14px]">
                Мы постарались создать для вас атмосферу, в которой тебя не
                будут отвлекать никакие случайные элементы.
              </p>
            </div>
            <div>
              <h3 className={clsx("font-bold uppercase text-[18px]")}>
                Безопасность
              </h3>
              <p className="mt-4 text-[14px]">
                Каждая массажистка в строгом порядке имеет мед. книжку и
                проходит обследования регулярно.
              </p>
            </div>
          </div>
          <div className="bg-[#d9d9d9] rounded-[10px] p-6 text-black row-span-2 max-md:mb-4">
            <h3
              className={clsx("font-bold uppercase text-[18px] md:mt-[70px]")}
            >
              Акции и подарки
            </h3>
            <p className="mt-4 text-[14px]">
              Каждый посетитель нашего салона массажа гарантированно получает
              приятные бонусы и подарки.
            </p>
          </div>
        </div>
        <div className="col-span-7 grid-rows-6 md:grid gap-4 flex flex-col">
          <div className="relative overflow-hidden bg-[#d9d9d9]/50 text-black p-6 rounded-[10px] row-span-3 flex flex-col justify-end">
            <h3 className={clsx("font-bold uppercase text-[18px]")}>
              Конфиденциальность
            </h3>
            <p className="mt-4 text-[14px]">
              Обеспечиваем полную анонимность посещения салона. Ваша анонимность
              = наша репутация.
            </p>
            <div className="absolute w-[240px] h-[240px] -top-[100px] right-[110px] blur-[70px] bg-white rounded-full -z-10"></div>
          </div>
          <div className="flex max-md:flex-col gap-4 row-span-3">
            <div className="border border-white p-6 md:w-[90%] rounded-[10px] flex flex-col justify-end">
              <h3 className={clsx("font-bold uppercase text-[18px]")}>Время</h3>
              <p className="mt-4 text-[14px]">
                Внимательно относимся к вашему времени, каждая программа может
                длится больше, но не меньше.
              </p>
            </div>
            <div className="border border-white p-6 rounded-[10px] flex flex-col justify-end">
              <h3 className={clsx("font-bold uppercase text-[18px]")}>
                Гигиена
              </h3>
              <p className="mt-4 text-[14px]">
                Вам предоставляются индивидуальные тапочки, махровый халат, душ
                до и после программы, а также джакузи.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
