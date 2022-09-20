import { Box } from '@chakra-ui/react'

const ImageContainer = () => {
  return (
    <Box
      as='div'
      position='relative'
      zIndex='1'
      backgroundColor='lightGray'
      height='400px'
      width='100%'
      maxWidth='570px'
      borderTopLeftRadius='40px'
      borderTopRightRadius='10px'
    />
  )
}

export default ImageContainer
