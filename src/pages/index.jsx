import Link from 'next/link'
import Head from 'next/head'

import Perfil from '../assets/images/lucas.svg'
import Mastercard from '../assets/icons/mastercard.svg'
import Arrowdown from '../assets/icons/arrowdown.svg'
import Salary from '../assets/icons/salary.svg'
import Historic from '../assets/icons/historic.svg'

import {
  Container,
  ContentHeader,
  ContentCard,
  InfoCard,
  InfoPay
} from '../styles/pages/Home/styles'

import { users, cards } from './_data'
import Sum from '../utils/sum'

export default function Home() {
  function cutName(fullName) {
    const firstName = fullName.split(' ', 2)

    return firstName[0]
  }

  const balance = users[0].balance

  return (
    <Container>
      <Head>
        <title>Financeasy</title>
      </Head>

      <ContentHeader>
        <div className="contentInfoPerfil">
          <strong>Olá {cutName(users[0].name)}</strong>
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

      <main>
        <div className="balance">
          <span>Saldo</span>
          <strong>$ {Sum(balance).toFixed(2)}</strong>
        </div>
        <div className="recipe">
          <div className="tittle">
            <span>Próximos pagamentos</span>
            <div className="rate">
              <Arrowdown /> 5.9%
            </div>
          </div>
          <InfoPay>
            {balance.map((value, index) => {
              return (
                <li key={index}>
                  <Salary />
                  <strong>{value.name}</strong>
                  <span className="infoSecondary">{value.infoSecondary}</span>
                  <span className="value">
                    $ {parseFloat(value.value).toFixed(2)}
                  </span>
                </li>
              )
            })}
          </InfoPay>
        </div>
        <div className="contentHistoric">
          <Link href="/historic">
            <a>
              <Historic />
              Histórico de gastos
            </a>
          </Link>
        </div>
      </main>
    </Container>
  )
}
