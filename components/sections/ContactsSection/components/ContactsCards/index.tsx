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
  const breakMdPoint = useBreakpointValue(
    {
      md: true,
    },
  )

  return (
    <Flex
      marginTop='100px'
      justifyContent='space-between'
      maxWidth='1170px'
      width='100%'
    >
      <SocialsCard />
      {breakLgPoint ? <OurServicesCard /> : null}
      {breakMdPoint ? <LinksCard /> : null}
      {breakLgPoint ? <AddressCard /> : null}
     
    </Flex>
  )
}

export default ContactsCard
