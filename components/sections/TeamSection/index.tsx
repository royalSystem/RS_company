import { Flex, VStack } from '@chakra-ui/react'
import TitleSectionBlock from '../../TitleSectionBlock'
import TeamList from './components/TeamList'

const TeamSection = () => {
  return (
    <VStack
      as='section'
      bgColor='black'
      alignItems='center'
      paddingBottom='60px'
    >
      <Flex
        as='div'
        flexDir='row'
        bgColor='black'
        justifyContent='center'
        marginTop={{ base: '120px ', xl: '120px', md: '30px', sm: '30px' }}
      >
        <TitleSectionBlock
          linkText='Our Team'
          title='Meet Our Team'
          contentText='Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on
          Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.'
        />
      </Flex>
      <TeamList />
    </VStack>
  )
}

export default TeamSection
