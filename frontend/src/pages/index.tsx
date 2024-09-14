import { Montserrat } from "next/font/google";
import { AppHead } from "@/components/AppHead/AppHead";
import { Header } from "@/components/Header/Header";
import { Author } from "@/components/Author/Author";
import { InfoBlock } from "@/components/InfoBlock/InfoBlock";
import { reviews } from "@/shared/static";
import { AboutBlock } from "@/components/AboutBlock/AboutBlock";
import { ReactElement } from "react";
import { BaseLayout } from "../../layouts/BaseLayout/BaseLayout";
import { MastersBlock } from "@/components/MastersBlock/MastersBlock";
import { ProgramsBlock } from "@/components/ProgramsBlock/ProgramsBlock";
import { TelegrammBlock } from "@/components/TelegrammBlock/TelegrammBlock";
import { Footer } from "@/components/Footer/Footer";



export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Настраиваешь веса, которые тебе нужны
});

export const MetaData = {
  title: "Эротический массаж в Тюмени | spa-choсolate, эромассаж",
  description: "Салон эротического массажа в Тюмени для мужчин ✅ Проверенные фотографии и реальные отзывы, цена, телефон, лучший массаж в Тюмени",
  keywords: "Эротический массаж в Тюмени, эротический массаж, эромассаж, Тюмень"
};

const Home = ()=> {
  return (
    <>
      <AppHead title={MetaData.title} description={MetaData.description} />
      <Header />
      <div className={`flex flex-col justify-between ${montserrat.className}`}>
        <Author
          images={[
            { url: "/images/banner1.png" },
            { url: "/images/banner2.png" },
          ]}
        />

        <InfoBlock />
        <MastersBlock items={reviews} />
        <ProgramsBlock />
        <div className="md:mt-[60px] mt-4">
          <TelegrammBlock />
        </div>
        <div className="md:mt-[60px] mt-4">
          <AboutBlock />
        </div>
        {/* <div className="md:mt-[60px] mt-4">
          <Categories />
        </div> */}
        {/* <div className="md:mt-[60px] mt-4">
          <Selections title="Вам точно понравится"/>
        </div> */}
        <div className="md:mt-[60px] mt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default Home;