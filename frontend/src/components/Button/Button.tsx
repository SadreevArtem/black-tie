import { montserrat } from "@/pages";
import { ButtonBaseProps } from "@mui/material";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = {
  title: string;
  className?: string;
  onButtonClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  title,
  className = "",
  onButtonClick,
}) => {
  return (
    <button
      onClick={onButtonClick}
      className={clsx(
        "shadow-button font-normal mt-12 text-white bg-white/20 border hover:border-white border-transparent xl:p-6 p-4 xl:px-[100px] px-[86px] max-md:text-[14px] rounded-[5px] xl:text-[24px] text-[20px]  transition",
        className,
        montserrat.className
      )}
    >
      {title}
    </button>
  );
};
