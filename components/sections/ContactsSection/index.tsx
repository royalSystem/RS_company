import { Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import ContactsCard from './components/ContactsCards'
import CollapsedMenu from './components/ContactsCards/components/CollapsedMenu'
import CopyrightBlock from './components/CopyrightBlock'

const ContactsSection = () => {
  const breakLgPoint = useBreakpointValue(
    {
      lg: true,
    },
  )

  return (
    <Flex
      as='footer'
      width='100%'
      bgColor='secondaryBlack'
      justifyContent='center'
      paddingX='40px'
    >
      <Flex
        maxWidth='1170px'
        width='100%'
        as='footer'
        alignItems='center'
        flexDir='column'
        paddingBottom='31px'
      >
        {!breakLgPoint
          ? (
            <Box
              justifySelf='flex-start'
              alignSelf='flex-start'
            >
              <CollapsedMenu />
            </Box>
          )
          : null}
       
        <ContactsCard />
        <CopyrightBlock />
      </Flex>
    </Flex>
  )
}

export default ContactsSection
