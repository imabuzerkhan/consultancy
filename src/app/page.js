import { Accordion } from '@/_components/Accordian'
import Banner from '@/_components/Banner'
import { CardWithForm } from '@/_components/Card'
import Freecourse, { Freecourses } from '@/_components/Freecourse'
import { PaidCourse } from '@/_components/Paidcourse'
import { Accordions } from '@/_components/Accordian'
import React from 'react'

const page = () => {
  return (
    <>
    
      <Banner/>
      <div className=" px-6 md:px-20" >
     <CardWithForm/>
    <Freecourses/>
    </div>
    <PaidCourse/>
    <Accordions/>
    
    </>
  )
}

export default page
