import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 200px;

  z-index: 15;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 90%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 10px 0 0 10px;

    label {
      font-weight: 600;
    }
  }

  ${props => {
    if (props.display) {
      return css`
        display: flex;
      `
    } else {
      return css`
        display: none;
      `
    }
  }}

  background: linear-gradient(180deg, #6247E6 0%, #4733A6 100%);

  position: absolute;
  left: 218px;
  top: 156px;

  border-radius: 40px 40px 40px 0;

  h1 {
    font-size: 10px;
  }
`
