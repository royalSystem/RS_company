import { Button, Flex, HStack, Box, useBreakpointValue } from '@chakra-ui/react'

import { useCallback } from 'react'
import MenuIcon from '../../../icons/MenuIcon'
import NavButton from './NavButton'

const navigation = [
  { id: '0', label: 'Home' },
  { id: '1', label: 'About as' },
  { id: '2', label: 'Services' },
  { id: '3', label: 'Project' },
  { id: '4', label: 'Blogs' },
  { id: '5', label: 'Pages' },
  { id: '6', label: 'Contact Us' },

]

const Navbar = () => {
  const renderNavButtons = useCallback(() => {
    return navigation.map((item) => {
      return (
        <Box
          as='li'
          key={item.id}
        >
          <NavButton text={item.label}/>
        </Box>
      )
    })
  }, [navigation])

  const navbarButtons = (
    <>
      <HStack
        as='ul'
        spacing={{ base: '40px', xl: '20px' }}
        listStyleType='none'
      >
        {renderNavButtons()}
      </HStack>
      <Button
        textColor='generalGray'
        bgColor='black'
        _hover={{ backgroundColor: 'midleGray' }}
        _active={{ backgroundColor: 'lightGray' }}
        width='170px'
        minWidth='130px'
        textStyle={{
          fontWeight: 'semiBold',
        }}
      >Get A Quote
      </Button>
    </>
  )

  const navElements = useBreakpointValue({
    base: navbarButtons,
    xl: navbarButtons,
    lg: (
      <Box
        marginLeft='auto'
      >
        <MenuIcon />
      </Box>
    ),
    md: (
      <Box
        marginLeft='auto'
      >
        <MenuIcon />
      </Box>
    ),
    sm:
    (
      <Box
        as='button'
        marginLeft='auto'
      >
        <MenuIcon />
      </Box>
    ),

  })

  return (
    <Flex
      as='nav'
      position='fixed'
      zIndex='2'
      top='0'
      width='100%'
      justifyContent='space-between'
      alignItems='center'
      paddingTop='40px'
      paddingBottom='20px'
      paddingX='100px'
      backgroundColor='rgba(25, 26, 28, 0.6)'
    >
      {navElements}
    </Flex>
  )
}
export default Navbar
