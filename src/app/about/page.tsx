import AboutSection from '@/components/about'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <main>
        <Navbar name='ABOUT ME' size="text-[18vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]"/>
        <AboutSection/>
    </main>
  )
}

export default page
