import React from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UserIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div>
            <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 '>
                {/* left */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition="left" />



                </div>

                {/* middle search bar*/}
                <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                    <input className='placeholder-gray-400 text-gray-600 text-sm flex-grow lr-5 pl-5 bg-transparent outline-none' type="text" placeholder='Start your Search with airbnb'
                    />
                    <SearchIcon className='h-8 text-white bg-orange-500 rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2' />
                </div>

                {/* right */}
                <div className='flex space-x-4 items-center justify-end'>
                    <p className='hidden md:inline'>Become a host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer' />
                    <div className='flex border-gray-300 items-center space-x-2 border-2 p-2 rounded-full'>
                        <MenuIcon className='h-6 cursor-pointer' />
                        <UserCircleIcon className='h-6 cursor-pointer' />
                    </div>

                </div>
            </header>

        </div>
    )
}

export default Header