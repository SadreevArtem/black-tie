import React, { ReactElement } from 'react'

import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { useRouter } from 'next/router'
import { montserrat } from '@/pages'
import { BaseLayout } from '../../../../layouts/BaseLayout/BaseLayout'
import { MastersDetailClient } from '@/components/MasterDetailClient/MasterDetailClient'
import { Footer } from '@/components/Footer/Footer'
import { Call } from '@/components/Call/Call'

const Masters = () => {
    const router = useRouter();
    const id = router.query.id;
    if(!id) return null;
  return (
    <>
      <AppHead title="Мастера" description="" showCanonical canonicalPath='https://spa-chocolate.ru/masters'/>
      <Header />
      <div
        className={`container mt-[105px] flex flex-col items-center ${montserrat.className}`}
      >
        {/* <h1 className="text-lg text-[32px] text-white lg:text-[40px] font-bold md:mt-12 mt-8">
          МАСТЕР
        </h1> */}
        <MastersDetailClient id={+id} />
      </div>
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
      <Call />
    </>
  );
}


Masters.getLayout = function getLayout(page: ReactElement) {
    return (
      <BaseLayout>
        {page}
      </BaseLayout>
    )
  }

export default Masters;