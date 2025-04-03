import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { HeaderMenuItem } from "../Hamburger/static";
import Image from "next/image";
import { montserrat } from "@/pages";

type Props = {
  menu: HeaderMenuItem[];
  onClose: () => void;
  handleOpen: () => void;
  className?: string;
};

export const HamburgerMenu: React.FC<Props> = ({
  menu,
  onClose,
  handleOpen,
  className = "",
}) => {
  const { asPath } = useRouter();
  const paths = asPath.split("/");
  const listItemClassName = "mb-1 last:mb-0 py-2 px-4 rounded-2";

  return (
    <div
      className={clsx(
        "fixed z-40 top-[83px] right-0 left-0 bottom-0 bg-black opacity-1",
        className,
        montserrat.className
      )}
    >
      <div className="container max-h-full pt-1 pb-3 overflow-y-auto flex flex-col gap-4">
        <nav>
          <ul className="pt-4 font-thin">
            <li
              className={clsx(listItemClassName, {
                "bg-bgOpacity": paths[1] === "",
              })}
            >
              <Link
                href="/"
                className="block w-full text-[24px] font-semibold  text-white"
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
                    "block w-full text-[24px] font-semibold text-white "
                  )}
                  onClick={onClose}
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="shadow-button mt-12 bg-[#3e3d3d] border border-transparent hover:border-white xl:p-6 p-4 xl:px-[100px] px-[86px] max-md:text-[14px] rounded-[5px] transition w-full text-white"
          onClick={handleOpen}
        >
          Записаться онлайн
        </button>

        <Link
          href={"https://t.me/Black_Tie72"}
          className=" text-center shadow-button bg-black border border-white xl:p-6 p-4 xl:px-[100px]  max-md:text-[14px] rounded-[5px] transition w-full text-white"
          onClick={() => {}}
        >
          Telegram-канал для VIP гостей
        </Link>
        <Link
          href={"https://wa.me/79220046935"}
          className="text-center shadow-button bg-black border border-white xl:p-6 p-4 xl:px-[100px]  max-md:text-[14px] rounded-[5px] transition w-full text-white"
          onClick={() => {}}
        >
          Написать администратору
        </Link>

        <div className="self-center mt-2 font-thin text-[22px] flex flex-col gap-4">
          <Link
            href={`tel:+79220046935`}
            className="text-white hover:text-hover block text-center"
          >
            +7 (922) 004-69-35
          </Link>
          <ul className="flex self-center gap-4">
            <li className="">
              <Link
                className="header-link relative "
                href="https://t.me/+79220046935"
              >
                <Image
                  src={"/images/telegram.svg"}
                  alt=""
                  className="hover:opacity-50"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="">
              <Link
                className="header-link relative"
                href={"https://wa.me/79220046935"}
              >
                <Image
                  src={"/images/whatsapp.svg"}
                  alt=""
                  className="hover:opacity-50"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="">
              <Link className="header-link relative" href={`tel:+79220046935`}>
                <Image
                  src={"/images/call.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="hover:opacity-50"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
