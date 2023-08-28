import Link from 'next/link'
import React from 'react'
import { PiPlanetBold } from 'react-icons/pi'

export default function Header() {
    return (
        <div className='relative flex justify-center items-center '>
            <div className='absolute top-0 left-0 right-0 z-40 p-4'>
                <nav className='bg-opacity-0 bg-black p-4 flex justify-between items-center'>
                    <div className='text-white font-semibold text-lg'>
                        <PiPlanetBold className='inline m-0 p-0 text-3xl font-normal' /> Astro Map
                    </div>
                    <div className='flex space-x-4'>
                        <Link href='/' className='text-white hover:text-gray-300'>
                            Planets
                        </Link>
                        <Link href='/' className='text-white hover:text-gray-300'>
                            Support Pluto
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
