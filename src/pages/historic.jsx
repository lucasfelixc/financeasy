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
  options,
  monthlySpendingDetail,
  monthlySpendingTotal,
  monthlyEarningsTotal
} from '../service/data'

import BoxAdd from '../pages/Components/BoxAdd'

import { currentMonth } from '../utils/currentDate'

export default function Historic() {
  const [display, setDisplay] = useState(false)

  const info = []

  const dataAdd = {
    name: info[0],
    description: info[1],
    value: info[2],
    category: info[3]
  }

  monthlySpendingDetail[currentMonth].push(dataAdd)

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

  function sendInfos([...adc]) {
    info.push(adc)
  }

  return (
    <Container display={display}>
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
          <div className="wrapperName">
            <strong>$ {saved.toFixed(2)}</strong>
          </div>
        </div>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
        <div className="btn">
          <button className="addPay" onClick={handleBoxClick}>
            <Plus />
          </button>
          <BoxAdd
            display={display}
            spending={true}
            position="absolute"
            height="380px"
            left="11.5%"
            top="65px"
            values={sendInfos}
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
