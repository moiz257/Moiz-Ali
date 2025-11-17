import Navbar from '@/components/navbar'
import MyWork from '@/components/myWork'
import React from 'react'

const page = () => {
  return (
      <main>
        <Navbar name='MY WORKS' size='text-[17.5vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]' />
        <MyWork/>
      </main>
  )
}

export default page