import Header from '../components/Header.tsx'
import styled from '@emotion/styled'
import NoticeModal from '../components/NoticeModal.tsx'

const ModalTest = () => {
  return (
    <>
      <Header text={'공지 모달 테스트'} />
      <ModalContainer>{'페이지 접근시 공지 모달 표시 된다.'}</ModalContainer>
      <NoticeModal />
    </>
  )
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  height: 100%;
  align-items: center;
`

export default ModalTest
