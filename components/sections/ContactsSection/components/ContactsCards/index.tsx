import { Flex, useBreakpointValue } from '@chakra-ui/react'
import AddressCard from './components/AddressCard'
import LinksCard from './components/LinksCard'
import OurServicesCard from './components/OurServicesCard'
import SocialsCard from './components/SocialsCard'

const ContactsCard = () => {
  const breakLgPoint = useBreakpointValue(
    {
      lg: true,
    },
  )
  
  return (
    <Flex
      as='div'
      marginTop={{ base: '100px ', xl: '100px', lg: '40px', md: '40px', sm: '40px' }}
      justifyContent='space-between'
      maxWidth='1170px'
      width='100%'
    >
      <SocialsCard />
      {breakLgPoint ? (
        <>
          <OurServicesCard />
          <LinksCard />
          <AddressCard />
        </>
      ) : null}
    </Flex>
  )
}

export default ContactsCard
