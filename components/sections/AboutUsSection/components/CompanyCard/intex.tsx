import { Flex, Box, HStack, Image, Text } from '@chakra-ui/react'

const CompanyCard = () => {
  return (
    <Flex
      width='98%'
      height='98%'
      borderRadius='10px'
      backgroundImage='linear-gradient(150deg, #75DAB4, black , black, #75DAB4  )'
      justifyContent='center'
      alignItems='center'
      marginTop='50px'
      padding='1px'
    >
      <Box
        backgroundColor='nightBlue'
        width='100%'
        height='100%'
        borderRadius='10px'
        paddingX='50px'
        paddingTop='20px'
      >
        <HStack
          justifyContent='space-between'
          alignItems='center'
        >
          <Image width='25px' height='25px' src='./logo.svg' alt='logo company'/>
          <Text
            color='generalGray'
            fontWeight='semiBold'
            lineHeight='37px'
            fontSize='26px'
          >#1
          </Text>
        </HStack>
        <Text
          color='generalGray'
          fontWeight='medium'
          lineHeight='38px'
          fontSize='24px'
          marginTop='21px'
        >Best Creative IT Agency And Solutions
        </Text>
        <Text
          color='greenLink'
          fontWeight='bold'
          lineHeight='38px'
          fontSize='26px'
        >Since 2005.
        </Text>
      </Box>
    </Flex>
  )
}

export default CompanyCard
