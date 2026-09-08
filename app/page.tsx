import Image from "next/image";
import Link from "next/link";
import { BlueButon } from "@/components/Butons";
export default function Home() {
  return (
    <section className="flex-full">

      <Image src={'/LogoSVG.svg'} width={150} height={150} alt="logo"></Image>

      <div>
        <h1>
          <span className="text-blue-600">Notează</span> toate gândurile
          <br />
          <span className="text-blue-600">Organizate</span>
          extrem de simplu.

        </h1>
        <h2>
          Spațiul tău digital unde poți adăuga idei rapide sau planuri complexe, făcând organizarea zilnică să devină o experiență extrem de naturală.
        </h2>
        <Link href={'/'} > Incepe acum </Link>
          <BlueButon/>
      </div>

    </section>
  );
}
