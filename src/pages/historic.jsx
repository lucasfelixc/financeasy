import Link from 'next/link'
import { Line } from 'react-chartjs-2'

import { Container, ListCost } from '../styles/pages/Historic/styles'

import Back from '../assets/icons/back.svg'
import Cake from '../assets/icons/cake.svg'

import {
  data,
  monthlySpendingDetail,
  monthlySpendingTotal,
  monthlyEarningsTotal
} from './_data'

import { currentMonth } from '../utils/currentDate'

export default function Historic() {
  const saved =
    monthlyEarningsTotal[currentMonth] - monthlySpendingTotal[currentMonth]

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
