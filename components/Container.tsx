import { Flex } from '@chakra-ui/react'
import Header from './Header'

const Container = ({ children }) => {
  return (
    <Flex
      flexBasis='100%'
      flexGrow='1'
      flexShrink='0'
    >
      <Header/>
      {children}
    </Flex>
  )
}

export default Container
