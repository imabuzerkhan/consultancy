import Banner from '@/_components/Banner'
import { CardWithForm } from '@/_components/Card'
import Freecourse, { Freecourses } from '@/_components/Freecourse'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
     <CardWithForm/>
    <Freecourses/>
    </div>
  )
}

export default page
