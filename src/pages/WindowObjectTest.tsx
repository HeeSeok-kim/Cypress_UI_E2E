import Header from '../components/Header.tsx'
import styled from '@emotion/styled'
import React from 'react'

const WindowObjectTest = () => {
  const windowReplace = (e:React.MouseEvent) => {
    e.stopPropagation()
    location.replace('http://play.google.com')
  }

  return(
    <>
      <Header text={'Window Object Stub 테스트'} />
      <Container>
        <a href={'#'} id={'replace_test'} onClick={(e)=>windowReplace(e)}>구글 플레이 스토어 이동하기</a>
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

