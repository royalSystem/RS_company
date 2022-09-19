import { Button, HStack, Box } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import FilterActiveButton from './components/FilterActiveButton'

const filteButtonsArr = [
  { id: '1', type: 'all', text: 'All' },
  { id: '2', type: 'ui', text: 'UI/UX' },
  { id: '3', type: 'web desig', text: 'Web Design' },
  { id: '4', type: 'developing', text: 'Developing' },
  { id: '5', type: 'graphic design', text: 'Graphic Design' },
]

type ProjectsFilterBarProps = {
  filter: string
  onFilterClick: (value:string) => void
}

const ProjectsFilterBar: FC<ProjectsFilterBarProps> = ({ filter, onFilterClick }) => {
  const onFilterPress = useCallback((value: string) => {
    onFilterClick(value)
  }, [filter, onFilterClick])

  const renderButtons = useCallback(() => {
    return filteButtonsArr.map((item) => {
      return item.type === filter ? (
        <FilterActiveButton text={item.text} />
      )
        : (
          <Box
            paddingTop='10px'
          >
            <Button
              key={item.id}
              backgroundColor='secondaryBlack'
              _hover={{ backgroundColor: 'midleGray' }}
              textColor='generalGray'
              fontSize='16px'
              fontWeight='bold'
              onClick={() => onFilterPress(item.type)}
            >{item.text}
            </Button>
          </Box>
        )
    })
  }, [filteButtonsArr, filter])

  return (
    <HStack
      spacing='25px'
      marginTop='60px'
      flexWrap='wrap'
      justifyContent='center'
    >
      {renderButtons()}
    </HStack>
  )
}

export default ProjectsFilterBar
