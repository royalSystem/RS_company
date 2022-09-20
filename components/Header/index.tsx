import { FC } from 'react'
import Navbar from './components/Navbar'

type HeaderProps = {
  onMenuHandler: () => void
}

const Header: FC<HeaderProps> = ({ onMenuHandler }) => {
  return (
    <header >
      <Navbar onOpenDrawer={onMenuHandler} />
    </header>
  )
}

export default Header
