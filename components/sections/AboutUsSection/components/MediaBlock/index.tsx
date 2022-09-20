import { Box, useBreakpointValue } from '@chakra-ui/react'
import ImageContainer from './components/ImageContainer'
import VideoContainer from './components/VideoContainer'

const MediaBlock = () => {
  const isLastBPoint = useBreakpointValue(
    {
      lg: true,
    },
  )

  return (
    <Box
      as='div'
      maxW='600px'
      width='100%'
      paddingTop={isLastBPoint ? '0px ' : '40px'}
    >
      <ImageContainer />
      <VideoContainer />
    </Box>
  )
}

export default MediaBlock
