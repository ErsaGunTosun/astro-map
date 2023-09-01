'use client';
import Link from 'next/link'
import React from 'react'
import { PiPlanetBold } from 'react-icons/pi'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'

export default function Header({Status}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        // <div className='relative flex justify-center items-center '>
        //     <div className={Status}>
        //         <nav className='bg-opacity-0 bg-black p-4 flex justify-between items-center'>
        //             <div className='text-white font-semibold text-lg'>
        //                 <PiPlanetBold className='inline m-0 p-0 text-3xl font-normal' /> Astro Map
        //             </div>
        //             <div className='flex space-x-4'>
        //                 <Link href='/' className='text-white hover:text-gray-300'>
        //                     <span className='mr-1'>·</span>Solar System
        //                 </Link>
        //                 <Link href='/' className='text-white hover:text-gray-300'>
        //                     <span className='mr-1'>·</span>Planets
        //                 </Link>
        //                 <Link href='/' className='text-white hover:text-gray-300'>
        //                     <span className='mr-1'>·</span>Support Pluto
        //                 </Link>
        //             </div>
        //         </nav>
        //     </div>
        //     <div className='block mdx:hidden basis-3/4 w-auto text-end'>
        //         <i className={`${!isMenuOpen ? 'fa-sharp fa-solid fa-bars' : 'fa-solid fa-xmark'}  text-2xl me-4 hover:text-gray-600`} onClick={toggleMenu}></i>
        //     </div>
        // </div>

        <>
            <div className={`${isMenuOpen ? 'hidden' : 'relative'} flex justify-center items-center`}>
                <div className={`${Status} flex flex-row justify-center overflow-hidden text-white w-full p-4`}>

                    <div className='m-0 p-0 ms-4 basis-1/2 text-white text-base mdx:text-lg'>
                        <Link href='/' className='inline-block'>
                            <p className='font-semibold text-base'>
                                <PiPlanetBold className='inline m-0 p-0 font-normal' /> Astro Map
                            </p>
                        </Link>
                    </div>

                    <div className='text-end w-auto basis-1/2 hidden mdx:block tracking-tighter space-x-4'>
                        <Link href='/' className='text-white hover:text-gray-300'>
                            <span className='mr-1'>·</span>Solar System
                        </Link>
                        <Link href='/planets' className='text-white hover:text-gray-300'>
                            <span className='mr-1'>·</span>Planets
                        </Link>
                        <Link href='/support-pluto' className='text-white hover:text-gray-300'>
                            <span className='mr-1'>·</span>Support Pluto
                        </Link>
                    </div>

                    <div className='block mdx:hidden basis-1/2 w-auto text-end'>
                        {
                            !isMenuOpen ?
                                <FaBars className='inline m-0 p-0 text-2xl font-normal text-white' onClick={toggleMenu} />
                                :
                                <IoClose className='inline m-0 p-0 text-2xl font-normal text-white' onClick={toggleMenu} />
                        }
                    </div>

                </div>
            </div>

            {
                isMenuOpen ? (
                    <div className='absolute flex-1 w-full h-full text-end bg-black z-50 p-4' onClick={toggleMenu}>
                        <div className='block mdx:hidden basis-3/4 w-auto text-end' id='card overflow-hidden'>
                            <p className='text-3xl m-0 p-0 items-center justify-end flex'>
                                {
                                    !isMenuOpen ?
                                        <FaBars className='inline m-0 p-0 text-3xl font-normal text-white' onClick={toggleMenu} />
                                        :
                                        <IoClose className='inline m-0 p-0 text-3xl font-normal text-white' onClick={toggleMenu} />
                                }
                            </p>
                            <div className='flex-row text-start'>
                                <Link href='/' className='block basis-1  text-3xl mb-2 text-white hover:text-gray-300'>
                                    Solar System
                                </Link>
                                <Link href='/planets' className='block basis-1  text-3xl mb-2 text-white hover:text-gray-300'>
                                    Planets
                                </Link>
                                <Link href='/support-pluto' className='block basis-1  text-3xl mb-2 text-white hover:text-gray-300'>
                                    Support Pluto
                                </Link>
                            </div>
                        </div>
                    </div>
                )
                    : ""
            }

        </>

    )
}
