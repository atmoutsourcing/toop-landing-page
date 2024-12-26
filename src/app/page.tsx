'use client'

import Image from 'next/image'
import androidEMM from '../../public/androidEMM.png'

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-950 min-h-[800px] max-h-[800px]">
      <div className="flex flex-row gap-64 px-8 py-4">
        <div className="flex flex-col items-start mt-24">
          <h1 className="text-left lg:text-5xl max-w-3xl">
            O sistema EMM que transforma a gestão de dispositivos em uma{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-700 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-cyan-blue">
              experiência prática e eficiente
            </span>
          </h1>

          <Image
            src={androidEMM}
            alt="emm"
            className="h-auto w-52 mt-[400px]"
          />
        </div>
      </div>
    </div>
  )
}
