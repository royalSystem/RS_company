import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import AwardsIcon from '../../../../../icons/featuresIcons/AwardsIcon'
import PeopleIcon from '../../../../../icons/featuresIcons/PeopleIcon'
import ProjectCompletedIcon from '../../../../../icons/featuresIcons/ProjectCompletedIcon'
import SuccessfulIcon from '../../../../../icons/featuresIcons/SuccessfulIcon'

type FeaturesCardProps = {
  type: string
  text: string
  value: string
}

const FeaturesCard: FC<FeaturesCardProps> = ({ type, text, value }) => {
  const renderIcon = useMemo(() => {
    switch (type) {
      case 'Projects':
        return <ProjectCompletedIcon />
      case 'Clients':
        return <PeopleIcon />
      case 'Teams':
        return <SuccessfulIcon />
      case 'Awards':
        return <AwardsIcon />
    }
  }, [type])
  
  return (
    <VStack
      width={{ base: '267px ', xl: '267px', lg: '220px', md: '180px', sm: '180px' }}
      height='270px'
      backgroundColor='black'
      borderRadius='10px'
      margin='auto'
      marginTop='10px'
      paddingX='10px'
    >
      <Box
        marginTop='49px'
      >
        {renderIcon}
      </Box>
      <HStack >
        <Text
          fontSize='35px'
          fontWeight='bold'
          color='generalGray'
        >{value}
        </Text>
        <Text
          fontSize='35px'
          fontWeight='bold'
          color='generalGray'
          position='relative'
          bottom='6px'
        >+
        </Text>
      </HStack>
      <Text
        fontSize='20px'
        fontWeight='medium'
        color='generalGray'
      >
        {text}
      </Text>
    </VStack>
  )
}

export default FeaturesCard
