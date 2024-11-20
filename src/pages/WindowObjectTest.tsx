import Header from '../components/Header.tsx'
import styled from '@emotion/styled'
import React from 'react'

const WindowObjectTest = () => {
  const urls = {
    httpProtocol:'http://play.google.com/store/apps/details?id=com.nhn.android.search&hl=ko',
    marketScheme :'market://details?id=com.nhn.android.search&hl=ko',
    appleStore:'https://itunes.apple.com/kr/app/apple-store/id393499958'
  }
  const windowReplace = (e:React.MouseEvent,url:string) => {
    e.stopPropagation()
    location.replace(url)
  }

  const windowHref = (e:React.MouseEvent,url:string) => {
    e.stopPropagation()
    location.href = url
  }

  return(
    <>
      <Header text={'Window Object Stub 테스트'} />
      <Container>
        <h2>구글 플레이 스토어</h2>
        <a href={'#'} id={'httpProtocol'} onClick={(e) => windowReplace(e, urls.httpProtocol)}>http 프로토콜 사용</a>
        <a href={'#'} id={'market'} onClick={(e) => windowHref(e, urls.marketScheme)}>market scheme 사용해서 이동하기</a>
        <h2>애플 스토어</h2>
        <a href={'#'} id={'appStore'} onClick={(e) => windowReplace(e,urls.appleStore)}>앱 스토어 이동하기</a>
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

