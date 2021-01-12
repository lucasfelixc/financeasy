import Link from 'next/link'
import { Line } from 'react-chartjs-2'

import { Container } from '../styles/pages/Historic/styles'

import Back from '../assets/icons/back.svg'

import { users, data } from './_data'

export default function Historic() {
  const listSpending = users[0].spending
  const values = []
  const reducer = (acumulator, currentValue) => acumulator + currentValue

  listSpending.map(value => {
    return values.push(parseFloat(value.value))
  })

  const spending = values.reduce(reducer)
  const balance = parseFloat(users[0].balance)
  const saved = balance - spending

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
      </main>
    </Container>
  )
}
