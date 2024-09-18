import React, { ReactElement } from 'react'
import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { useRouter } from 'next/router'
import { montserrat } from '@/pages'
import { BaseLayout } from '../../../../layouts/BaseLayout/BaseLayout'
// import { MastersDetailClient } from '@/components/MasterDetailClient/MasterDetailClient'
import { Footer } from '@/components/Footer/Footer'
import { ProgramsDetailClient } from '@/components/ProgramsDetailClient/ProgramsDetailClient'
import { Call } from '@/components/Call/Call'

const ProgramsDetail = () => {
    const router = useRouter();
    const id = router.query.id;
    if(!id) return null;
  return (
    <>
      <AppHead title="Программа эромассажа" description="" showCanonical canonicalPath='https://spa-chocolate.ru/programs'/>
      <Header />
      <div
        className={`container mt-[105px] flex flex-col items-center ${montserrat.className}`}
      >
        <ProgramsDetailClient id={+id} />
      </div>
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
      <Call />
    </>
  );
}


ProgramsDetail.getLayout = function getLayout(page: ReactElement) {
    return (
      <BaseLayout>
        {page}
      </BaseLayout>
    )
  }

export default ProgramsDetail;