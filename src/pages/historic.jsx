import Link from 'next/link'

import { Container } from '../styles/pages/Historic/styles'

import Back from '../assets/icons/back.svg'

import { users } from './_data'

export default function Historic() {
  const balance = parseFloat(users[0].balance)
  const spending = parseFloat(users[0].spending)
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
      </main>
    </Container>
  )
}
