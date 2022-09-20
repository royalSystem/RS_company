import { Flex, Text, Box } from '@chakra-ui/react'
import FacebookFooterIcon from '../../../../../../../icons/footerIcons/FacebookFooterIcon'
import InstagramFooterIcon from '../../../../../../../icons/footerIcons/InstagramFooterIcon'
import TwitterFooterIcon from '../../../../../../../icons/footerIcons/TwitterFooterIcon'

const SocialsCard = () => {
  return (
    <Flex
      as='div'
      flexDir='column'
    >
      <Text
        fontSize='25px'
        fontWeight='700'
        lineHeight='30px'
        color='white'
      >Royal Company Logo
      </Text>
      <Text
        fontSize='15px'
        fontWeight='300'
        lineHeight='30px'
        color='generalGray'
        maxWidth='270px'
        marginTop={{ base: '45px ', xl: '45px', lg: '20px', md: '20px', sm: '20px' }}
      >Integer purus odio, placerat nec ande
        rhoncus in, ullamcorper nec dolor. on
        aptent taciti sociosqu.
      </Text>
      <Flex
        flexDir='row'
        marginTop='45px'
        width='100%'
      >
        <Box paddingRight='35px'>
          <InstagramFooterIcon />
        </Box>
        <Box paddingRight='35px'>
          <FacebookFooterIcon />
        </Box>
        <Box paddingRight='35px'>
          <TwitterFooterIcon />
        </Box>
      </Flex>
    </Flex>
  )
}

export default SocialsCard
