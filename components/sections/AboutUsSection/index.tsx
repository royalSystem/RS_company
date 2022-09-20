import { Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import MediaBlock from './components/MediaBlock'
import TextBlock from './components/TextBlock'

const AboutUsSection = () => {
  const isLastBPoint = useBreakpointValue(
    {
      lg: true,
    },
  )
  
  return (
    <Box
      as='section'
      bgColor='black'
      width='100%'
      paddingLeft='30px'
      id='aboutUs-section'
    >
      <Flex
        width='100%'
        flexDir={!isLastBPoint ? 'column' : 'row'}
        marginTop='105px'
        justifyContent='center'
        alignItems='center'
      >
        <TextBlock />
        <MediaBlock />
      </Flex>
    </Box>
  )
}

export default AboutUsSection
