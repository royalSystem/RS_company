import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Box } from '@chakra-ui/react'
import PresentationSection from '../components/sections/PresentationSection'
import ServicesSection from '../components/sections/ServicesSection'
import AboutUsSection from '../components/sections/AboutUsSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import ProjectSection from '../components/sections/ProjectSection'
import ReviewsSection from '../components/sections/ReviewsSection'
import TeamSection from '../components/sections/TeamSection'
import ContactsSection from '../components/sections/ContactsSection'
import Navbar from '../components/Header/components/Navbar'

const Home: NextPage = () => (
  <Box
    as='div'
    minH='100%'
    display='flex'
    overflow='hidden'
    backgroundColor='black'
  >
    <Box
      as='main'
      position='absolute'
      display='flex'
      width='100%'
      height='100%'
      top='0px'
      left='0px'
      flexDir='column'
      backgroundColor='red'
    >
      <Navbar />
      <Head>
        <title>Main Page</title>
      </Head>
      <PresentationSection />
      <ServicesSection />
      <AboutUsSection />
      <FeaturesSection />
      <ProjectSection/>
      <ReviewsSection />
      <TeamSection />
      <ContactsSection />
    </Box>
  </Box>
)

export default Home
