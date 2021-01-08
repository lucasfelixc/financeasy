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

const users = [
  {
    name: 'Lucas Felix',
    balance: '$ 10,00'
  }
]

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
  },
  {
    name: 'Inter',
    number: '4465 1122 3562 6524',
    type: 'Mastercard',
    background: '#FF7A00'
  },
  {
    name: 'Inter',
    number: '4465 1122 3562 6524',
    type: 'Mastercard',
    background: '#FF7A00'
  }
]

const payments = [
  {
    name: 'Salário',
    infoSecondary: 'Fixo',
    value: '$2.000,00'
  },
  {
    name: 'Paypal',
    infoSecondary: 'Freelance',
    value: '$45,00'
  },
  {
    name: 'Paypal',
    infoSecondary: 'Freelance',
    value: '$45,00'
  },
  {
    name: 'Paypal',
    infoSecondary: 'Freelance',
    value: '$45,00'
  }
]

export default function Home() {
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
          <strong>{users[0].balance}</strong>
        </div>
        <div className="recipe">
          <div className="tittle">
            <span>Próximos pagamentos</span>
            <div className="rate">
              <Arrowdown /> 5.9%
            </div>
          </div>
          <InfoPay>
            {payments.map((value, index) => {
              return (
                <li key={index}>
                  <Salary />
                  <strong>{value.name}</strong>
                  <span className="infoSecondary">{value.infoSecondary}</span>
                  <span className="value">{value.value}</span>
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
