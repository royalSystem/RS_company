import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { useCallback } from 'react'

const sevicesArr = [
  { id: '1', label: 'Strategy & Research' },
  { id: '2', label: 'Web Development' },
  { id: '3', label: 'Web Solution' },
  { id: '4', label: 'Digital Merketing' },
  { id: '5', label: 'App Design' },
  { id: '6', label: 'App Development' },
]

const OurServicesCard = () => {
  const renderServices = useCallback(() => {
    return sevicesArr.map((item) => {
      return item.label === 'Web Development'
        ? (
          <HStack
            as='div'
            marginTop='31px'
          >
            <Box
              width='10px'
              height='10px'
              borderRadius='50%'
              backgroundColor='greenLink'
            />
            <Text
              color='greenLink'
              fontSize='16px'
              lineHeight='30px'
              fontWeight='500'
            >Web Development
            </Text>
          </HStack>
        )
        : (
          <Text
            color='generalGray'
            fontSize='16px'
            lineHeight='30px'
            fontWeight='500'
            marginTop='30px'
          >{item.label}
          </Text>
        )
    })
  }, [sevicesArr])

  return (
    <Flex
      flexDir='column'
    >
      <Text
        color='white'
        fontSize='25px'
        lineHeight='30px'
        fontWeight='700'
      >Our Services
      </Text>
      {renderServices()}
    </Flex>
  )
}

export default OurServicesCard
