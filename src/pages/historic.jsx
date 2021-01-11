import Link from 'next/link'

import { Container } from '../styles/pages/Historic/styles'

import Back from '../assets/icons/back.svg'

import { users } from './_data'

export default function Historic() {
  const balance = parseFloat('100')
  const spending = parseFloat('10')
  const saved = balance + spending

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
          <strong>{saved}</strong>
        </div>
      </main>
    </Container>
  )
}
