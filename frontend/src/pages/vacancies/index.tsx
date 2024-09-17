import React, { ReactElement } from 'react'
import { BaseLayout } from '../../../layouts/BaseLayout/BaseLayout'
import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { ModalVacancies } from '@/components/ModalVacancies/ModalVacancies'
import { Call } from '@/components/Call/Call'

const Vacancies = () => {
  return (
    <>
      <AppHead title="Вакансии" description="" />
      <Header />

      <ModalVacancies />
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
      <Call />
    </>
  );
}


Vacancies.getLayout = function getLayout(page: ReactElement) {
    return (
      <BaseLayout>
        {page}
      </BaseLayout>
    )
  }

export default Vacancies;