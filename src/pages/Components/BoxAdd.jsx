import PropTypes from 'prop-types'
import { Container } from '../../styles/pages/Components/boxAdd'

export default function BoxAdd({ display }) {
  return (
    <Container display={display}>
      <div className="content name">
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" />
      </div>
      <div className="content description">
        <label htmlFor="description">Descrição:</label>
        <input id="description" type="text" />
      </div>
      <div className="content value">
        <label htmlFor="value">Valor:</label>
        <input id="value" type="number" />
      </div>
    </Container>
  )
}

BoxAdd.propTypes = {
  display: PropTypes.bool.isRequired
}
