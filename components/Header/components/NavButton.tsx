import { Button } from '@chakra-ui/react'
import { FC } from 'react'

type NavButtonType = {
  text: string
}

const NavButton: FC<NavButtonType> = ({ text }) => {
  return (
    <Button
      fontWeight='medium'
      lineHeight='23.61px'
      fontSize='15px'
      color='generalGray'
      variant='ghost'
      _hover={{ backgroundColor: 'midleGray' }}
      _active={{ backgroundColor: 'lightGray' }}
    >
      {text}
    </Button>
  )
}

export default NavButton
