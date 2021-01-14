import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: ${props => props.height};

  z-index: 15;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  select {
    width: 90%;
    height: 30px;

    border-radius: 8px;

    border: 1px solid #6d5db6;
    outline: none;

    padding: 0 0 0 15px;

    background: ${props => props.theme.colors.primary};
    color: #ffffff;
    font-size: 13px;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 90%;

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

  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};

  border-radius: 40px 40px 40px 0;

  button {
    width: 80%;
    height: 35px;

    margin-top: 20px;
    border-radius: 15px;

    background: #735cdd;

    transition: 0.3s;

    font-weight: 600;
    color: #ffffff;

    :hover {
      background: #8167ff;
    }
  }
`
