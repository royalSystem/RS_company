import { Box, Collapse, useDisclosure, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { linksArr } from '../LinksCard'

const CollapsedMenu = () => {
  const { isOpen, onToggle } = useDisclosure()

  const renderLinks = useCallback(() => {
    return linksArr.map((item) => {
      return (
        <Box
          marginTop='10px'
          key={item.id}
          _hover={{ borderBottomWidth: '1px ' }}
        >{item.label}
        </Box>
      )
    })
  }, [linksArr])
  
  return (
    <>
      <Box
        as='button'
        onClick={onToggle}
        marginTop='100px'
      >
        <Text
          _hover={{
            color: 'greenLink',
          }}
          color='white'
          fontSize='25px'
          lineHeight='30px'
          fontWeight='700'
        >Quik Links
        </Text>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box
          height='200px'
          paddingY='20px'
          paddingLeft='20px'
          paddingRight='60px'
          color='white'
          mt='4'
          bg='black'
          rounded='md'
          shadow='md'
        >{renderLinks()}
        </Box>
      </Collapse>
    </>
  )
}

export default CollapsedMenu
