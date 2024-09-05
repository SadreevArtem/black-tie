import React, { ReactElement } from 'react'
import { BaseLayout } from '../../../layouts/BaseLayout/BaseLayout'
import { AppHead } from '@/components/AppHead/AppHead'
import { Header } from '@/components/Header/Header'
import { montserrat } from '..'
import { Footer } from '@/components/Footer/Footer'
import { Button } from '@/components/Button'
import { ModalVacancies } from '@/components/ModalVacancies/ModalVacancies'

const Vacancies = () => {
  return (
    <>
      <AppHead title="Вакансии" description="" />
      <Header />

      <ModalVacancies />
      <div className="md:mt-[60px] mt-4">
        <Footer />
      </div>
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