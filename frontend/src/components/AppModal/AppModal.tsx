import React from "react";
import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { AppIcon } from "../AppIcon";
import clsx from "clsx";
import { useScrollbarWidth } from "@/hooks/useScrollbarWidth";

type Props = {
  isOpen: boolean;
  closeHandler?: () => void;
  className?: string;
  contentClassName?: string;
};

type PropsModal = {
  closeHandler?: () => void;
  className?: string;
};

export const ModalContent: React.FC<PropsWithChildren<PropsModal>> = ({
  children,
  closeHandler,
  className,
}) => {
  const scrollbarWidth = useScrollbarWidth();

  useEffect(() => {
    const listenerHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler?.();
      }
    };

    document.addEventListener("keydown", listenerHandler);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener("keydown", listenerHandler);
      document.body.style.removeProperty("overflow");
      document.body.style.paddingRight = "0px";
    };
  }, [closeHandler, scrollbarWidth]);

  return (
    <div
      className={clsx(
        "relative p-8 top-1/2 transform -translate-y-1/2 m-auto bg-black md:p-16 max-w-[580px]",
        className
      )}
    >
      {closeHandler && (
        <button
          type="button"
          className="absolute right-4 md:right-[24px] md:top-[24px]"
          onClick={closeHandler}
        >
          <AppIcon type="close" className="text-white max-md:w-6 max-md:h-6" />
        </button>
      )}

      {children}
    </div>
  );
};

export const AppModal: React.FC<PropsWithChildren<Props>> = ({
  closeHandler,
  isOpen = false,
  className,
  contentClassName,
  children,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed z-50 inset-x-0 inset-y-0 w-full h-full bg-white/30 overflow-y-auto no-scrollbar",
        className
      )}
    >
      <ModalContent className={contentClassName} closeHandler={closeHandler}>
        {children}
      </ModalContent>
    </div>,
    document.body as HTMLElement
  );
};
