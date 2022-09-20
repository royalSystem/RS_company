import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Link,
} from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import { navigation } from '../../data'

type DrawerProps = {
  isOpenDrawer: boolean
  onCloseDrawer: ()=>void
}

const DrawerCmp: FC<DrawerProps> = ({ isOpenDrawer, onCloseDrawer }) => {
  const onLinkPress = useCallback(() => {
    setTimeout(() => {
      onCloseDrawer()
    }, 200)
  }, [])

  return (
    <Drawer
      isOpen={isOpenDrawer}
      placement='left'
      onClose={onCloseDrawer}
    >
      <DrawerOverlay />
      <DrawerContent
        backgroundColor='secondaryBlack'
      >
        <DrawerCloseButton color='white' />
        <DrawerBody
          marginTop='100px'
        >
          <Flex
            flexDir='column'
          >
            {navigation.map((item) => {
              return (
                <Link
                  as='a'
                  onClick={onLinkPress}
                  key={item.id}
                  href={item.href}
                  textColor='white'
                  marginTop='20px'
                  fontSize='25px'
                  _active={{
                    textColor: 'greenLink',
                  }}
                  _hover={{
                    textDecoration: 'underline',
                  }}
                >{item.label}
                </Link>
              )
            })}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerCmp
