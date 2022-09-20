import { Box, Flex } from '@chakra-ui/react'
import { useCallback, useMemo, useState } from 'react'
import { projectsArr } from '../../../data'
import TitleSectionBlock from '../../TitleSectionBlock'
import ProjectsFilterBar from './components/PojectsFilterBar'
import ProjectsList from './components/ProjectsList'

const ProjectSection = () => {
  const [filter, setFilter] = useState('all')

  const filterProjectArray = useMemo(() => {
    return filter === 'all' ? projectsArr : projectsArr.filter((item) => item.type === filter)
  }, [projectsArr, filter])

  const onFilterPressHandler = useCallback((type: string) => {
    setFilter(type)
  }, [filter])
  
  return (
    <Box
      as='section'
      backgroundColor='black'
      id='project-section'
    >
      <Flex
        as='div'
        marginTop={{ base: '100px ', xl: '100px', lg: '50px', md: '50px', sm: '20px' }}
        flexDirection='column'
        alignItems='center'
      >
        <TitleSectionBlock
          linkText='Case Study'
          title='Project'
          contentText='Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on
          Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.'
        />
        <ProjectsFilterBar
          filter={filter}
          onFilterClick={onFilterPressHandler}
        />
        <ProjectsList projects={filterProjectArray} />
      </Flex>
    </Box>
  )
}

export default ProjectSection
