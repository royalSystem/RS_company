import { Link, VStack, Text, Box } from '@chakra-ui/react'
import CompanyCard from '../CompanyCard/intex'

const TextBlock = () => {
  return (
    <VStack
      as='div'
      alignItems='flex-start'
      maxWidth='570px'
      paddingRight='30px'
      backgroundColor='black'
    >
      <Link href='./' >
        <Text
          color='greenLink'
          textDecoration='underline'
          lineHeight='25.18px'
          fontSize='16px'
        >Get To Know
        </Text>
      </Link>
      <Text
        fontSize='40px'
        fontWeight='semiBold'
        color='generalGray'
        lineHeight='62.96px'
        marginTop='15px'
      >About Us
      </Text>
      <Text
        fontSize='30px'
        fontWeight='medium'
        color='generalGray'
        lineHeight='47px'
        marginTop='40px'
      >We do design, code & develop Software finally launch.
      </Text>
      <Text
        fontSize='15px'
        fontWeight='normal'
        color='generalGray'
        lineHeight='30px'
        marginTop='45px'
      >Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class online
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos onlye
        himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the
        Donec lacinia placerat felis non aliquam.
      </Text>
      <Box
        marginTop='50px'
        paddingLeft='20px'
      >
        <CompanyCard />
      </Box>
    </VStack>
  )
}

export default TextBlock
