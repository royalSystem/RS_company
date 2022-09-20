import { VStack, Text, HStack, Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import StarIcon from '../../../../icons/reviewsIcons/StarIcon'
import VectorIcon from '../../../../icons/reviewsIcons/VectorIcon'

type ReviewCardProps = {
  name: string
  profession:string
  raiting:number
}

const ReviewCard: FC<ReviewCardProps> = ({ raiting, name, profession }) => {
  const isLastBPoint = useBreakpointValue(
    {
      md: true,
    },
  )

  const renderStars = useCallback(() => {
    const raitArr = [1, 2, 3, 4, 5]
    return raitArr.map((item, index) => {
      return raiting - 1 < index
        ? <StarIcon key={item} color='#fff9e6' />
        : <StarIcon key={item} color='#FFC107' />
    })
  }, [raiting])

  return (
    <VStack
      as='div'
      maxWidth={{ base: '571px ', xl: '571px', lg: '500px', md: '400px', sm: '400px' }}
      width='100%'
      bgColor='#0D0D0F'
      marginTop='60px'
      paddingX='30px'
      alignItems='flex-start'
      borderRadius='10px'
      paddingBottom='20px'
    >
      <Flex
        as='div'
        flexDirection={isLastBPoint ? 'column' : 'row'}
        width='100%'
        marginTop={{ base: '45px ', xl: '45px', md: '20px', sm: '20px' }}
        justifyContent='space-between'
      >
        <Box
          as='div'
        >
          <Text
            as='p'
            fontSize={{ base: '25px ', xl: '25px', md: '20px', sm: '17px' }}
            fontWeight='600'
            lineHeight='30px'
            color='#E4E4E4'
          >{name}
          </Text>
          <Text
            as='p'
            fontSize={{ base: '17px ', xl: '17px', md: '16px', sm: '14px' }}
            fontWeight='400'
            lineHeight='30px'
            color='#5F6062'
            alignSelf='flex-end'
          >{profession}
          </Text>
        </Box>
        <HStack
          as='div'
        >
          {renderStars()}
        </HStack>
      </Flex>
      <Text
        as='p'
        fontSize={{ base: '15px ', xl: '15px', md: '15px', sm: '12px' }}
        fontWeight='300'
        lineHeight={{ base: '30px ', xl: '30px', md: '25px', sm: '17px' }}
        color='#E4E4E4'
      >
        Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. and
        aptent taciti sociosqu ad litora torquent per conubia nostra, per sonica
        himenaeos. Praesent nec neque at dolor venenatis consectetur europ
        Donec lacinia placerat felis non aliquam.
      </Text>
      <HStack
        as='div'
        paddingTop={{ base: '40px ', xl: '40px', md: '40px', sm: '20px' }}
        width='100%'
        justifyContent='space-between'
      >
        <Box
          as='div'
          bgColor='lightGray'
          borderRadius='50%'
          width='90px'
          height='90px'
        />
        {isLastBPoint ? (
          <HStack
            as='div'
            paddingRight='27px'
          >
            <VectorIcon />
            <VectorIcon />
          </HStack>
        )
          : null
      }
       
      </HStack>
    </VStack>
  )
}

export default ReviewCard
