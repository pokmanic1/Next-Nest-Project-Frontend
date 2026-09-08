import React from 'react';
import GhostFibers from '@/components/Background';

const Login = () => {
    return (
        <section className="relative w-full min-w-[375px] min-h-screen flex flex-col items-center justify-center  overflow-hidden m">

            <div className="absolute inset-0 w-full h-full pointer-events-none ">
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

            <form action=""
                className='w-full md:w-[80%] max-w-[800px]   bg-white/40 backdrop-blur-md    z-10 px-[100px] pb-[100px] pt-[50px] rounded-xl shadow-lg border border-white/20 flex flex-col gap-4'>
                <h1 className="text-[36px] sm:text-[44px] md:text-[50px]  font-bold --font-poppins text-center text-gray-800 mb-4">Logare</h1>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"

                        required
                        className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                        Parolă
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"

                        required
                        className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2.5 mt-10 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] hover:-translate-y-0.5 text-white font-semibold rounded-lg shadow-md hover:shadow-indigo-500/25 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer"
                >
                    Creează cont
                </button>
            </form>

        </section>
    );
}

export default Login;