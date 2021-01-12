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
        color: #8890BF;
      }

      strong {
        padding-top: 10px;
        font-size: 30px;
      }
    }
  }
`
