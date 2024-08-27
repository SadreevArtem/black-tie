import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HEADER_MENU } from "../Hamburger/static";
import { Hamburger } from "../Hamburger";
import Image from "next/image";


export const Header: React.FC = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
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
      className="md:p-5 p-4 header-scroll fixed top-0 z-10 bg-black w-full"
    >
      <div className={"container flex items-center justify-between min-h-6"}>
        <Link href="/" className="relative block shrink-0">
          <Image src={"/images/logo.svg"} alt="logo" width={100} height={100}/>
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="flex md:gap-4 gap-2 items-center">
            <li>
              <Link className="header-link relative" href="/favorite">
                
              </Link>
            </li>
           
            <li className={`self-center ml-6 max-md:hidden`}>
              <Menu>
                <MenuButton className="flex items-center rounded-md shadow-inner shadow-white/10 focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
                  <div className="flex flex-col gap-1 ">
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                  </div>
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-55 mt-10 origin-top-right rounded-xl border border-white/5 opacity-75 bg-bgColor p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 text-primary"
                >
                  <MenuItem>
                    <Link
                      href="/"
                      className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 `}
                      onClick={onClose}
                    >
                      Главная
                    </Link>
                  </MenuItem>
                  {HEADER_MENU.map((item) => (
                    <MenuItem key={item.value}>
                      <Link
                        href={item.href}
                        className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10`}
                        onClick={onClose}
                      >
                        {item.value}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
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
    </header>
  );
};
