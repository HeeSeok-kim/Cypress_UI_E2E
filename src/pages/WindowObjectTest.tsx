import Header from '../components/Header.tsx'
import styled from '@emotion/styled'

const WindowObjectTest = () => {
  const windowHref = (url:string) =>{

  }

  const windowReplace = (url:string) => {
    
  }

  return(
    <>
      <Header text={'공지 모달 테스트'} />
      <Container>
        <a onClick={()=>windowReplace('http://google.com')}>구글 플레이 스토어 이동하기</a>
        <a onClick={()=>windowHref('http://google.com')}>애플 스토어 이동하기</a>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  height: 100%;
  align-items: center;
`

export default WindowObjectTest;

