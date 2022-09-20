import { Flex, Text, Link } from '@chakra-ui/react'
import { FC } from 'react'

type TitleSectionBlockProps = {
  linkText: string
  title: string
  contentText: string
}

const TitleSectionBlock: FC<TitleSectionBlockProps> = ({ linkText, title, contentText }) => {
  return (
    <Flex
      as='div'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      maxWidth='570px'
      width='100%'
      paddingX='10px'
    >
      <Link
        as='a'
        href='./'
      >
        <Text
          color='greenLink'
          textDecoration='underline'
          lineHeight='25.18px'
          fontSize='16px'
        >{linkText}
        </Text>
      </Link>
      <Text
        as='h2'
        marginTop='10px'
        textAlign='center'
        color='generalGray'
        lineHeight={{ base: '62.96px ', xl: '62.96px', md: '36px', sm: '36px' }}
        fontSize={{ base: '40px ', xl: '40px', md: '36px', sm: '36px' }}
      >{title}
      </Text>
      <Text
        as='p'
        color='generalGray'
        textAlign='center'
        paddingTop='30px'
        lineHeight='30px'
        fontSize='15px'
      >{contentText}
      </Text>
    </Flex>
  )
}

export default TitleSectionBlock
