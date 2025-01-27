'use client'

import Image from 'next/image'
import Ellipse from '../../../public/Ellipse.svg'
import EllipseDark from '../../../public/EllipseDark.svg'
import { Checkbox } from '@/components/ui/checkbox'
import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react'

export default function Contacts() {
  return (
    <div className="mx-auto mb-20 mt-20 flex max-w-[1440px] flex-col items-center gap-36 p-4 md:flex-row">
      <div className="flex flex-col gap-3">
        <span className="text-3xl font-bold tracking-tight">
          Será um prazer atendê-lo
        </span>

        <hr className="my-4 border-t border-zinc-300 dark:border-zinc-700" />

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">
            No Grupo ATM, estamos comprometidos em oferecer soluções que atendam
            às necessidades específicas do seu negócio. O TOOP foi desenvolvido
            para ser uma plataforma prática e eficiente, permitindo que você
            configure sua integração de forma simples e rápida. Se a sua empresa
            precisa de uma abordagem mais avançada, nossa equipe de
            especialistas está aqui para ajudar. Com o nosso suporte, você
            encontrará a solução ideal para integrar o TOOP ao seu fluxo de
            trabalho, garantindo eficiência e resultados alinhados aos seus
            objetivos. Entre em contato conosco, será um prazer entender suas
            necessidades e ajudá-lo a a encontrar o melhor caminho para
            aproveitar tudo o que o TOOP tem a oferecer.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Phone className="h-6 w-6 text-icons dark:text-zinc-400" />

              <div className="flex flex-col gap-1">
                <span className="text-xs">(17) 3211-5353</span>
                <span className="text-xs">0800 777 4343</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <EnvelopeSimple className="h-6 w-6 text-icons dark:text-zinc-400" />
              <span className="text-xs">contato@atmoutsourcing.com.br</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <MapPin className="h-6 w-6 text-icons dark:text-zinc-400" />
              <span className="text-xs">
                Georgina Business Park - Av Anísio Haddad, 8001, Milan Sul, Sala
                413, São José do Rio Preto - SP, 15091-751
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <Image
        src={iconWhite}
        alt="Toop icon"
        className="hidden h-8 w-8 dark:block"
      />

      <Image
        src={iconDark}
        alt="Toop icon"
        className="block h-8 w-8 dark:hidden"
      /> */}

      <div className="relative flex items-center">
        <Image
          src={EllipseDark}
          alt="ellipse"
          className="absolute hidden scale-125 dark:block"
        />

        <Image
          src={Ellipse}
          alt="ellipse"
          className="absolute block scale-125 dark:hidden"
        />

        <div className="inset-0 z-10 flex items-center justify-center">
          <div className="bg-b-zinc-200 min-w-399 min-h-550 h-auto max-h-[550px] w-auto max-w-[652px] flex-col rounded-2xl border bg-zinc-50 p-8 shadow-lg dark:bg-shapePrimary md:h-[550px] md:w-[612px]">
            <h1 className="flex justify-center text-2xl font-bold">
              Mande mensagem
            </h1>

            <form className="mt-6 flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Nome"
                  className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                />

                <input
                  id="email"
                  type="text"
                  placeholder="Sobrenome"
                  className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                />
              </div>

              <div className="flex flex-row gap-2">
                <input
                  id="email"
                  type="text"
                  placeholder="E-mail"
                  className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                />

                <input
                  id="email"
                  type="text"
                  placeholder="WhatsApp"
                  className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                />
              </div>

              <div className="flex flex-row gap-2">
                <input
                  id="email"
                  type="text"
                  placeholder="Empresa"
                  className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                />

                <input
                  id="email"
                  type="text"
                  placeholder="Qtd. de dispositivos"
                  className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                />
              </div>

              <textarea
                id="remarks"
                placeholder="Mensagem"
                className="h-32 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
              />

              <div className="flex items-center gap-2">
                <Checkbox id="terms1" />

                <span className="text-sm">
                  Declaro que li e concordo com a Política de Privacidade e os
                  Termos de Uso.
                </span>
              </div>

              <button className="bg-b-zinc-400 left-1/2 h-10 w-full rounded-xl bg-zinc-950 text-sm font-bold text-zinc-50 shadow-md transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 md:mt-10">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
