import React from 'react'

import Header from '@/components/header/index.js'
import { GiExplodingPlanet } from 'react-icons/gi'

export default function NotFound() {
    return (
        <div className='flex flex-col w-full min-h-screen  m-0 p-0'>
            <Header />
            <main className='flex flex-1 text-sm md:text-xl text-white text-center justify-center items-center'>

                <div className='w-full h-full text-center'>
                    <GiExplodingPlanet className='inline-block text-white text-8xl m-0 p-0' />
                    <h1 className='text-5xl text-center font-bold'>404</h1>
                    <p className='mt-3'>Page not found</p>

                </div>

            </main>
        </div>

    )
}
