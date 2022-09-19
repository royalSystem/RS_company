import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { useCallback } from 'react'

const textButtonsArr = [
  { id: '1', label: 'About Us' },
  { id: '2', label: 'See Project' },
]

const TextBox = () => {
  const renderButtons = useCallback(() => {
    return textButtonsArr.map((item) =>
      <Button
        key={item.id}
        height='52px'
        backgroundColor='black'
        _hover={{
          backgroundColor: 'secondaryBlack',
          borderWidth: '1px',
        }}
        _active={{ backgroundColor: 'black' }}
      >
        <Text
          paddingX={{ base: '45px ', xl: '45px', md: '35px', sm: '25px' }}
          fontWeight='700'
          textColor='#E4E4E4'
          lineHeight='27.76'
        >{item.label}
        </Text>
      </Button>)
  }, [textButtonsArr])

  return (
    <Box
      paddingRight={{ base: '30px ', xl: '30px', md: '30px', sm: '5px' }}
      paddingTop={{ base: '200px ', xl: '30px', md: '30px', sm: '0px' }}
      paddingBottom={{ base: '0px ', xl: '0px', md: '0x', sm: '20px' }}
      justifyContent='flex-end'
      alignItems='flex-end'
      minH='600px'
    >
      <Box maxWidth='570px'>
        <Text
          fontWeight='bold'
          lineHeight='90px'
          textColor='generalGray'
          fontSize={{ base: '52px ', xl: '52px', md: '46px', sm: '46px' }}
        >Royal System
        </Text>
        <Text
          fontWeight='bold'
          lineHeight={{ base: '90px ', xl: '90px', md: '30px', sm: '30px' }}
          textColor='generalGray'
          fontSize={{ base: '59px ', xl: '59px', md: '40px', sm: '40px' }}
        >Company
        </Text>
        <Text
          noOfLines={[7]}
          fontWeight='normal'
          lineHeight='35px'
          textColor='generalGray'
          fontSize='16px'
          paddingTop='45px'
        >Curabitur sed facilisis erat.
          Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien,
          quis commodo libero. Donec nec dui luctus, pellentesque lacus sed, mollis leo.
        </Text>
      </Box>
      <HStack
        flexDirection='row'
        paddingTop={{ base: '70px ', xl: '20px', md: '20px', sm: '70px' }}
        spacing={{ base: '40px ', xl: '25px', md: '15px', sm: '10px' }}
      >
        {renderButtons()}
      </HStack>
    </Box>
  )
}

export default TextBox
