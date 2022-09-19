import { Flex, Box, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import LocationIcon from '../../../../../../../icons/footerIcons/LocationIcon'
import MailIcon from '../../../../../../../icons/footerIcons/MailIcon'
import PhoneIcon from '../../../../../../../icons/footerIcons/PhnoneIcon'

const contactsArr = [
  { id: '1', type: 'number', value1: '+880 176 1111 45', value2: '+880 176 1111 45s' },
  { id: '2', type: 'mail', value1: 'info@example.com', value2: 'info@support.com' },
  { id: '3', type: 'address', value1: 'info@example.com', value2: 'info@support.com' },
]
const AddressCard = () => {
  const returnIcon = (type:string) => {
    switch (type) {
      case 'number':
        return <PhoneIcon />
      case 'mail':
        return <MailIcon />
      case 'address':
        return <LocationIcon />
    }
  }

  const renderCards = useCallback(() => {
    return contactsArr.map((item, index) => {
      return (
        <Flex
          key={item.id}
          alignItems='center'
          marginTop={index === Number(item.id) ? '34px' : '40px'}
        >
          {returnIcon(item.type)}
          <Flex
            flexDir='column'
            alignItems='center'
          >
            <Box
              paddingLeft='9px'
            >
              <Text
                color='white'
                fontSize='18px'
                fontWeight='500'
                lineHeight='28.33px'
              >{item.value1}
              </Text>
              <Text
                color='white'
                fontSize='18px'
                fontWeight='500'
                lineHeight='28.33px'
              >{item.value2}
              </Text>
            </Box>
          </Flex>
        </Flex>
      )
    })
  }, [])

  return (
    <Flex
      as='div'
      flexDir='column'
    >
      <Text
        color='white'
        fontSize='25px'
        lineHeight='30px'
        fontWeight='700'
      >Contacts
      </Text>
      {renderCards()}
    </Flex>
  )
}

export default AddressCard
