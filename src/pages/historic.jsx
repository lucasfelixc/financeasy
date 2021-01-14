import { useState } from 'react'
import Link from 'next/link'
import { Line } from 'react-chartjs-2'

import { Container, ListCost } from '../styles/pages/Historic/styles'
import { Shadow } from '../styles/pages/Home/styles'

import Back from '../assets/icons/back.svg'
import Cake from '../assets/icons/cake.svg'
import Plus from '../assets/icons/plus.svg'

import {
  data,
  monthlySpendingDetail,
  monthlySpendingTotal,
  monthlyEarningsTotal
} from './_data'

import BoxAdd from '../pages/Components/BoxAdd'

import { currentMonth } from '../utils/currentDate'

export default function Historic() {
  const [display, setDisplay] = useState(false)

  const saved =
    monthlyEarningsTotal[currentMonth] - monthlySpendingTotal[currentMonth]

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

  return (
    <Container>
      <header>
        <Link href="/">
          <a>
            <Back />
          </a>
        </Link>
      </header>
      <main>
        <div className="amount">
          <span>Salvo esse mês</span>
          <strong>$ {saved.toFixed(2)}</strong>
        </div>
        <div className="chart">
          <Line data={data}></Line>
        </div>
        <div className="btn">
          <button className="addPay" onClick={handleBoxClick}>
            <Plus />
          </button>
          <BoxAdd
            display={display}
            position="absolute"
            left="11.5%"
            top="145px"
          />
          <Shadow display={display} onClick={handleShadowClick} />
        </div>
        <ListCost>
          {monthlySpendingDetail[currentMonth].map((value, index) => {
            return (
              <li key={index}>
                <div className="contentPrimary">
                  <Cake />
                  <div className="infos">
                    <strong>{value.name}</strong>
                    <span>{value.description}</span>
                  </div>
                </div>
                <strong className="value">
                  $ {parseFloat(value.value).toFixed(2)}
                </strong>
              </li>
            )
          })}
        </ListCost>
      </main>
    </Container>
  )
}
