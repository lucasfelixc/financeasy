import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

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

      strong {
        padding-top: 10px;
        font-size: 30px;
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
