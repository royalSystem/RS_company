import { Flex } from '@chakra-ui/react'
import TitleSectionBlock from '../../TitleSectionBlock'
import ServicesCarousel from './components/ServicesCarousel'

const ServicesSection = () => {
  return (
    <Flex
      as='section'
      backgroundColor='black'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      id='services-section'
    >
      <Flex
        as='div'
        flexDirection='column'
        alignItems='center'
        marginTop={{ base: '170px ', xl: '130px', md: '40px', sm: '40px' }}
        maxWidth='600px'
      >
        <TitleSectionBlock
          linkText='Our Solutions'
          title='Services'
          contentText='Curabitur sed facilisis erat.
          Vestibulum pharetra eros eget fringilla porttitor. on
          Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo
          libero.'
        />
      </Flex>
      <ServicesCarousel />
    </Flex>
  )
}

export default ServicesSection
