import { Button, Flex, HStack, Box, useBreakpointValue } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import { navigation } from '../../../data'
import BurgerMenu from './BurgerMenu'
import NavButton from './NavButton'

type NavbarProps = {
  onOpenDrawer:() => void
}

const Navbar: FC<NavbarProps> = ({ onOpenDrawer }) => {
  const renderNavButtons = useCallback(() => {
    return navigation.map((item) => {
      return (
        <Box
          as='li'
          key={item.id}
        >
          <NavButton text={item.label} href={item.href}/>
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
        as='button'
        textColor='generalGray'
        bgColor='black'
        _hover={{ backgroundColor: 'midleGray' }}
        _active={{ backgroundColor: 'lightGray' }}
        width='170px'
        minWidth='130px'
        fontWeight='700'
      >Get A Quote
      </Button>
    </>
  )

  const navElements = useBreakpointValue({
    base: navbarButtons,
    xl: navbarButtons,
    lg: <BurgerMenu onPress={onOpenDrawer} />,
    md: <BurgerMenu onPress={onOpenDrawer}/>,
    sm: <BurgerMenu onPress={onOpenDrawer}/>,

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
      paddingTop={{ base: '40px ', xl: '40px', lg: '20px', md: '20px', sm: '20px' }}
      paddingBottom='20px'
      paddingX={{ base: '100px ', xl: '100px', lg: '40px', md: '40px', sm: '40px' }}
      backgroundColor='navBarColor'
    >
      {navElements}
    </Flex>
  )
}
export default Navbar
