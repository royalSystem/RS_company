import { Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import { useCallback } from 'react'
import { featuresArr } from '../../../data'
import TitleSectionBlock from '../../TitleSectionBlock'
import FeaturesCard from './components/FeaturesCard'

const FeaturesSection = () => {
  const isLastBPoint = useBreakpointValue(
    {
      md: true,
    },
  )

  const renderCards = useCallback(() => {
    return featuresArr.map((item) => {
      return (
        <FeaturesCard
          key={item.id}
          type={item.type}
          text={item.text}
          value={item.value}
        />
      )
    })
  }, [featuresArr])

  return (
    <Box
      as='section'
      backgroundColor='secondaryBlack'
      justifyContent='center'
      paddingBottom={{ base: '87px ', xl: '87px', lg: '47px', md: '47px', sm: '27px' }}
    >
      <Flex
        as='div'
        marginTop={{ base: '78px ', xl: '78px', lg: '58px', md: '58px', sm: '28px' }}
        flexDirection='column'
        alignItems='center'
      >
        <TitleSectionBlock
          linkText='Care Study'
          title='Features'
          contentText='Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on
          Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.'
        />
        <Flex
          as='div'
          flexDir={isLastBPoint ? 'row' : 'column'}
          marginTop={isLastBPoint ? '60px' : '10px'}
          maxWidth='1200px'
          width='100%'
        >
          {renderCards()}
        </Flex>
      </Flex>
    </Box>
  )
}

export default FeaturesSection
