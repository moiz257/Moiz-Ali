import ContactForm from '@/components/contactForm'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <main>
        <Navbar name={'HIRE ME'} size={'text-[18vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]'}/>
        <ContactForm/>
    </main>
  )
}

export default page