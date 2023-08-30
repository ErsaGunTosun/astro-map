import React from 'react'

import Astro from '@/container/home'
import Header  from '@/components/header'

export default function Home() {
  return (
    <>
      <Header Status={'absolute top-0 left-0 right-0 z-40 p-4'} />

      <main>
        <div className='bg-color-500 w-full h-full'>
          <Astro />
        </div>
      </main>
    </>
  )
}
