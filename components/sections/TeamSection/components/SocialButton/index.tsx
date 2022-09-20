import { Box } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import FacebookIcon from '../../../../../icons/teamIcons/FacebookIcon'
import InstagramIcon from '../../../../../icons/teamIcons/InstagramIcon'
import TwitterIcon from '../../../../../icons/teamIcons/TwitterIcon'
import WhatsAppIcon from '../../../../../icons/teamIcons/WhatsAppIcon'

type SocialButtonProps = {
  type: string
  isActive: boolean
  handleSocials: () => void
}

const SocialButton:FC<SocialButtonProps> = ({ type, isActive, handleSocials }) => {
  const onButtonPress = useCallback(() => {
    handleSocials()
  }, [handleSocials, type])

  const renderImage = useCallback(() => {
    switch (type) {
      case 'instagram':
        return <InstagramIcon isActiveButton={isActive} />
      case 'facebook':
        return <FacebookIcon isActiveButton={isActive}/>
      case 'twitter':
        return <TwitterIcon isActiveButton={isActive} />
      case 'whatsApp':
        return <WhatsAppIcon isActiveButton={isActive}/>
    }
  }, [type, isActive])
  return (
    <Box
      as='button'
      width='29px'
      height='29px'
      marginY='10px'
      borderRadius='50%'
      onClick={onButtonPress}
      _hover={{ backgroundColor: '#75DAB4' }}
    >
      {renderImage()}
    </Box>
  )
}
export default SocialButton
