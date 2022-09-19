import { Flex, Box } from '@chakra-ui/react'
import { useCallback } from 'react'
import CustomCarousel from '../../../CustomCarousel'
import ReviewCard from '../ReviewCard'

const reviewsArr = [
  { id: '1',
    userName: 'Bob Dilan',
    profession: 'Executive Chairman',
    reviewText: 'Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor',
    photo: './',
    raiting: 1,
  },
  { id: '2',
    userName: 'Ron Benson',
    profession: 'Executive Chairman',
    reviewText: 'Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor',
    photo: './',
    raiting: 3,
  },
  { id: '3',
    userName: 'Jim Wilson',
    profession: 'Executive Chairman',
    reviewText: 'Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor',
    photo: './',
    raiting: 5,
  },
  { id: '4',
    userName: 'Sam Maloun',
    profession: 'Executive Chairman',
    reviewText: 'Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor',
    photo: './',
    raiting: 5,
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  bigDesktop: {
    breakpoint: { max: 3000, min: 1700 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1000 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1000, min: 750 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
  },
}

const ReviewsCarousel = () => {
  const renderCards = useCallback(() => {
    return reviewsArr.map((item) => {
      return (
        <ReviewCard
          key={item.id}
          name={item.userName}
          profession={item.profession}
          raiting={item.raiting}
        />
      )
    })
  }, [reviewsArr])

  return (
    <Flex
      width='100%'
      justifyContent='center'
      alignItems='center'
      paddingLeft='10px'
     
    >
      <Box
        maxW='1900px'
        width='100%'
        paddingRight='2px'
      >
        <CustomCarousel
          isDotsShow={false}
          isArrowsShow
          items={reviewsArr}
          renderItems={renderCards}
          containerClass='carousel-container'
          itemsClass='carousel-item'
          customResponsiveProps={responsive}
        />
      </Box>
    </Flex>
  )
}

export default ReviewsCarousel
