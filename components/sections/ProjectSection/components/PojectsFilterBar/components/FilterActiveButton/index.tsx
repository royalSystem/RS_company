import { Box, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

type FilterActiveButtonProps = {
  text: string
}

const FilterActiveButton: FC<FilterActiveButtonProps> = ({ text }) => {
  return (
    <Box
      as='button'
      height='45px'
      padding='1px'
      bg='linear-gradient(150deg, #75DAB4, black , black, #75DAB4  )'
      _hover={{ background: 'linear-gradient(150deg, #75DAB4,  #75DAB4 ,black )' }}
      borderRadius='10px'
      justifyContent='center'
      alignItems='center'
    >
      <VStack
        height='43'
        paddingX='30px'
        borderRadius='10px'
        alignItems='center'
        justifyContent='center'
        backgroundColor='black'
        textColor='generalGray'
        fontSize='16px'
        fontWeight='bold'
      >
        <Text
          alignSelf='baseline'
        >{text}
        </Text>
      </VStack>
    </Box>
  )
}

export default FilterActiveButton
