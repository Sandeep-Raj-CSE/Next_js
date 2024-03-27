import Link from 'next/link'
import React from 'react'
import { Spotlight } from './Spotlight'
import { Button } from './moving-border'


export default function herosection() {
  return (
    <>
    
     <div className='text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center 
     relative overflow-hidden mx-auto py-10 md:py-0' >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="red"
      />  
    
    <div className='p-4 relative z-10 w-full text-center'>

        <h1>Master the Art of LOve</h1>
        <p>Hey, sam please master the art of love today it 
            <br/>
            benefical for any day so <br/>
            that you make the love is doing good things what u make good
        </p>

        <div  className='mt-4'>
            <Link href={"/courses"}>
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       Explore courses
      </Button>
            </Link>

        </div>
        
        
        </div>
        
        </div>
    {/* <h1 className='text-red-500'>Hello mr </h1> */}


    </>
   
  )
}

//export default herosection