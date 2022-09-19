import { Box, Flex } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import ProjectCard from '../ProjectCard'

type Project = {
  id:number
  type:string
  category:string
  label:string
  details?: string
}

type ProjectsListProps = {
  projects: Array<Project>
}

const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
  const renderCards = useCallback(() => {
    return projects.map((item) => {
      return (
        <Box
          key={item.id}
          paddingX='20px'
        >
          <ProjectCard
            details={item.details}
            category={item.category}
            label={item.label}
          />
        </Box>
      )
    })
  }, [projects])
  
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        as='div'
        marginTop='40px'
        width='100%'
        maxWidth='1500px'
        marginX='auto'
        justifyContent='center'
      >
        <Flex
          justifyContent='center'
          flexWrap='wrap'
          alignItems='center'
        >
          {renderCards()}
        </Flex>
      </Box>
    </Box>
  )
}

export default ProjectsList
