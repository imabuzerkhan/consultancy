"use client"
import { FaHtml5, FaCss3Alt, FaJs,  FaJava } from 'react-icons/fa';
import { FaPython } from "react-icons/fa6";
import { SiC, SiAlgorithms } from 'react-icons/si';


const icons = {
  FaHtml5 : <FaHtml5/> , 
  FaCss3Alt : <FaCss3Alt/>,
  FaJs : <FaJs/> ,
  Fapython: <FaPython/>,
  FaJava : <FaJava/>
}


import { topics } from "@/Data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm() {
  return (
    <>
    <h2 className='font-bold text-3xl my-10 ' >Popular Categories</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mb-8  ">
      {topics.map(({name , icon},  id) => (
        <Card key={id} className="w-[150px] bg-green-50 text-black flex flex-col items-center  ">
          <CardHeader>
           
            <div className="flex items-center my-5 space-x-2">
              <div className='text-4xl text-black ' >{icons[icon]}</div> 
            </div>
          </CardHeader>
          <CardContent>
          <CardTitle className="text-md " >{name}</CardTitle>
          </CardContent>
         
        </Card>
      ))}
    </div>
    </>
  );
}
