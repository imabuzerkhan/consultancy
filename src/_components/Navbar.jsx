import { NotebookPenIcon, PersonStandingIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IoMdPerson } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='bg-white shadow-md w-full h-auto ' >
      <div className="nav flex items-center justify-between md:px-36 px-6 py-4 ">
       <Link href='/'> <div className="logo  flex items-center   "> <NotebookPenIcon  className='text-green-500 font-bold ' />
          Web<span>Edu</span>
        </div>  </Link>
        <div className="middtlecontent hidden md:flex items-center gap-8 ">
         <Link href='/' >Home</Link>
         <Link href='/' >Home</Link>
         <Link href='/' >Home</Link>
         <Link href='/' >Home</Link>
        <Link href='/singup' > <Button className="flex items-center gap-2 capitalize " > <IoMdPerson /> Singin</Button> </Link>
         
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar
