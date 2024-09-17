import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
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

  return (
    <header
      className={`md:p-5 p-4 header-scroll fixed top-0 z-10 bg-[#29231F] w-full  ${montserrat.className}`}
    >
      <div className={"container flex items-center justify-between min-h-6"}>
        <Link href="/" className="relative block shrink-0">
          <Image src={"/images/logo.svg"} alt="logo" width={100} height={100} />
        </Link>
        <div className="text-white max-md:hidden lg:px-8 px-2 py-2 bg-[#191919] rounded-md">
          <ul className="flex gap-2 max-lg:text-sm">
            <li>
              <Link href={"/"}>ГЛАВНАЯ</Link>
            </li>
            <li>
              <Link href={"/programs"}>ПРОГРАММЫ</Link>
            </li>
            <li>
              <Link href={"/masters"}>МАСТЕРА</Link>
            </li>
            <li>
              <Link href={"/vacancies"}>ВАКАНСИИ</Link>
            </li>
          </ul>
        </div>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-2 items-center">
            <li>
              <div className="flex flex-col items-center gap-2 max-lg:hidden">
                <div className="flex gap-4">
                  <Image
                    src={"/images/location.svg"}
                    alt="log"
                    width={20}
                    height={20}
                  />
                <p className="text-white">г. Тюмень</p>
                </div>
                <p className="text-white">Солнечный проезд 22</p>
              </div>
            </li>
            <li className="w-[65px] max-md:hidden">
              <Link className="header-link relative" href="https://t.me/chocolate_spa">
                <Image src={"/images/tg.svg"} alt="" width={65} height={100} />
              </Link>
            </li>
            <li className="w-[65px] max-md:hidden">
              <Link
                className="header-link relative top-[4px] left-[5px]"
                href={"https://wa.me/79220058113"}
              >
                <Image src={"/images/wa.svg"} alt="" width={55} height={100} />
              </Link>
            </li>
            <li className="w-[65px] max-md:hidden">
              <Link
                className="header-link relative top-[2px] left-[12px]"
                href={`tel:+79220058113`}
              >
                <Image
                  src={"/images/phone.svg"}
                  alt=""
                  width={40}
                  height={100}
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
