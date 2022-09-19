import { Box } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import { useCallback } from 'react'
import TeamMemberCard from '../teamMemberCard'
import CustomCarousel from '../../../../CustomCarousel'

const teamMembersArr = [
  { id: '1', name: 'Petia Pupkin', profession: 'Project manager', photo: './', links: {} },
  { id: '2', name: 'Boris Kotikov', profession: 'Designer', photo: './', links: {} },
  { id: '3', name: 'Marta Kurochkina', profession: 'Backend developer', photo: './', links: {} },
  { id: '3', name: 'Vova Gubkin', profession: 'Frontend developer', photo: './', links: {} },
  { id: '3', name: 'Natasha Pipkina', profession: 'Coffee manager', photo: './', links: {} },
  { id: '3', name: 'Gleb Dudonin', profession: 'Art director', photo: './', links: {} },
]

const TeamList = () => {
  const renderCards = useCallback(() => {
    return teamMembersArr.map((item) => {
      return <TeamMemberCard key={item.id} teamMember={item} />
    })
  }, [teamMembersArr])

  return (
    <Box
      maxW={{ base: '1300px ', xl: '1300px', lg: '990px', md: '700px', sm: '300px' }}
      width='100%'
      justifyContent='center'
      alignItems='center'
      paddingBottom='40px'
    >
      <CustomCarousel
        containerClass='container-with-dots'
        itemsClass='carousel-item'
        items={teamMembersArr}
        renderItems={renderCards}
        isArrowsShow={false}
        isDotsShow
      />
    </Box>
  )
}

export default TeamList
