import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

// 스타일드 컴포넌트 정의
const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Layout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}

export default Layout
