'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logoImg from '@/public/LOGO1.png'

const Navbar = () => {
    const router = useRouter()
    const [burger, setBurger] = useState(false)
    const handleBurger = () => setBurger((prevState) => !prevState)

    const [logat, setLogat] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(true)
    const [userEmail, setUserEmail] = useState('')
    const [dashbordOpen, setDashboardOpen] = useState(false)

    useEffect(() => {
        const verificaToken = async () => {
            try {
                const res = await fetch('http://localhost:3001/auth', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (res.ok) {
                    const json = await res.json();
                    setUserEmail(json.data.userEmail);
                    setLogat(true);
                } else {
                    setLogat(false);
                }
            } catch (err) {
                setLogat(false);
            } finally {
                setLoadingAuth(false);
            }
        };

        verificaToken();
    }, []);

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:3001/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });
            setLogat(false);
            setUserEmail('');
            setDashboardOpen(false);
            router.push('/login');
        } catch (err) {
            console.error('Eroare la delogare:', err);
        }
    };

    const LogatUI = () => {
        if (loadingAuth) {
            return <div className='w-[40px] h-[40px] rounded-full border border-gray-400 mx-auto bg-white/10 animate-pulse'></div>
        }

        if (!logat) {
            return (
                <>
                                <Link href='/login' >Logeazate</Link>
                    <Link href='/sing' >Inregistreazate</Link>  </>
            )
        } else {
            return (
                <div className="relative">

                    <button
                        onClick={() => setDashboardOpen(p => !p)}
                        title={userEmail}
                        className='w-[40px] h-[40px] rounded-full border-2 border-indigo-400 bg-indigo-950/80 hover:border-indigo-300 transition-all flex items-center justify-center text-white font-bold uppercase cursor-pointer shadow-md'
                    >
                        {userEmail ? userEmail.charAt(0) : 'U'}
                    </button>

                    {dashbordOpen && (
                        <div className="absolute right-0 mt-3 w-56 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-4 flex flex-col gap-3 text-left z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="flex flex-col border-b border-white/10 pb-2">
                                <span className="text-[11px] text-gray-400 font-sans uppercase tracking-wider">Conectat ca</span>
                                <span className="text-sm font-medium text-white truncate" title={userEmail}>
                                    {userEmail}
                                </span>
                            </div>



                            <button
                                onClick={handleLogout}
                                className="w-full text-left text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 py-1.5 px-2 rounded-lg transition-colors font-sans flex items-center gap-2 cursor-pointer"
                            >
                                Deconectare
                            </button>
                        </div>
                    )}
                </div>
            )
        }
    }

    return (
        <nav className="min-w-[375px] w-full md:grid md:grid-cols-3 flex justify-between items-center fixed top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/20 h-[60px] px-5 md:px-4 lg:px-10">
            <Link href='/' className="logo relative w-12 h-12 mr-auto flex items-center">
                <Image
                    src={logoImg}
                    alt="logo"
                    fill
                    className="object-contain"
                />
            </Link>

            <div className="pages text-center text-white hidden md:flex items-center justify-center md:gap-[15px] lg:gap-[30px] font-serif-playfair mx-auto text-[13px] md:text-[14px] lg:text-[16px]">
                <Link href='/'>Pagina1</Link>
                <Link href='/'>Pagina2</Link>
                <Link href='/'>Pagina3</Link>
                <Link href='/'>Pagina4</Link>
            </div>

            <div className="pages text-center ml-auto text-white hidden md:flex items-center justify-end md:gap-[10px] lg:gap-[30px] font-serif-playfair text-[13px] md:text-[14px] lg:text-[16px]">
                {LogatUI()}
            </div>

            <button onClick={handleBurger} className='flex flex-col gap-[4px] md:hidden cursor-pointer'>
                <span className='border border-gray-300 w-[26px]'></span>
                <span className='border border-gray-300 w-[26px]'></span>
                <span className='border border-gray-300 w-[26px]'></span>
            </button>

            <div className={`absolute top-16 right-5 z-50 flex-col w-60 font-serif-playfair text-sm md:hidden text-white bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 gap-4 ${burger ? 'flex' : 'hidden'}`}>
                <Link href='/'>Pagina1</Link>
                <Link href='/'>Pagina2</Link>
                <Link href='/'>Pagina3</Link>
                <Link href='/'>Pagina4</Link>
                <hr className='border-white/20 my-1' />
                <div className="flex flex-col gap-3">
                    {LogatUI()}
                </div>
            </div>
        </nav>
    )
}

export default Navbar