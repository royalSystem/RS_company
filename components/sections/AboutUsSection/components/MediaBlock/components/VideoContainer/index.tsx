import { AspectRatio, Box } from '@chakra-ui/react'

const VideoContainer = () => {
  return (
    <Box
      as='div'
      height='294px'
      width='200px'
      borderWidth='10px'
      borderColor='black'
      borderRadius='20px'
      position='relative'
      bottom={{ base: '214px ', xl: '214px', lg: '215px', md: '159px', sm: '158px' }}
      left={{ base: '66% ', xl: '66%', lg: '65%', md: '65%', sm: '40%' }}
      zIndex='2'
    >
      <AspectRatio
        maxW='200px'
        width='100%'
        ratio={1 / 1.51}
      >
        <iframe
          title='Miami Nights 1984 - Accelerated'
          src='https://www.youtube.com/embed/6LIQUI1Od6U'
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  )
}

export default VideoContainer
