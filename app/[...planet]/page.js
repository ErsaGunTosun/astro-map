'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Header from '@/components/header'
import { BlackBackgroundCanvas } from '@/components/background'
import PlanetCanvas from '@/components/planetCanvas'

import PlanetData from '@/mocks/planets.json';


export default function Planet({ params }) {
  const planetsName = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    PlanetData.results.map((planet) => {
      if (planet.name == params.planet) {
        setPlanet(planet.description);
      }
    })
  }, [PlanetData]);

  return (
    <>
      <BlackBackgroundCanvas />

      <Header />
      <div className='absolute text-white z-40  w-full h-fit justify-center flex '>
        <div className='bg-white bg-opacity-2.5 container h-full px-5'>
          <div className='flex flex-col my-5 text-sm md:text-xl'>

            <div>
              <PlanetCanvas planetName={params.planet} />
              <h1 className='text-5xl text-center font-bold'>{planet.planet}</h1>
              <p className='mt-3'>{planet.description}</p>
            </div>

            <div className='text-start w-full my-2'>

              <div className='inline-block'>
                <h2 className='text-3xl font-bold'>Basic Features</h2>
                <hr className='mb-4 w-full' />
              </div>

              <ul className='text-start list-disc ps-5 '>
                {
                  planet.basicFeatures
                    ?
                    Object.keys(planet.basicFeatures).map((key) => {
                      return (

                        <li key={key}>{key.split(/(?=[A-Z])/).join(' ').charAt(0).toUpperCase() + key.split(/(?=[A-Z])/).join(' ').slice(1)}: {planet.basicFeatures[key]}</li>
                      )
                    })
                    : null
                }
              </ul>
            </div>
            
            {
              planet.sections
                ?
                (
                  Object.keys(planet.sections).map((key) => {
                    return (
                      <div className='text-start my-2' key={key}>
                        <div className='inline-block'>
                          <h2 className='text-3xl font-bold'>{key.split(/(?=[A-Z])/).join(' ').charAt(0).toUpperCase() + key.split(/(?=[A-Z])/).join(' ').slice(1)}</h2>
                          <hr className='mb-4 w-full' />
                        </div>
                        <p className=''>{planet.sections[key]}</p>
                      </div>
                    )
                  })
                )
                : null
            }


            <footer className='flex justify-center items-center mt-5 mb-2 bg-transparent'>
              Made with 👾 by&nbsp;
              <Link href="https://twitter.com/ersaguntosun" target="_blank">
                ErsaGun
              </Link>
            </footer>

          </div>

        </div>
      </div >
    </>
  )
}
