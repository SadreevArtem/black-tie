import React, { useState } from "react";
import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { AppIcon } from "../AppIcon";
import clsx from "clsx";
import { useScrollbarWidth } from "@/hooks/useScrollbarWidth";
import { Inter } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const ModalContent18: React.FC<PropsWithChildren<PropsModal>> = ({
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
        `relative top-0 left-0 h-[100%] w-[100%] bg-black  md:p-[24px] flex items-center justify-center ${inter.className}`,
        className
      )}
    >
      {closeHandler && (
        <button
          type="button"
          className="absolute right-4 md:right-[24px] md:top-[24px]"
          onClick={closeHandler}
        >
          <AppIcon
            type="close"
            className="text-primary max-md:w-6 max-md:h-6"
          />
        </button>
      )}

      {children}
    </div>
  );
};

export const Is18Modal: React.FC<PropsWithChildren<Props>> = ({
  closeHandler,
  isOpen = false,
  className,
  contentClassName,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed z-50 inset-x-0 inset-y-0 w-full h-full bg-[rgba(0,0,0,0.5)] overflow-y-auto no-scrollbar",
        className
      )}
    >
      <ModalContent18 className={contentClassName} closeHandler={closeHandler}>
        {children}
      </ModalContent18>
    </div>,
    document.body as HTMLElement
  );
};
