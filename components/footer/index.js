import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='basis-1 flex justify-center items-center mt-5 mb-2 bg-transparent static bottom-0'>
            Made with 👾 by&nbsp;
            <Link href="https://twitter.com/ersaguntosun" target="_blank">
                ErsaGun
            </Link>
        </footer>
    )
}
