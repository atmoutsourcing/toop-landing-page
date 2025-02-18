'use client'

import Image from 'next/image'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'
import logoLight from '../../public/logo-white.png'
import logoDark from '../../public/logo-dark.png'

import seloSilverPartner from '../../public/Selo Silver Partner do Google.png'
import { CalendarDays, Copyright, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import atmGroup from '../../public/grupo_atm.png'

export function Footer() {
  return (
    <footer className="flex w-screen flex-col items-center border-t-2 bg-zinc-100 p-12 font-inter font-semibold dark:bg-shapePrimary">
      <div className="flex max-w-[1440px] flex-col gap-5">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="flex items-center justify-center md:mr-24 md:flex-shrink-0 md:items-start">
            <Image
              src={logoDark}
              alt="Logo"
              className="h-auto w-36 pb-8 transition-all dark:hidden"
              suppressHydrationWarning
            />

            <Image
              src={logoLight}
              alt="Logo"
              className="hidden h-auto w-36 pb-8 transition-all dark:block"
              suppressHydrationWarning
            />
          </div>

          <div className="gap-24 md:grid md:grid-cols-4">
            <div className="flex flex-col gap-2 pb-4 md:items-center">
              <span className="text-center text-base text-zinc-950 dark:text-zinc-100 md:text-left">
                Links úteis
              </span>

              <div className="flex flex-col items-center text-sm text-zinc-600 dark:text-zinc-300 md:space-y-1">
                <Link
                  href={'/'}
                  className="flex cursor-pointer gap-2 hover:text-zinc-900 hover:underline dark:hover:text-zinc-100"
                >
                  Home
                </Link>

                <Link
                  href={'/plans'}
                  className="flex cursor-pointer gap-2 hover:text-zinc-900 hover:underline dark:hover:text-zinc-100"
                >
                  Planos
                </Link>

                <Link
                  href="/aboutUs"
                  className="flex cursor-pointer gap-2 hover:text-zinc-900 hover:underline dark:hover:text-zinc-100"
                >
                  Sobre nós
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 pb-4 text-xl tracking-tighter md:items-center">
              <div>
                <span className="text-center text-base text-zinc-950 dark:text-zinc-100 md:text-left">
                  Escritório São Paulo - SP
                </span>
              </div>

              <div className="space-y-4">
                <span className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:text-justify">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                  Rua Arandu, 566 - Brooklin São Paulo - SP, 04562-031
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 pb-4 text-lg tracking-tighter md:items-center">
              <div>
                <span className="text-center text-base text-zinc-950 dark:text-zinc-200 md:text-left">
                  Matriz
                </span>
              </div>

              <div className="space-y-1 md:space-y-2">
                <span className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:text-justify">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                  Georgina Business Park - Av Anísio Haddad, 8001, Milan Sul,
                  Sala 413, São José do Rio Preto - SP, 15091-751
                </span>

                <span className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-200">
                  <Phone className="h-5 w-5 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                  (17) 3211-5353 <br />
                  0800 777 4343
                </span>

                <span className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-200">
                  <Mail className="h-5 w-5 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                  contato@atmoutsourcing.com.br
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 pb-4 text-xl tracking-tighter md:items-center">
              <div>
                <span className="text-center text-base text-zinc-950 dark:text-zinc-200 md:text-left">
                  Horários comercial
                </span>
              </div>

              <div className="space-y-2">
                <span className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-200 md:text-justify">
                  <CalendarDays className="h-4 w-4 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                  Seg. a Sex. das 8h às 19h
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-t border-zinc-300 dark:border-zinc-700" />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Image
              className="h-auto w-36"
              src={seloSilverPartner}
              alt="seloSilverPartner"
            />
          </div>

          <div className="flex md:hidden">
            <Image
              className="h-auto w-52"
              src={atmGroup}
              alt="seloSilverPartner"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center gap-5">
              <section className="flex items-center justify-center">
                <Link href="https://wa.me/5518996187681">
                  <button className="group flex justify-center rounded-md from-gray-800 p-2 text-zinc-800 drop-shadow-xl transition-all duration-500 hover:translate-y-3 hover:rounded-[50%] hover:bg-green-500 hover:from-[#331029] hover:to-[#310413] hover:text-zinc-200 dark:text-zinc-200">
                    <WhatsappLogo className="h-7 w-7" />
                    <span className="absolute text-zinc-200 opacity-0 duration-700 group-hover:-translate-y-10 group-hover:text-sm group-hover:text-gray-700 group-hover:opacity-100 dark:group-hover:text-zinc-300">
                      WhatsApp
                    </span>
                  </button>
                </Link>
              </section>

              <section className="flex items-center justify-center">
                <Link href="https://br.linkedin.com/company/atm-outsourcing">
                  <button className="group flex justify-center rounded-md from-gray-800 p-2 text-zinc-950 drop-shadow-xl transition-all duration-500 hover:translate-y-3 hover:rounded-[50%] hover:bg-blue-500 hover:from-[#331029] hover:to-[#310413] hover:text-zinc-200 dark:text-zinc-200">
                    <LinkedinLogo className="h-7 w-7" />
                    <span className="absolute text-zinc-200 opacity-0 duration-700 group-hover:-translate-y-10 group-hover:text-sm group-hover:text-gray-700 group-hover:opacity-100 dark:group-hover:text-zinc-300">
                      Linkedin
                    </span>
                  </button>
                </Link>
              </section>

              <section className="flex items-center justify-center">
                <Link href="https://www.instagram.com/atmoutsourcing/">
                  <button className="group flex justify-center rounded-md from-gray-800 p-2 text-zinc-950 drop-shadow-xl transition-all duration-500 hover:translate-y-3 hover:rounded-[50%] hover:bg-rose-500 hover:from-[#331029] hover:to-[#310413] hover:text-zinc-200 dark:text-zinc-200">
                    <InstagramLogo className="h-7 w-7" />
                    <span className="absolute text-zinc-200 opacity-0 duration-700 group-hover:-translate-y-10 group-hover:text-sm group-hover:text-gray-700 group-hover:opacity-100 dark:group-hover:text-zinc-300">
                      Instagram
                    </span>
                  </button>
                </Link>
              </section>
            </div>

            <span className="flex flex-row items-center text-xs dark:text-zinc-400">
              <Copyright className="h-4 w-4" />
              Copyright todos os direitos reservados -{' '}
              {new Date().getFullYear()}
            </span>
          </div>

          <div className="hidden md:flex">
            <Image
              className="h-auto w-52"
              src={atmGroup}
              alt="seloSilverPartner"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
