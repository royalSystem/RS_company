import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'

const CopyrightBlock = () => {
  const isLastBPoint = useBreakpointValue(
    {
      md: true,
    },
  )
  
  return (
    <Flex
      as='div'
      maxWidth='1170px'
      width='100%'
      borderTopWidth='1px'
      borderColor='maxGray'
      marginTop='100px'
      justifyContent='space-between'
      paddingTop='33px'
      flexDirection={!isLastBPoint ? 'column' : 'row'}
    >
      <Text
        as='p'
        fontSize='14px'
        fontWeight='700'
        lineHeight='22.04px'
        color='generalGray'
      >Copyright 2022 Royal Soft Company | Design By Royal Soft Company
      </Text>
      <Text
        as='p'
        fontSize='14px'
        fontWeight='500'
        lineHeight='22.04px'
        color='white'
      >Privacy Policy  |  Terms of Use
      </Text>
      
    </Flex>
  )
}

export default CopyrightBlock
