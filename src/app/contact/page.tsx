import ContactForm from '@/components/contactForm'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <main>
        <Navbar name={'HIRE ME'} size={'text-[26.5vw]'}/>
        <ContactForm/>
    </main>
  )
}

export default page