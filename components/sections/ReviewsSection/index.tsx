import { Box, Flex } from '@chakra-ui/react'
import TitleSectionBlock from '../../TitleSectionBlock'
import ReviewsCarousel from './ReviewsCarousel'

const ReviewsSection = () => {
  return (
    <Box
      as='section'
      backgroundColor='secondaryBlack'
      justifyContent='center'
    >
      <Flex
        as='div'
        marginTop='48px'
        flexDirection='column'
        alignItems='center'
      >
        <TitleSectionBlock
          linkText='Testimonial'
          title='Client Say About Us'
          contentText='Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on
          Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.'
        />
      </Flex>
      <ReviewsCarousel />
    </Box>
  )
}

export default ReviewsSection
