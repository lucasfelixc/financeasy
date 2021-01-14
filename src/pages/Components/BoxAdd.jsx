import PropTypes from 'prop-types'
import { Container } from '../../styles/pages/Components/boxAdd'

export default function BoxAdd({ display, position, left, top }) {
  return (
    <Container display={display} position={position} left={left} top={top}>
      <div className="content name">
        <label htmlFor="name">Nome:</label>
        <input autoComplete="off" id="name" type="text" />
      </div>
      <div className="content description">
        <label htmlFor="description">Descrição:</label>
        <input id="description" type="text" />
      </div>
      <div className="content value">
        <label htmlFor="value">Valor:</label>
        <input id="value" type="number" />
      </div>
      <button>Adicionar</button>
    </Container>
  )
}

BoxAdd.propTypes = {
  display: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired
}
