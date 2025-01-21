'use client'
import iconWhite from '@/../public/icon-white.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-[1440px] flex-col">
      <div>
        <div className="absolute left-[-410px] top-[-153.81px] h-[649.99px] w-[575.79px] rotate-[-0.02deg] bg-gradient-radial from-blue-400 to-blue-900 blur-[250px]" />
        <div className="mt-52 items-center font-bold">
          <div className="flex flex-col items-center gap-2">
            <Image src={iconWhite} alt="Toop icon" className="h-24 w-24" />

            <h1 className="flex justify-center text-4xl">
              O sistema EMM que transforma a gestão de
            </h1>

            <h1 className="flex justify-center text-4xl">
              dispositivos em uma experiência prática e eficiente
            </h1>
          </div>
        </div>

        <div className="absolute left-[1256px] top-[171px] h-[738px] w-[1056px] bg-gradient-radial from-blue-400 to-blue-900 blur-[250px]" />
      </div>

      {/* <div className="bg-red-400">topic</div>
        <div className="bg-blue-400">carousel</div>
        <div className="bg-green-400">benefits</div>
        <div className="bg-yellow-400">plans</div>
        <div className="bg-purple-500">contact</div>
        <div className="bg-orange-500">doubts</div> */}
    </div>
  )
}
