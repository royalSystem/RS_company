import { Box, Button } from '@chakra-ui/react'
import { FC } from 'react'

type SocialButtonType = {
  text: string
}

const SocialButton: FC<SocialButtonType> = ({ text }) => {
  return (
    <>
      <Button
        as='button'
        transform='rotate(270deg)'
        fontWeight='medium'
        lineHeight='25.18px'
        fontSize='16px'
        color='generalGray'
        variant='link'
      >
        {text}
      </Button>
      <Box
        borderRadius='50%'
        borderWidth='1.5px'
        borderStyle='dashed'
        width='12px'
        height='12px'
      />
    </>
  )
}

export default SocialButton
