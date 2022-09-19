import { VStack } from '@chakra-ui/react'
import { useCallback } from 'react'
import SocialButton from '../SocialButton'

const socialButtonsArr = [
  { id: '1', label: 'Facebook', img: '../' },
  { id: '2', label: 'Instagram', img: '../' },
  { id: '3', label: 'Linked In', img: '../' },
]

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
