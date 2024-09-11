import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import styled from '@emotion/styled'

const NoticeModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cookies, setCookie] = useCookies(['hideNoticeModal'])

  useEffect(() => {
    // 쿠키 확인하여 모달 표시 여부 결정
    if (!cookies.hideNoticeModal) {
      setIsVisible(true)
    }
  }, [cookies.hideNoticeModal])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleDoNotShowToday = () => {
    // 쿠키에 1일 동안 유지되는 값 설정
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    setCookie('hideNoticeModal', '1', { path: '/', expires: tomorrow })
    setIsVisible(false)
  }

  return (
    isVisible && (
      <ModalBackground id={'modal'}>
        <ModalContainer>
          <p>공지사항</p>
          <p>여기에 공지 내용을 작성하세요.</p>
          <div>
            <Button id={'oneDayCloseBtn'} onClick={handleDoNotShowToday}>오늘 하루 열지 않기</Button>
            <Button id={'closeBtn'} onClick={handleClose}>닫기</Button>
          </div>
        </ModalContainer>
      </ModalBackground>
    )
  )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
`

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`

export default NoticeModal
