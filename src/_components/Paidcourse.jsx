"use client"
import { FaCartArrowDown } from "react-icons/fa";
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PaidCourses } from "@/Data";
import { Button } from "@/components/ui/button"

export function PaidCourse() {
  return (
    <>
    
    <h2 className="font-bold text-3xl my-10 " >Our Paid Courses </h2>
    
    <div className="grid grid-cols-1 sm:grigd-cols-2 lg:grid-cols-3 gap-4  mb-6 " >
      {
PaidCourses.map((courses)=>(
  
<Card className="  w-[300px] border-none ">
      
        <div>
          <Image
          src={courses.image}
          alt="freecoursesimage"
          width={500}
          height={500}
          className="w-f,ull object-cover h-[170px] "
          
          />
        </div>
        <CardHeader className="px-1 py-2 " >
        <CardTitle className="text-md font-serif " >{courses.title}</CardTitle>
        <CardDescription>Pricifgng:   {courses.pricing}</CardDescription>
        <CardDescription>Access:   {courses.access}</CardDescription>
      </CardHeader>
    <div className="flex  item-center justify-between px-1 pb-2 " >
      <Button className='bg-green-300 text-black hover:bg-green-300 ' >Enroll Now </Button>
      <FaCartArrowDown className="text-4xl text-gray-600 cursor-pointer " />
    </div>
     
    </Card>
))
      }
    
    </div>
    </>
  )
}
