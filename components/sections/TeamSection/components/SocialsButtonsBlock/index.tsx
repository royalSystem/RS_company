import { Flex } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import SocialButton from '../SocialButton'

const buttons = [
  { id: '1', type: 'instagram' },
  { id: '2', type: 'facebook' },
  { id: '3', type: 'twitter' },
  { id: '4', type: 'whatsApp' },
]

type SocialButtonsBlockProps = {
  activeButton: string
  handleSocials: (type:string) => void
  links: object | undefined
  opacity: number
}

const SocialsButtonsBlock: FC<SocialButtonsBlockProps> = ({ activeButton, handleSocials, links, opacity }) => {
  const renderButtons = useCallback(() => {
    return buttons.map((item) => {
      return (
        <SocialButton
          key={item.id}
          type={item.type}
          isActive={activeButton === item.type}
          handleSocials={() => handleSocials(item.type)}
        />
      )
    })
  }, [buttons, activeButton, handleSocials])

  return (
    <Flex
      width='40px'
      backgroundColor='gray'
      position='relative'
      zIndex='2'
      bottom='270px'
      borderTopLeftRadius='10px'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      paddingBottom='74px'
      opacity={opacity}
    >
      {renderButtons()}
    </Flex>
  )
}

export default SocialsButtonsBlock
