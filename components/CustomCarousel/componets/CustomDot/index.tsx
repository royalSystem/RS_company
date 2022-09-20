import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const CustomDot = ({ onClick, items, ...rest }) => {
  const {
    index,
    active,
  } = rest

  return (
    <Flex
      className={active ? 'active' : 'inactive'}
      width='15px'
      borderWidth='2px'
      height='15px'
      margin='5px'
      borderRadius='50%'
      backgroundColor='black'
      borderColor='greenLink'
      onClick={() => onClick()}
      justifyContent='center'
      alignItems='center'
    >
      <Box
        width='5px'
        height='5px'
        borderRadius='50%'
        backgroundColor={active ? 'greenLink' : 'black'}
      />
    </Flex>
  )
}

export default CustomDot
