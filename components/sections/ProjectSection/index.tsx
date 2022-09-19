import { Box, Flex } from '@chakra-ui/react'
import { useCallback, useMemo, useState } from 'react'
import TitleSectionBlock from '../../TitleSectionBlock'
import ProjectsFilterBar from './components/PojectsFilterBar'
import ProjectsList from './components/ProjectsList'

const projectsArr = [
  { id: 1, type: 'developing', category: 'Software', label: 'Desktop Mockup' },
  { id: 2, type: 'developing', category: 'Template', label: 'Creative Agency' },
  { id: 3, type: 'developing', category: 'App', label: 'Mobile Crypto Wallet', details: 'string' },
  { id: 4, type: 'ui', category: 'UI Kit', label: 'E-Shop Ecommerce' },
  { id: 5, type: 'web desig', category: 'Graphic', label: 'Art Deco Cocktails' },
  { id: 6, type: 'graphic design', category: '3D Design', label: 'Low poly Base mesh' },
]

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
    >
      <Flex
        marginTop={{ base: '120px ', xl: '120px', lg: '50px', md: '50px', sm: '20px' }}
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
