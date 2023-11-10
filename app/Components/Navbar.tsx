import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ProfileImg from '../assets/profile--img.png'
import Mode from '../assets/light-dark--img.png'

const Navbar = () => {
    return (
        <nav className='nav--items p-6 mb-16'>
            <div className="flex justify-center gap-4 align-middle">
                <Link
                    href="/"
                    className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
                >
                    <h1>Shekhar D. Thakur</h1>
                </Link>
            </div>
            <div className='nav--links'>
                <Link href="/routes/blog">Blog</Link>
                <Link href="/routes/projects">Projects</Link>
                <Link href="/routes/gallery">Gallery</Link>
                <Link href="/routes/startups">Startups</Link>
                <Link href="/routes/video">Videos</Link>
                <Link href="/routes/about">About</Link>
            </div>
            <div className='nav--buttons'>
                <button>
                    <Image
                        src={ProfileImg}
                        height={40}
                        width={40}
                        alt="Picture of the author"
                    />
                </button>
                <button>
                    <Image
                        src={Mode}
                        height={40}
                        width={40}
                        alt="Picture of the author"
                    />
                </button>
            </div>
        </nav>
    )
}

export default Navbar