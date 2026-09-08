import Image from "next/image";
import Link from "next/link";
import { BlueButon } from "@/components/Butons";
import GhostFibers from '@/components/Background';

export default function Home() {
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

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center space-y-6 px-4">

        {/* <div className="p-2 transition-transform hover:scale-105 duration-300">
          <Image src={'/LogoSVG.svg'} width={150} height={150} alt="logo" priority />
        </div> */}

        <div className="space-y-4 w-full">
          <h1 className="text-[36px] sm:text-[44px] md:text-[50px] font-bold tracking-tight text-white whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"> 
  <span className="text-blue-500">Notează</span> toate gândurile <br /> <span className="text-blue-500">Organizate</span> extrem de simplu. 
</h1>

          <h2 className="text-[11px] sm:text-[13px] md:text-[15px] text-white max-w-xl mx-auto leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
            Spațiul tău digital unde poți adăuga idei rapide sau planuri complexe, făcând organizarea zilnică să devină o experiență extrem de naturală.
          </h2>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <BlueButon link='/' continut='Incepe acum' />
        </div>

      </div>

    </section>
  );
}