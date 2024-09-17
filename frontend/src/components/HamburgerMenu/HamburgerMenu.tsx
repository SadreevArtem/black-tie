import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { HeaderMenuItem } from "../Hamburger/static";
import Image from "next/image";

type Props = {
  menu: HeaderMenuItem[];
  onClose: () => void;
  className?: string;
};

export const HamburgerMenu: React.FC<Props> = ({ menu, onClose, className = "" }) => {
  const { asPath } = useRouter();
  const paths = asPath.split("/");  
  const listItemClassName = "mb-1 last:mb-0 py-2 px-4 rounded-2";

  return (
    <div
      className={clsx(
        "fixed z-40 top-[83px] right-0 left-0 bottom-0 bg-custom-gradient opacity-1",
        className
      )}
    >
      <div className="container max-h-full pt-1 pb-3 overflow-y-auto flex flex-col">
        <nav>
          <ul className="pt-4 font-thin">
            <li
              className={clsx(listItemClassName, {
                "bg-bgOpacity": paths[1] === "",
              })}
            >
              <Link
                href="/"
                className="block w-full text-[24px]  text-white uppercase"
                onClick={onClose}
              >
                Главная
              </Link>
            </li>
            {menu.map((item) => (
              <li
                key={item.value}
                className={clsx(listItemClassName, {
                  "bg-bgOpacity": asPath.includes(`${item.href}`),
                })}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "block w-full text-[24px] text-white uppercase"
                  )}
                  onClick={onClose}
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={"https://wa.me/79220058113"}
          className="self-center text-center border min-w-[320px] font-thin border-white mt-6 w-fit bg-[rgb(46,41,38)] text-white px-12 py-2 max-md:text-[14px] rounded-[80px] hover:bg-black transition hover:text-primary"
          onClick={() => {}}
        >
          Написать администратору
        </Link>
        <Link
          href={"https://t.me/Cchocolate_tmn"}
          className="self-center border text-center font-thin min-w-[320px] border-white mt-4 w-fit bg-[rgb(46,41,38)] text-white px-12 py-2 max-md:text-[14px] rounded-[80px] hover:bg-black transition hover:text-primary"
          onClick={() => {}}
        >
          Telegram-канал для VIP гостей
        </Link>
        <div className="flex gap-4 my-12 self-center font-thin text-[22px]">
          <Link
            href={"https://t.me/chocolate_spa"}
            className="flex items-center gap-2"
          >
            <Image
              className="w-8"
              src={"/images/telegram-black.svg"}
              alt=""
              width={65}
              height={65}
            />
            <p className="text-white">В Telegramm</p>
          </Link>
          <Link
            href={"https://wa.me/79220058113"}
            className="flex items-center gap-2"
          >
            <Image
              className="w-8"
              src={"/images/whatsapp-black.svg"}
              alt=""
              width={65}
              height={65}
            />
            <p className="text-white">В Whatsapp</p>
          </Link>
        </div>
        <div className="self-center mt-2 font-thin text-[22px]">
          <span className="text-white my-6 block text-center">
            Контакты салона
          </span>
          <p className="text-white text-center block my-2">город Тюмень,</p>
          <p className="text-white text-center my-2">Солнечный проезд 22</p>
          <Link
            href={`tel:+79220058113`}
            className="text-white hover:text-hover block text-center"
          >
            +7 (922) 005-81-13
          </Link>
        </div>
      </div>
    </div>
  );
};
