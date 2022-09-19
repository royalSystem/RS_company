import { Flex, Text, Link } from '@chakra-ui/react'
import { useCallback } from 'react'

export const linksArr = [
  { id: '1', label: 'About Us', path: './' },
  { id: '2', label: 'Services', path: './' },
  { id: '3', label: 'Project', path: './' },
  { id: '4', label: 'FAQ', path: './' },
]

const LinksCard = () => {
  const renderLinks = useCallback(() => {
    return linksArr.map((item) => {
      return (
        <Link
          key={item.id}
          href={item.path}
          textColor='generalGray'
          fontSize='16px'
          lineHeight='30px'
          fontWeight='500'
          marginTop='30px'
        >{item.label}
        </Link>
      )
    })
  }, [linksArr])

  return (
    <Flex
      flexDir='column'
    >
      <Text
        color='white'
        fontSize='25px'
        lineHeight='30px'
        fontWeight='700'
      >Quik links
      </Text>
      {renderLinks()}
    </Flex>
  )
}

export default LinksCard
