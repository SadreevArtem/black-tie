import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";


type BannerProps = {
  images: {url: string}[];
};

export const Author: FC<BannerProps> = ({ images }) => {

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const activeBanner = images[activeBannerIndex];
  const imageRef = useRef<HTMLImageElement>(null);

  const onNextBannerIndex = useCallback(() => {
    setActiveBannerIndex((prevState: number) => (prevState === images.length - 1 ? 0 : prevState + 1));
  }, [setActiveBannerIndex, images]);

  useEffect(() => {
    const intervalId = setInterval(onNextBannerIndex, 5000);
    return () => clearInterval(intervalId);
  }, [onNextBannerIndex]);

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-start">
        <div className="h-[75vh]">
          <SwitchTransition mode="in-out">
            <CSSTransition
              nodeRef={imageRef}
              key={activeBannerIndex}
              timeout={1000}
              className="transition-opacity duration-1000 md:object-bottom object-cover"
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exit: "opacity-100",
                exitActive: "opacity-0",
              }}
            >
              <Image
                ref={imageRef}
                src={activeBanner?.url ?? ""}
                alt=""
                fill
                className="w-full"
                priority={true}
                quality={100}
              />
            </CSSTransition>
          </SwitchTransition>
          {activeBannerIndex === 1 && (
            <div className={`text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:text-[28px] text-[22px] text-center transition-opacity duration-1000 ease-in-out ${
              activeBannerIndex === 1 ? "opacity-100" : "opacity-0"
            }`}>
              <p className="font-extrabold">GOLD КАРТА</p>
              <p>10% скидка всем подписчикам Telegram канала</p>
              <p className="mt-8">Бесплатные напитки из нашего бара</p>
            </div>
          )}
          {activeBannerIndex === 0 && (
            <div  className={`text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:text-[28px] text-[22px] text-center items-center transition-opacity duration-1000 ease-in-out ${
              activeBannerIndex === 0 ? "opacity-100" : "opacity-0"
            }`}>
              <Image src={"/images/Group.svg"} alt="logo" width={200} height={100}/>
              <p className="mt-12">САЛОН ЭРОТИЧЕСКОГО МАССАЖА</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
