import clsx from "clsx";

type Props = {
  title: string;
  className?: string;
  onButtonClick?: ()=> void;
};

export const Button: React.FC<Props> = ( {title, className="", onButtonClick })=> {
    return (
        <button onClick={onButtonClick} className={clsx("bg-bg-opacity font-bold my-6 p-2 px-12 uppercase md:text-[24px] text-[18px] rounded-[80px] hover:bg-black transition text-white hover:text-primary self-center", className)} >
            {title}
        </button>
    )
};

