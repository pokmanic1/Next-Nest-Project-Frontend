'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import GhostFibers from '@/components/Background';

const Login = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [errForm, setErrForm] = useState({
        errEmail: '',
        errPassword: '',
    });

    const [mesajErrGeneral, setMesErrGeneral] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        const objectForm = {
            errEmail: '',
            errPassword: ''
        };
        setErrForm(objectForm);
        setMesErrGeneral('');

        if (!form.email.trim()) {
            objectForm.errEmail = 'Emailul e obligatoriu';
            valid = false;
        }
        if (!form.password.trim()) {
            objectForm.errPassword = 'Parola e obligatorie';
            valid = false;
        }

        setErrForm(objectForm);
        if (!valid) return;

        try {
            const res = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(form),
            });
            
            const data = await res.json();

            if (!res.ok) {
                const [msg] = [data.message].flat();
                setMesErrGeneral(msg || 'Email sau parolă incorectă.');
                return;
            }

            setForm({ email: '', password: '' });
            console.log('Logare reușită:', data);
            router.push('/');

        } catch (err: any) {
            console.error(err);
            setMesErrGeneral('Nu am putut contacta serverul. Verifică conexiunea.');
        }
    };

    return (
        <section className="relative w-full min-w-[375px] min-h-screen flex flex-col items-center justify-center overflow-hidden">

            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <GhostFibers
                    lineColor="#3a3cff"
                    glowColor="#a4acff"
                    speed={0.1}
                    scale={2}
                    rotation={23}
                    rotationSpeed={0.25}
                    layers={4}
                    waveAmplitude={0.045}
                    waveFrequency={1.4}
                    waveSpeed={-0.25}
                    layerSpeed={0.08}
                    twist={0.07}
                    twistFrequency={9.5}
                    twistSpeed={1.2}
                    lineFrequency={3.4}
                    lineSpacing={1.6}
                    lineSharpness={16}
                    glowFalloff={10}
                    glowIntensity={1.6}
                    brightness={2}
                    blueBoost={1.12}
                    vignette={0.8}
                    grain={0.05}
                    dpr={1}
                    lightMode={false}
                    fps={60}
                    paused={false}
                />
            </div>

            <form action="" onSubmit={onSubmit}
                className='w-[90%] md:w-[80%] max-w-[800px] bg-white/40 backdrop-blur-md z-10 py-8 px-6 sm:px-12 md:px-[50px] md:pt-[25px] md:pb-[10px] lg:px-[100px] lg:pt-[50px] lg:pb-[100px] md:mt-[100px] rounded-xl shadow-lg border border-white/20 flex flex-col gap-4'>
                <h1 className="text-[32px] sm:text-[44px] md:text-[50px] font-bold --font-poppins text-center text-gray-800 mb-2 sm:mb-4">
                    Logare
                </h1>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                        id="email"
                        name="email"
                        className={`w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${errForm.errEmail ? "border-2 border-red-600 focus:ring-red-700" : 'focus:ring-indigo-500 '} focus:border-transparent text-gray-800 placeholder-gray-400`}
                    />
                    {errForm.errEmail && <p className='text-center text-red-600 text-[11px] sm:text-[12px] md:text-[13px] mb-[-25px]'>{errForm.errEmail}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                        Parolă
                    </label>
                    <input
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                        className={`w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${errForm.errPassword ? "border-2 border-red-600 focus:ring-red-700" : 'focus:ring-indigo-500 '} focus:border-transparent text-gray-800 placeholder-gray-400`}
                    />
                    {errForm.errPassword && <p className='text-center text-red-600 text-[11px] sm:text-[12px] md:text-[13px] mb-[-25px]'>{errForm.errPassword}</p>}
                </div>

                {mesajErrGeneral && <div className='text-center bg-red-200 text-black py-1 px-4 border rounded-xl mt-[0px] mb-[-40px] border-red-800 text-[11px] sm:text-[12px] md:text-[13px] mb-[-25px]'>{mesajErrGeneral}</div>}

                <button
                    type="submit"
                    className="w-full py-2.5 mt-6 sm:mt-10 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] hover:-translate-y-0.5 text-white font-semibold rounded-lg shadow-md hover:shadow-indigo-500/25 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer"
                >
                    Autentificare
                </button>
            </form>

        </section>
    );
}

export default Login;