import clsx from "clsx";
import { menuAdmin } from "./static";
import { useState } from "react";


import { useAuthStore } from "@/store/auth";
import { Button } from "../Button";
import { Orders } from "../Orders/Orders";
import { Masters } from "../Masters/Masters";
import { Programs } from "../Programs/Programs";

type Props = {
  title: string;
  className?: string;
};

export const AdminPanel: React.FC<Props> = ({title, className=""})=> {
    const [currentMenu, setCurrentMenu] = useState("masters");
    const handleMenuClick = (menu: string) => setCurrentMenu(menu);
    const unAuth = useAuthStore((state) => state.unAuth);
    const renderContent = () => {
      switch (currentMenu) {
        case "masters":
          return <Masters />;
        case "programs":
          return <Programs />;
        case "orders":
          return <Orders />;
        default:
          return null; // Возвращает null, если нет совпадений
      }
    };
    return (
      <>
      <div className="container pt-8">
        <div className="flex justify-between">
          <h1 className={clsx("text-primary font-semibold text-[48px]", className)}>
            {title}
          </h1>
          <Button onButtonClick={unAuth} title="Выйти"></Button>
        </div>
        <div className="flex mt-6 gap-4">
          <div className="w-[25%] h-[60vh] bg-orange-200 p-4 rounded-lg">
            <ul className="flex flex-col gap-4">
              {menuAdmin.map((item) => (
                <li className="text-[24px]" key={item.id}>
                  <button className={clsx({"bg-white px-4 rounded-[50px]": item.name===currentMenu})} onClick={() => handleMenuClick(item.name)}>
                    {item.value}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            {
              renderContent()
            }
          </div>
        </div>
      </div>
      </>
    );
};