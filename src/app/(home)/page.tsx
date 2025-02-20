'use client'
import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'

import Image from 'next/image'

import React from 'react'
import { Button } from '@/components/button'

import Link from 'next/link'
import { Ai } from './section/ai'
import { Summary } from './section/summary'
import { Benefits } from './section/benefits'
import { ProposalCards } from './section/proposal-cards'
import { Questions } from './section/questions'
import { Accessibility } from './section/accessibility'

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col font-inter">
      <div
        style={{ zIndex: '-1' }}
        className="absolute left-[-380px] top-[-153.81px] h-[649.99px] w-[575.79px] rotate-[-0.02deg] bg-gradient-radial from-blue-200 to-blue-500 blur-[250px] dark:from-blue-600 dark:to-blue-950 dark:blur-[300px]"
      />

      <div className="relative mb-80 mt-52 flex flex-col items-center gap-2 font-bold md:text-start">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={iconWhite}
            alt="Toop icon"
            className="hidden h-24 w-24 dark:block md:h-28 md:w-28"
          />

          <Image
            src={iconDark}
            alt="Toop icon"
            className="block h-28 w-28 dark:hidden"
          />

          <h1 className="flex justify-center text-center font-plusJakartaSans text-2xl md:text-start md:text-4xl">
            O sistema EMM que transforma a gestão de
          </h1>
        </div>

        <h1 className="flex justify-center text-center font-plusJakartaSans text-2xl md:text-start md:text-4xl">
          dispositivos em uma experiência prática e eficiente
        </h1>

        <span className="md:text-md mt-2 px-5 text-center font-plusJakartaSans text-sm text-zinc-700 dark:text-textBase md:text-start">
          Gerenciamento dispositivos móveis de maneira segura e inteligente.
        </span>

        <div className="mt-2">
          <Link href={'/plans'} type="submit">
            <Button>Saiba mais</Button>
          </Link>
        </div>
      </div>

      <div
        style={{ zIndex: '-1' }}
        className="absolute left-[1256px] top-[291px] hidden h-[438px] w-[1056px] max-w-[1440px] bg-gradient-radial from-blue-200 to-blue-500 blur-[250px] dark:from-blue-600 dark:to-blue-950 dark:blur-[300px] md:flex"
      />

      <Summary />

      <Benefits />

      <Ai />

      <Accessibility />

      <ProposalCards />

      <Questions />
    </div>
  )
}
