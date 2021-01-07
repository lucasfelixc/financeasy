import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const ContentHeader = styled.header`
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .contentInfoPerfil {
    padding: 20px 0 0 20px;

    display: flex;
    flex-direction: column;
  }

  .contentInfoPerfil strong {
    font-size: 20px;
  }

  .contentInfoPerfil span {
    font-size: 10px;
    color: #6d749e;
  }

  .contentImgPerfil {
    padding: 20px 20px 0 0;
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
  justify-content: center;
  align-items: center;

  width: 100vw;

  margin: 30px 0;
`

export const InfoCard = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;

  padding: 15px;
  border-radius: 20px;
  margin: 0 0 15px 0;

  background: ${props => props.background};

  .infos {
    display: flex;
    flex-direction: column;
  }
`
