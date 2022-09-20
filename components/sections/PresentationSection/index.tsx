import { Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import ImageBox from './components/ImageBox'
import SocialsBox from './components/SocialsBox'
import TextBox from './components/TextBox'

const PresentationSection = () => {
  const isLastBPoint = useBreakpointValue(
    {
      md: true,
    },
  )

  return (
    <Flex
      as='section'
      backgroundColor='secondaryBlack'
      flexDir='row'
      justifyContent='flex-end'
      width='100%'
      id='presentation-section'
    >
      <Box
        marginTop={{ base: '400px ', xl: '290px', md: '290px', sm: '200px' }}
        minW='40px'
      >
        <SocialsBox />
      </Box>
      <Flex
        width='100%'
        paddingTop='136px'
        justifyContent='flex-end'
      >
        <TextBox />
        {isLastBPoint ? <ImageBox /> : null}
      </Flex>
    </Flex>
  )
}

export default PresentationSection
