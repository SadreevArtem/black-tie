import React from "react";
import Link from "next/link";



export const Footer: React.FC = () => {
  return (
    <>
      <footer className={`w-full flex flex-col py-4 md:mt-[60px] mt-4`}>
        <div className="container grid md:grid-cols-4 md:gap-8 gap-4">
          <div className="flex flex-col gap-2 items-start">
            <div className="relative flex flex-col md:flex-row gap-4 items-center">
              <Link href="/" className="relative block shrink-0">
                <div className="flex flex-col items-center">
                  <span className="text-2xl text-primary font-extrabold md:mb-4">
                    ГОСТЬ
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href={"/masters"}
                className="text-white w-fit hover:text-hover"
              >
                мастера
              </Link>
              <Link
                href={"/programs"}
                className="text-white w-fit hover:text-hover"
              >
                программы
              </Link>
            </div>
          </div>
          <div className="text-primary flex flex-col gap-2">
            <h5 className="font-extrabold text-2xl uppercase md:mb-4">
              Платформа
            </h5>
            <Link
              href={"https://t.me/Cchocolate_tmn"}
              className="text-white w-fit hover:text-hover"
            >
              Telegramm
            </Link>
            <Link
              href={"https://wa.me/79220057617"}
              className="text-white w-fit hover:text-hover"
            >
              WhatsApp
            </Link>
          </div>
          <div className="text-primary flex flex-col gap-2">
            <h5 className="font-extrabold text-2xl uppercase md:mb-4">
              Связаться с нами
            </h5>
            <Link
              href={`tel:+79088791922`}
              className="text-white w-fit hover:text-hover"
            >
              +7 (922) 005-76-17
            </Link>
          </div>
          <div className="text-primary flex flex-col gap-2">
            <h5 className="font-extrabold text-2xl uppercase md:mb-4">
              мы находимся по адресу
            </h5>
            <p className="text-white">город Тюмень</p>
            <p className="text-white">Солнечный проезд 22</p>
          </div>
        </div>
      </footer>
    </>
  );
};
