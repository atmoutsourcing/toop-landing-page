'use client'

import Image from 'next/image'
import { InstagramLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react'
import logoLight from '../../public/logo-white.png'
import logoDark from '../../public/logo-dark.png'

import seloSilverPartner from '../../public/Selo Silver Partner do Google.png'
import { CalendarDays, Copyright, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8 border-t-2 bg-zinc-100 p-12 dark:bg-shapePrimary">
      <div className="flex flex-col font-sans md:flex-row">
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
            <span className="text-center text-base font-bold underline underline-offset-4 dark:text-zinc-400 md:text-left">
              Links úteis
            </span>

            <div className="md:items-left flex flex-col items-center md:space-y-2">
              <span className="flex cursor-pointer gap-2 font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300">
                Suporte
              </span>

              <span className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300">
                Planos
              </span>

              <span className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300">
                Contatos
              </span>

              <span className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300">
                Sobre nós
              </span>

              <span className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300">
                Blog
              </span>
            </div>
          </div>

          <div className="font-roboto flex flex-col items-center gap-2 pb-4 text-xl font-bold tracking-tighter md:items-start md:items-center">
            <div>
              <span className="text-base font-bold underline underline-offset-4 dark:text-zinc-400">
                Escritório São Paulo - SP
              </span>
            </div>

            <div className="space-y-4">
              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 md:text-justify">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                Rua Arandu, 566 - Brooklin São Paulo - SP, 04562-031
              </span>
            </div>
          </div>

          <div className="font-roboto flex flex-col items-center gap-2 pb-4 text-lg font-bold tracking-tighter md:items-start md:items-center">
            <div>
              <span className="text-base underline underline-offset-4 dark:text-zinc-400">
                Matriz
              </span>
            </div>

            <div className="space-y-1 md:space-y-2">
              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 md:text-justify">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                Georgina Business Park - Av Anísio Haddad, 8001, Milan Sul, Sala
                413, São José do Rio Preto - SP, 15091-751
              </span>

              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Phone className="h-5 w-5" />
                (17) 3211-5353 <br />
                0800 777 4343
              </span>

              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Mail className="h-5 w-5" />
                contato@atmoutsourcing.com.br
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-xl font-bold tracking-tighter md:items-start">
            <div>
              <span className="text-base font-bold underline underline-offset-4 dark:text-zinc-400">
                Horários comercial
              </span>
            </div>

            <div className="space-y-2">
              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 md:text-justify">
                <CalendarDays className="h-4 w-4 flex-shrink-0" />
                Seg. a Sex. das 8h às 19h
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <hr className="my-4 border-t dark:border-zinc-600" /> */}

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="hidden items-center justify-center md:absolute md:flex md:items-start md:justify-start">
          <Image
            className="h-auto w-48"
            src={seloSilverPartner}
            alt="seloSilverPartner"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 pb-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-950 p-2 dark:border-zinc-300">
              <WhatsappLogo className="h-5 w-5" />
            </div>

            <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-950 p-2 dark:border-zinc-300">
              <InstagramLogo className="h-5 w-5" />
            </div>

            <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-950 p-2 dark:border-zinc-300">
              <YoutubeLogo className="h-5 w-5" />
            </div>
          </div>

          <span className="flex flex-row items-center text-xs dark:text-zinc-400">
            <Copyright className="h-4 w-4" />
            Copyright todos os direitos reservados - {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center justify-center md:absolute md:hidden md:items-start md:justify-start">
          <Image
            className="h-auto w-48"
            src={seloSilverPartner}
            alt="seloSilverPartner"
          />
        </div>
      </div>
    </footer>
  )
}
