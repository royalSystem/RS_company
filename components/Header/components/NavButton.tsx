import { Link } from '@chakra-ui/react'
import { FC } from 'react'

type NavButtonType = {
  text: string
  href: string
}

const NavButton: FC<NavButtonType> = ({ text, href }) => {
  return (
    <Link
      as='a'
      href={href}
      fontWeight='medium'
      lineHeight='23.61px'
      fontSize='15px'
      color='generalGray'
      variant='ghost'
      _hover={{ backgroundColor: 'midleGray' }}
      _active={{ backgroundColor: 'lightGray' }}
    >
      {text}
    </Link>
  )
}

export default NavButton
