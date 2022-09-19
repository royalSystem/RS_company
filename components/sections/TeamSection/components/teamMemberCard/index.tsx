import { Box, Flex, Text } from '@chakra-ui/react'
import { FC, useCallback, useState } from 'react'
import SocialsButtonsBlock from '../SocialsButtonsBlock'

type TeamMemberCardProps = {
  teamMember: {
    id: string
    name: string
    profession: string
    links: object | undefined
    photo: string
  }
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ teamMember }) => {
  const [activeButton, setActiveButton] = useState('')
  const [showSideBar, setShowSideBar] = useState(false)
 
  const socialButtonHandler = useCallback((type:string) => {
    setActiveButton(type)
  }, [])

  return (
    <Flex
      width={{ base: '370px ', xl: '370px', md: '270px', sm: '270px' }}
      height={{ base: '400px ', xl: '400px', md: '300px', sm: '300px' }}
      marginTop={{ base: '60px ', xl: '60px', md: '20px', sm: '20px' }}
      flexDir='column'
      marginRight='30px'
      onMouseOver={() => setShowSideBar(true)}
      onMouseOut={() => setShowSideBar(false)}
    >
      <Box>
        <Box
          borderTopRadius='10px'
          backgroundColor=' lightGray'
          width={{ base: '370px ', xl: '370px', md: '270px', sm: '270px' }}
          height='270px'
          position='relative'
          zIndex='1'
        />
      </Box>
      <SocialsButtonsBlock
        activeButton={activeButton}
        handleSocials={socialButtonHandler}
        links={teamMember.links}
        opacity={showSideBar ? 1 : 0}
      />
      <Flex
        backgroundColor='#191A1C'
        width={{ base: '370px ', xl: '370px', md: '270px', sm: '270px' }}
        height={{ base: '134px ', xl: '134px', md: '60px', sm: '60px' }}
        paddingY='42px'
        alignItems='center'
        justifyContent='center'
        flexDir='column'
        borderBottomRadius='10px'
        position='relative'
        zIndex='3'
        bottom='270px'
      >
        <Text
          fontSize={{ base: '25px ', xl: '25px', md: '20px', sm: '20px' }}
          fontWeight='600'
          lineHeight='30px'
          color='generalGray'
        >{teamMember.name}
        </Text>
        <Text
          fontSize={{ base: '17px ', xl: '17px', md: '14px', sm: '14px' }}
          fontWeight='400'
          lineHeight='30px'
          color='#5F6062'
        >{teamMember.profession}
        </Text>
      </Flex>
    </Flex>
  )
}

export default TeamMemberCard
