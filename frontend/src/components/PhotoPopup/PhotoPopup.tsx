import React from "react";
import Image from "next/image";
import clsx from "clsx";



type Props = {
  url: string;
  className?: string;
};

export const PhotoPopup: React.FC<Props> = ({ url, className }) => {
  

  return (
    <div className={clsx("max-w-[800px]", className)}>
      <div className="flex items-center mb-6">
        <div
          className={clsx(
            "relative w-full h-[560px] mt-8 md:mt-12 shrink-0"
          )}
        >
          <Image
            src={url || "/empty.png"}
            alt={"Аватар"}
            fill
            className="w-full h-full rounded-3 md:rounded-4 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
