import AboutSection from '@/components/about'
import Cards from '@/components/card'
import CodingSkills from '@/components/codeSkills'
import Navbar from '@/components/navbar'
import SkillsSection from '@/components/skills'
import React from 'react'

const page = () => {
  return (
    <main>
        <Navbar name='ABOUT ME' size="text-[19.5vw]"/>
        <AboutSection/>
        <SkillsSection/>
        <CodingSkills/>
        <Cards/>
    </main>
  )
}

export default page