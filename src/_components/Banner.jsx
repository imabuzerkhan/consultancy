import { Button } from '@/components/ui/button'
import { ArrowBigLeft, ArrowBigRightDash, LucideArrowBigRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
       src='/herosection.webp'
       alt='hero-section'
       width={500}
       height={400}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <p className='border-2 bg-slate-100 text-sm font-serif border-[#7B5C99]border-dotted rounded-full my-4  px-4 py-2 ' >Enhance Your Expertise </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Develop Your Skills</h2>

        <p className="mt-4 text-gray-600">
        Unlock your potential with our online courses. Advance your career or explore new fields with comprehensive
         learning at your own pace. Transform your ambitions into
          reality from anywhere.
        </p>

        <Button className="flex items-center gap-2 my-4" >Get Started <LucideArrowBigRight/> </Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Banner
