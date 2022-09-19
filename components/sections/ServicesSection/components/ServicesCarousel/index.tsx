import { Flex, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useCallback } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import CustomCarousel from '../../../../CustomCarousel'
import ServicesCard from '../ServicesCard'

const servicesArr = [1, 2, 3, 4, 5]

const ServicesCarousel: NextPage = () => {
  const renderCards = useCallback(() => {
    return servicesArr.map((item) => {
      return <ServicesCard key={item} />
    })
  }, [servicesArr])

  return (
    <Flex
      marginTop='60px'
      width='100%'
      justifyContent='center'
      alignItems='center'
      paddingX='60px'
    >
      <Box
        maxW='1295px'
        width='100%'
        paddingTop='40px'
      >
        <CustomCarousel
          isDotsShow={false}
          isArrowsShow
          items={servicesArr}
          renderItems={renderCards}
          containerClass='.carousel-container'
          itemsClass='carousel-item'
        />
      </Box>
    </Flex>
  )
}

export default ServicesCarousel
