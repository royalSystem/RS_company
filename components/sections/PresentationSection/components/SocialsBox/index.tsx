import { VStack } from '@chakra-ui/react'
import { useCallback } from 'react'
import { socialButtonsArr } from '../../../../../data'
import SocialButton from '../SocialButton'

const SocialsBox = () => {
  const renderButtons = useCallback(() => {
    return socialButtonsArr.map((item) => <SocialButton key={item.id} text={item.label} />)
  }, [])
  
  return (
    <VStack spacing='42px' height='342px' >
      {renderButtons()}
    </VStack>
  )
}

export default SocialsBox
