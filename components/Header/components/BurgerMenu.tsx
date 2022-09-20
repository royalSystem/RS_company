import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import MenuIcon from '../../../icons/MenuIcon'

type BurgerMenuProps = {
  onPress: ()=>void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ onPress }) => {
  return (
    <Box
      as='button'
      marginLeft='auto'
      onClick={onPress}
    >
      <MenuIcon />
    </Box>
  )
}
export default BurgerMenu
