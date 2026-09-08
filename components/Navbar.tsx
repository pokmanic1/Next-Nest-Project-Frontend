'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/LOGO1.png'

const Navbar = () => {

    const [burger, setBurger] = useState(false)
    const handleBurger = () => {
        console.log(burger)
        setBurger((prevState) => !prevState)
    }

    const logat = false

    const LogatUI = () => {
        if (!logat) {
            return (
                <>
                    <Link href='/login' >Logeazate</Link>
                    <Link href='/sing' >Inregistreazate</Link>
                </>
            )
        } else {
            return (
                <div className='w-[40px] h-[40px] rounded-full border border-gray-400 mx-auto'></div>
            )
        }


    }


    return (
        <>
<nav className="min-w-[375px] w-full md:grid md:grid-cols-3 flex justify-between items-center fixed  top-0 z-50 bg-black/30 backdrop-blur-md border-b  border-white/50 h-[60px] px-5 md:px-4 lg:px-10">
                <Link href='/' className="logo relative w-12 h-12 mr-auto">
                    <Image
                        src={logoImg}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </Link>

                <div className={`pages text-center text-white hidden md:flex items-center justify-center md:gap-[15px] lg:gap-[30px] font-serif-playfair mx-auto text-[13px] md:text-[14px] lg:text-[16px] `}>
                    <Link href='/'>Pagina1</Link>
                    <Link href='/'>Pagina2</Link>
                    <Link href='/'>Pagina3</Link>
                    <Link href='/'>Pagina4</Link>

                </div>

                <div className="pages text-center ml-auto text-white hidden md:flex items-center justify-center   md:gap-[10px] lg:gap-[30px] font-serif-playfair text-[13px] md:text-[14px] lg:text-[16px]">

                    {LogatUI()}
                </div>



                <button onClick={handleBurger} className='col-center gap-[4px] md:hidden'>
                    <span className='border-2 border-gray-300 w-[30px]'></span>
                    <span className='border-2 border-gray-300 w-[30px]'></span>
                    <span className='border-2 border-gray-300 w-[30px]'></span>
                </button>
                <div className={`absolute  top-14 right-0 z-50 flex-col w-56 font-serif-playfair text-sm md:hidden text-white bg-black p-5 rounded-2xl shadow-xl border border-gray-100 gap-4 ${burger ? 'flex' : 'hidden'}`}>
                    <Link href='/'>Pagina1</Link>
                    <Link href='/' >Pagina2</Link>
                    <Link href='/' >Pagina3</Link>
                    <Link href='/' >Pagina4</Link>
                    <hr className='my-[-5px]' />
                    {LogatUI()}
                </div>
            </nav>


        </>

    )
}

export default Navbar