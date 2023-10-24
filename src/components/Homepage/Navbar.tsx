import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-[#E23A7A] fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                <div className="flex md:order-2">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-[13rem] h-[2.25rem]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <Link href="/" className="flex flex-initial items-center">
                    <img src="Logo.svg" className="h-8 mr-3" alt="CUGetLove Logo" />
                </Link>
                <div className="flex">
                    <Link href="/" className="flex flex-1 items-center">
                        <img src="SearchIcon.svg" className="h-8 mr-2" alt="CUGetLove Logo" />
                    </Link>
                    <Link href="/" className="flex flex-1 items-center">
                        <img src="Login.svg" className="h-8 mr-1" alt="CUGetLove Logo" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}