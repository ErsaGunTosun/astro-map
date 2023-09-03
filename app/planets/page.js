import React from 'react'
import axios from 'axios'
import UUID from 'uniq-id'
import Link from 'next/link'


import Header from '@/components/header'
import PlanetCanvas from '@/components/planetCanvas'
import PlanetsCanvas from '@/components/planetsCanvas'
import { BlackBackgroundCanvas } from '@/components/background'

const getPlanetAllData = async () => {
  const res = await axios.get(`${process.env.API_URL}/api/planets/all`);
  return res.data.results;
}

export default async function Planets() {
  const planets = await getPlanetAllData()
  return (
    <>
      <Header />
      <div className='absolute text-white z-0 w-full h-fit justify-center flex flex-col items-center bg-transparent'>
        <BlackBackgroundCanvas />

        {/** Content div */}
        <div className='bg-white bg-opacity-3 container h-full px-5'>
          <div className='flex first-line: my-5 text-sm md:text-xl'>

          

          </div>
        </div>

      </div >
    </>
  )
}
