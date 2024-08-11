
import { Button } from '@/components/ui/button'

import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const DisBanner = () => {
  return (
    <div>
   

<section
  className="relative bg-[url(https://images.unsplash.com/photo-1440335680360-79703e7032f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  md:bg-cover bg-center bg-no-repeat"
>


  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="  bg-white rounded-md px-4 py-4 max-w-2xl   mx-auto  space-y-4 ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-xl font-extrabold sm:text-3xl">
       Get 30 Percent Discount

        <strong className="block font-extrabold text-rose-700"> Frome Here. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

     <Button className="flex item-center gap-2 " >Get Discount <FaLongArrowAltRight  className='text-white' />
     </Button>
    </div>
  </div>
</section>
    </div>
  )
}

export default DisBanner
