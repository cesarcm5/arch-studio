'use client'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className=" pt-5 ps-3 lg:pt-px lg:ps-px flex gap-x-12 lg:gap-x-2">
            <div className="">
                <Link href="/">
                    <img src="/assets/logo.svg" />
                </Link>
            </div>
            <div className="hidden md:block  md:space-x-12 md:ms-12 md:px-10 text-gray-500 font-bold pt-2">
                <button>
                    <Link href="/portfolio">
                        Portfolio
                    </Link>
                </button>
                <button>
                    <Link href="/aboutus">
                        About Us
                    </Link>
                </button>
                <button>
                    <Link href="/contact">
                        Contact
                    </Link>
                </button>
            </div>
            <div className='ml-auto pt-4 pr-3 block sm:hidden'>
                <button onClick={() => setIsMenuOpen(true)} aria-label='Toggle menu'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* NAVIGATION LINKS */}
                <Dialog
                    open={isMenuOpen}
                    onClose={setIsMenuOpen}
                    className="fixed inset-0 z-50"
                >
                    {/* Fondo negro con opacidad */}
                    <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsMenuOpen(false)}></div>

                    {/* Contenido del menú */}
                    <DialogPanel className="fixed inset-0 flex flex-col items-end bg-white p-6 z-50">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(false)}
                            className="self-end -m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            X
                        </button>
                        <Link href="/portfolio" className="mt-4 text-gray-500 font-bold">
                            Portfolio
                        </Link>
                        <Link href="/aboutus" className="mt-4 text-gray-500 font-bold">
                            About Us
                        </Link>
                        <Link href="/contact" className="mt-4 text-gray-500 font-bold">
                            Contact
                        </Link>
                    </DialogPanel>
                </Dialog>
            </div>
        </header>
    )
}