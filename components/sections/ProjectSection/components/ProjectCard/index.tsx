import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

type ProjectCardProps = {
  details?: string | undefined
  label:string
  category:string
}

const ProjectCard: FC<ProjectCardProps> = ({ details, label, category }) => {
  ProjectCard.defaultProps = {
    details: undefined,
  }

  return (
    <Box
      as='div'
    >
      <Box
        as='div'
        position='relative'
        zIndex='1'
        backgroundColor='lightGray'
        height={{ base: '350px ', xl: '350px', md: '350px', sm: '320px' }}
        width={{ base: '370px ', xl: '370px', md: '370px', sm: '340px' }}
        borderRadius='10px'
      />
      <Flex
        as='div'
        position='relative'
        zIndex='2'
        backgroundColor='cardBlack'
        borderRadius='5px'
        width={{ base: '320px ', xl: '320px', md: '320px', sm: '290px' }}
        height='82px'
        padding='20px'
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
        bottom='102px'
        left='25px'
      >
        <Text
          as='p'
          fontSize='15px'
          fontWeight='500'
          color='generalGray'
        >
          {category}
        </Text>
        <Text
          as='p'
          fontSize='22px'
          fontWeight='600'
          color='generalGray'
        >
          {label}
        </Text>
      </Flex>
    </Box>
  )
}

export default ProjectCard
