import styled, { css, keyframes } from 'styled-components'

const textReveal = keyframes`
  from {
    transform: translateX(-101%);
  }

  to {
    transform: translateX(101%);
  }
`

const boxReveal = keyframes`
  0% {
    transform: translateY(100%);
  }

  95% {
    transform: translateY(-20px);
  }

  96% {
    transform: translateY(-15px);
  }

  97% {
    transform: translateY(-10px);
  }

  98% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
`

const fade = keyframes`
  to {opacity: 1;}
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  ${props => {
    if (props.display) {
      return css`
        overflow: hidden;
      `
    }
  }}

  main {
    width: 100%;
    height: 60%;
    background: ${props => props.theme.colors.backgroundSecondary};

    border-radius: 0 70px 0 0;

    transform: translateY(100%);

    animation: ${boxReveal} 0.3s ease-out 1s forwards;

    .balance {
      height: 20%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-left: 20px;

      span {
        font-size: 14px;
      }

      strong {
        font-size: 22px;
      }
    }

    .recipe {
      width: 100%;
      height: 60%;

      .tittle {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 14px;
          font-weight: 600;

          padding-left: 20px;
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

            margin: 0 0 0 20px;

            z-index: 15;

            background: ${props => props.theme.colors.primary};

            transition: 0.3s;

            :hover {
              background: ${props => props.theme.colors.primaryLight};
            }
          }
        }

        .rate {
          font-size: 14px;

          padding: 5px 15px;
          margin-right: 20px;

          background: ${props => props.theme.colors.primary};

          border-radius: 15px;
        }
      }
    }

    .contentHistoric {
      padding: 20px 0 0 20px;

      a {
        width: 50%;
        height: 40px;

        display: flex;
        align-items: center;

        background: ${props => props.theme.colors.primary};

        border-radius: 15px;

        font-size: 15px;
        font-weight: 600;
        color: #ffffff;

        transition: 0.3s;

        :hover {
          background: ${props => props.theme.colors.primaryLight};
        }

        svg {
          margin: 0 20px;
        }
      }
    }
  }
`

export const ContentHeader = styled.header`
  width: 100vw;
  height: 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .contentInfoPerfil {
    display: flex;
    flex-direction: column;

    padding: 0 0 0 20px;

    .wrapperName {
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
      font-size: 20px;
      opacity: 0;

      animation: ${fade} 1ms 0.5s forwards;
    }

    span {
      font-size: 10px;
      color: #6d749e;
    }
  }

  .contentImgPerfil {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 20px 0 0;
  }

  .contentImgPerfil svg {
    width: 50px;
    height: 50px;

    border-radius: 50% 50%;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0;

  width: 100vw;
  height: 25%;

  overflow-x: auto;

  animation: ${fade} 2s cubic-bezier(1, 1, 0.75, 0.5) 2s forwards;

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
`

export const InfoCard = styled.div`
  width: 80%;
  height: 50%;

  display: flex;
  justify-content: space-between;

  padding: 15px;
  border-radius: 20px;
  margin: 7.5px 0;

  background: ${props => props.background};

  .infos {
    display: flex;
    flex-direction: column;
  }
`

export const InfoPay = styled.ul`
  width: 95%;
  height: 70%;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-row-gap: 20px;

  margin: 30px 0 30px 20px;

  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid #282f65;
  }

  ::-webkit-scrollbar-thumb {
    background: #1d1e3c;
    border-radius: 10px;
  }

  li {
    width: 120px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.primary};

    border-radius: 0 30px 30px 30px;

    strong {
      padding: 10px;
    }

    .infoSecondary {
      font-size: 11px;
    }

    .value {
      font-size: 13px;
      font-weight: 600;
    }
  }
`

export const Shadow = styled.div`
  ${props => {
    if (props.display) {
      return css`
        width: 100vw;
        height: 100vh;

        display: flex;

        background: rgba(34, 32, 40, 0.5);

        z-index: 10;
        top: 0;
        left: 0;

        border-radius: 0 70px 0 0;

        position: absolute;
      `
    } else {
      return css`
        display: none;
      `
    }
  }}
`
