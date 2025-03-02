import React from "react";
import { createPortal } from "react-dom";
import { HamburgerMenu } from "../HamburgerMenu";
import { HeaderMenuItem } from "./static";
import { AppIcon } from "../AppIcon";
import clsx from "clsx";
import { useModal } from "@/hooks/useModal";
import { AppModal } from "../AppModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";

type Props = {
  menu: HeaderMenuItem[];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
};

export const Hamburger: React.FC<Props> = ({
  menu,
  active,
  onOpen,
  onClose,
  className = "string",
}) => {
  const onToggle = () => (active ? onClose() : onOpen());
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <div className="flex">
        {/* <button
          className={clsx(
            "mr-2 bg-bg-opacity text-white px-6 py-2 text-[10px] rounded-[80px] hover:bg-black transition hover:text-primary",
            { hidden: !active }
          )}
          onClick={handleOpen}
        >
          ЗАПИСАТЬСЯ ОНЛАЙН
        </button> */}
        <button onClick={onToggle} className="flex">
          <div className={clsx("flex flex-col gap-2 ", { hidden: active })}>
            <div className={clsx("bg-white w-[38px] h-[2px]")} />
            <div className={clsx("bg-white w-[38px] h-[2px]")} />
            <div className={clsx("bg-white w-[38px] h-[2px]")} />
            <div className={clsx("bg-white w-[38px] h-[2px]")} />
          </div>

          <AppIcon
            type="close"
            className={clsx("text-white max-md:w-[32px] max-md:h-[32px]", {
              hidden: !active,
            })}
          />
        </button>
      </div>
      {active &&
        createPortal(
          <HamburgerMenu
            className={`"md:hidden"`}
            menu={menu}
            onClose={onClose}
            handleOpen={handleOpen}
          />,
          document.body
        )}
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
    </>
  );
};
