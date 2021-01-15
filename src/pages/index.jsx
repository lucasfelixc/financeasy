import { useState } from 'react'
import Link from 'next/link'

import Perfil from '../assets/images/lucas.svg'
import Mastercard from '../assets/icons/mastercard.svg'
import Arrowdown from '../assets/icons/arrowdown.svg'
import Salary from '../assets/icons/salary.svg'
import Historic from '../assets/icons/historic.svg'
import Plus from '../assets/icons/plus.svg'

import BoxAdd from '../pages/Components/BoxAdd'

import {
  Container,
  ContentHeader,
  ContentCard,
  InfoCard,
  InfoPay,
  Shadow
} from '../styles/pages/Home/styles'

import {
  users,
  cards,
  monthlyEarningsDetail,
  monthlyEarningsTotal
} from './_data'

import { currentMonth } from '../utils/currentDate'

export default function Home() {
  const [display, setDisplay] = useState(false)

  function cutName(fullName) {
    const firstName = fullName.split(' ', 2)

    return firstName[0]
  }

  function handleBoxClick() {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  function handleShadowClick() {
    setDisplay(false)
  }

  function sendInfo(...adc) {
    console.log(adc)
  }

  return (
    <Container display={display}>
      <ContentHeader>
        <div className="contentInfoPerfil">
          <div className="wrapperName">
            <strong>Olá {cutName(users[0].name)}</strong>
          </div>
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
          <strong>$ {monthlyEarningsTotal[currentMonth].toFixed(2)}</strong>
        </div>
        <div className="recipe">
          <div className="tittle">
            <div className="btn">
              <span>Próximos pagamentos</span>
              <button className="addPay" onClick={handleBoxClick}>
                <Plus />
              </button>
              <BoxAdd
                display={display}
                position="absolute"
                height="300px"
                left="218px"
                top="55px"
                values={sendInfo}
              />
              <Shadow display={display} onClick={handleShadowClick} />
            </div>
            <div className="rate" display={display}>
              <Arrowdown /> 5.9%
            </div>
          </div>
          <InfoPay>
            {monthlyEarningsDetail[currentMonth].map((value, index) => {
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
