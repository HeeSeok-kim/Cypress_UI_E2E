import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface HeaderProps {
  text: ReactNode
}

const Header = ({ text }: HeaderProps) => {
  return <HeaderTag>{text}</HeaderTag>
}

const HeaderTag = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 20px;
  font-weight: bold;
`

export default Header
