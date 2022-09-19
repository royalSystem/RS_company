import { Box, Flex, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'

const ServicesCard = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      borderRadius='10px'
      width={{ base: '370px ', xl: '370px', lg: '280px', md: '300px', sm: '240px' }}
      height='339px'
      backgroundImage='linear-gradient(140deg, #17B384, #151515 , #17B384  )'
    >
      <Box
        width={{ base: '366px ', xl: '366px', lg: '274px', md: '296px', sm: '236px' }}
        height='335px'
        borderRadius='10px'
        bgGradient='linear(130deg, gray, black)'
      >
        <Flex
          paddingTop='30px'
          paddingX='35px'
          justifyContent='space-between'
        >
          <Image
            src='/uiDisign.svg'
            width='90.3px'
            height='84px'
            alt='Ui disign icon'
          />
          <Image
            src='/second.svg'
            width='69px'
            height='35px'
            alt='Ui disign icon'
          />
        </Flex>
        <Flex
          flexDirection='column'
          marginTop='35px'
          paddingX='30px'
        >
          <Text color='generalGray' fontSize='25px' fontWeight='medium'> UI/UX Design</Text>
          <Text color='generalGray' fontSize='16px' fontWeight='normal' marginTop='16px'>Integer purus odio,
            placerat nec rhoncu
            in, ullamcorper nec dolor.
          </Text>
        </Flex>
        <Flex
          paddingX='30px'
          mt='30px'
          width='100%'
          justifyContent='flex-end'
        >
          <Link href='./'>
            <Image
              src='/readMore.svg'
              width='96px'
              height='30px'
              alt='Read more icon'
            />
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ServicesCard
