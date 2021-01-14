import PropTypes from 'prop-types'
import { useState } from 'react'
import { Container } from '../../styles/pages/Components/boxAdd'

export default function BoxAdd({
  display,
  spending,
  height,
  position,
  left,
  top,
  values
}) {
  const [textName, setTextName] = useState('')
  const [textDescription, setTextDescription] = useState('')
  const [textValue, setTextValue] = useState('')
  const [textCategory, setTextCategory] = useState('')

  function handleClickAdd() {
    spending
      ? values(textName, textDescription, textValue, textCategory)
      : values(textName, textDescription, textValue)
  }

  function handleChangeName(e) {
    setTextName(e.target.value)
  }

  function handleChangeDescription(e) {
    setTextDescription(e.target.value)
  }

  function handleChangeValue(e) {
    setTextValue(e.target.value)
  }

  function handleChangeCategory(e) {
    setTextCategory(e.target.value)
  }

  return (
    <Container
      display={display}
      height={height}
      position={position}
      left={left}
      top={top}
    >
      <div className="content name">
        <label htmlFor="name">Nome:</label>
        <input
          autoComplete="off"
          id="name"
          type="text"
          onChange={handleChangeName}
        />
      </div>
      <div className="content description">
        <label htmlFor="description">Descrição:</label>
        <input
          id="description"
          type="text"
          onChange={handleChangeDescription}
        />
      </div>
      <div className="content value">
        <label htmlFor="value">Valor:</label>
        <input id="value" type="number" onChange={handleChangeValue} />
      </div>

      {spending === true && (
        <div className="content category">
          <label htmlFor="value">Categoria:</label>
          <select name="category" onChange={handleChangeCategory}>
            <option value="nulo" selected></option>
            <option value="food">Alimentação</option>
            <option value="travel">Transporte</option>
            <option value="entertainment">Entretenimento</option>
            <option value="fixedCost">Custo fixo</option>
          </select>
        </div>
      )}

      <button onClick={handleClickAdd}>Adicionar</button>
    </Container>
  )
}

BoxAdd.propTypes = {
  display: PropTypes.bool.isRequired,
  spending: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  values: PropTypes.func.isRequired
}
