import { Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import { useCallback } from 'react'
import TitleSectionBlock from '../../TitleSectionBlock'
import FeaturesCard from './components/FeaturesCard'

const featuresArr = [
  { id: '1', type: 'Projects', text: 'Project Completed', value: '150' },
  { id: '2', type: 'Clients', text: 'Satisfied Clients', value: '250' },
  { id: '3', type: 'Teams', text: 'Expert Teams', value: '50' },
  { id: '4', type: 'Awards', text: 'Win Awards', value: '10' },
]

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
