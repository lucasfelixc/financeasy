import React from 'react'
import Head from 'next/head'

import Perfil from '../assets/images/lucas.svg'

import {
  Container,
  ContentHeader,
  ContentCard
} from '../styles/pages/Home/styles'

const cards = [
  {
    number: '4465 1122 3562 8751',
    type: 'Mastercard'
  }
]

export default function Home() {
  const name = 'Lucas Felix'

  function cutName(fullName) {
    const firstName = fullName.split(' ', 2)

    return firstName[0]
  }

  return (
    <Container>
      <Head>
        <title>Financeasy</title>
      </Head>

      <ContentHeader>
        <div className="contentInfoPerfil">
          <strong>Olá {cutName(name)}</strong>
          <span>Bem vindo de volta</span>
        </div>

        <div className="contentImgPerfil">
          <Perfil />
        </div>
      </ContentHeader>

      <ContentCard></ContentCard>

      <main></main>
    </Container>
  )
}
