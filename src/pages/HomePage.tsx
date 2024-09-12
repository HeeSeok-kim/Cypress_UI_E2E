import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Header from '../components/Header.tsx'

const HomePage = () => {
  return (
    <>
      <Header text={'Cypress를 사용한 E2E 테스트'} />
      <LinkContainer>
        <Link to={'modal-test'} id={'modal-test'}>공지 팝업(모달) 테스트</Link>
        <Link to={'window-object-test'} id={'window-object-test'}>window.replace, Href 테스트</Link>
      </LinkContainer>
    </>
  )
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  height: 100%;
  align-items: center;
`

export default HomePage
