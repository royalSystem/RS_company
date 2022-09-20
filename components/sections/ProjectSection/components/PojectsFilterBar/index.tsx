import { Button, HStack, Box } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import { filteButtonsArr } from '../../../../../data'
import FilterActiveButton from './components/FilterActiveButton'

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
            as='div'
            paddingTop='10px'
          >
            <Button
              as='button'
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
      as='div'
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
