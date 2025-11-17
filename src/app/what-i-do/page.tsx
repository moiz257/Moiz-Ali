import Navbar from '@/components/navbar'
import ServicesPage from '@/components/service'
import React from 'react'

const page = () => {
    return (
        <main>
            <Navbar name='WHAT I DO' size='text-[18vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]'/>
            <ServicesPage/>
        </main>
    )
}

export default page