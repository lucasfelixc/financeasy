import Head from 'next/head'

import Perfil from '../assets/images/lucas.svg'
import Mastercard from '../assets/icons/mastercard.svg'

import {
  Container,
  ContentHeader,
  ContentCard,
  InfoCard
} from '../styles/pages/Home/styles'

const cards = [
  {
    name: 'Nubank',
    number: '4465 1122 3562 8751',
    type: 'Mastercard',
    background: '#8A05BE'
  },
  {
    name: 'Inter',
    number: '4465 1122 3562 6524',
    type: 'Mastercard',
    background: '#FF7A00'
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

      <ContentCard>
        {cards.map((value, index) => {
          return (
            <InfoCard key={index} background={value.background}>
              <div className="infos">
                <strong>{value.name}</strong>
                <span>{value.number}</span>
              </div>
              <Mastercard />
            </InfoCard>
          )
        })}
      </ContentCard>

      <main></main>
    </Container>
  )
}
