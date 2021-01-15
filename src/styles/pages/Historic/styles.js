import styled, { css, keyframes } from 'styled-components'

const textReveal = keyframes`
  from {
    transform: translateX(-101%);
  }

  to {
    transform: translateX(101%);
  }
`

const fade = keyframes`
  to {opacity: 1;}
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid #1d1e3c;
  }

  ::-webkit-scrollbar-thumb {
    background: #282f65;
    border-radius: 10px;
  }

  ${props => {
    if (props.display) {
      return css`
        overflow: hidden;
      `
    }
  }}

  header {
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;

    a {
      padding-left: 20px;
    }
  }

  main {
    .amount {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-size: 13px;
        color: #8890bf;
      }

      .wrapperName {
        margin-top: 10px;
        overflow: hidden;
        position: relative;

        ::after {
          animation: ${textReveal} 1s cubic-bezier(0.85, 0, 0.15, 1) forwards;
          background-color: ${props => props.theme.colors.backgroundSecondary};
          content: '';
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
        }
      }

      .wrapperName strong {
        font-size: 30px;
        opacity: 0;

        animation: ${fade} 1ms 0.5s forwards;
      }
    }

    .chart {
      margin: 20px 0;
    }

    .btn {
      display: flex;
      align-items: center;

      .addPay {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;

        border-radius: 50% 50%;

        margin-left: 7.5%;

        z-index: 15;

        background: ${props => props.theme.colors.primary};

        transition: 0.3s;

        :hover {
          background: ${props => props.theme.colors.primaryLight};
        }
      }
    }
  }
`

export const ListCost = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    width: 85%;
    height: 80px;

    margin: 10px 0;

    border-radius: 0 30px 30px 30px;

    background: ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin: 0 30px;
    }

    .contentPrimary {
      display: flex;
      align-items: center;
    }

    .infos {
      display: flex;
      flex-direction: column;
    }

    .value {
      margin: 0 30px 0 0;
    }
  }
`
