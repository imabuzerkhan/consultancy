"use client"


import { useParams } from 'next/navigation'
import React from 'react'
import { Freecourse } from '@/Data';
 export default function  freecoursedetails () {

const params = useParams();
const {id} = params

const item = Freecourse.find(item => item.id === parseInt(id))


if (!item) {
  return <p>Doctor not found for ID: {id}</p>;
}

  return (
    <div>
      {item.title}
    </div>
  )
}


