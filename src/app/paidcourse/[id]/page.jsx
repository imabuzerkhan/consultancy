
import { useParams } from 'next/navigation'
import React from 'react'
import { PaidCourses } from '@/Data';
export default function course() {
  const params = useParams();
  const {id } = params


  const item = PaidCourses.find(item => item.id === parseInt(id) )


  if (!item) {
    return <p>Doctor not found for ID: {id}</p>;
  }

   return (
    <div>
      {item.title}
    </div>
  )
}

