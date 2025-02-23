import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HEADER_MENU } from "../Hamburger/static";
import { Hamburger } from "../Hamburger";
import Image from "next/image";
import { Is18Modal } from "../Is18Modal/Is18Modal";
import { Is18Form } from "../Is18Form/Is18Form";
import { useAgeCheckStore } from "@/store/is18";
import { montserrat } from "@/pages";

export const Header: React.FC = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const is18 = useAgeCheckStore((state) => state.isAgeVerified);

  const onOpen = () => {
    setHamburgerActive(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setHamburgerActive(false);
    document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    const updateScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add("header-scroll");
      } else {
        header?.classList.remove("header-scroll");
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      className={`z-30 md:p-5 p-4 fixed top-0 bg-transparent w-full transition-colors duration-500 delay-300  ${montserrat.className}`}
    >
      <div className={"container flex items-center justify-between min-h-6"}>
        <div className="flex items-center gap-[10px] max-lg:hidden">
          <div className="flex gap-4">
            <Image
              src={"/images/location.svg"}
              alt="log"
              width={40}
              height={40}
            />
          </div>
          <div className="xl:text-[20px] text-[15px]">
            <p className="text-white">г. Тюмень</p>
            <p className="text-white">ул. Гнаровской, д.6</p>
          </div>
        </div>

        <div className="text-white max-md:hidden xl:text-[20px] lg:px-8 px-2 py-2">
          <ul className="flex gap-[55px] max-lg:text-sm items-center">
            <li>
              <Link className="hover:text-active-link" href={"/"}>
                Главная
              </Link>
            </li>
            <li>
              <Link className="hover:text-active-link" href={"/programs"}>
                Программы
              </Link>
            </li>
            <li>
              <Link href="/" className="relative block shrink-0">
                <Image
                  src={"/images/logo.svg"}
                  className="md:h-[74px]"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </li>
            <li>
              <Link className="hover:text-active-link" href={"/masters"}>
                Мастера
              </Link>
            </li>
            <li>
              <Link className="hover:text-active-link" href={"/vacancies"}>
                Вакансии
              </Link>
            </li>
          </ul>
        </div>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-[28px] items-center">
            <li className="max-md:hidden">
              <Link
                className="header-link relative "
                href="https://t.me/chocolate_spa"
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
            <li className="max-md:hidden">
              <Link
                className="header-link relative"
                href={"https://wa.me/79220058113"}
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
            <li className="max-md:hidden">
              <Link className="header-link relative" href={`tel:+79220058113`}>
                <Image
                  src={"/images/call.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="hover:opacity-50"
                />
              </Link>
            </li>
            <li className={`self-center ml-4 md:hidden`}>
              <Hamburger
                className="md:hidden"
                menu={HEADER_MENU}
                active={hamburgerActive}
                onOpen={onOpen}
                onClose={onClose}
              />
            </li>
          </ul>
        </nav>
      </div>
      <Is18Modal isOpen={!is18}>
        <Is18Form />
      </Is18Modal>
    </header>
  );
};
