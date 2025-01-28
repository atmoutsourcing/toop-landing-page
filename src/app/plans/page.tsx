'use client'

import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/button'
import { WhatsappLogo } from 'phosphor-react'
import { TablePlans } from './tablePlans'

export default function Plans() {
  return (
    <div className="flex w-auto flex-col font-inter">
      <div className="flex min-h-[600px] flex-col items-center justify-center">
        <div
          className="absolute hidden h-[180%] w-[10%] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[230px] md:flex"
          style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
        />
        <div className="text-3xl font-bold dark:text-zinc-200 md:text-6xl">
          Veja nossos planos e escolha a melhor
        </div>
        <div className="text-3xl font-bold dark:text-zinc-200 md:text-6xl">
          solução para você!
        </div>
        <div className="flex flex-row items-center gap-1 pt-8">
          <div>
            Conheça também o plano{' '}
            <span className="font-bold underline">Enterprise</span>
          </div>

          <ArrowRight className="w-[20px]" />

          <button
            className="isolation-auto flex h-[45px] items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-50 px-6 py-3 text-[16px] font-bold text-shapePrimary shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-shapePrimary before:transition-all before:duration-700 hover:text-zinc-50 before:hover:left-0 before:hover:w-full dark:bg-shapePrimary dark:text-zinc-50 dark:before:bg-zinc-50 dark:hover:text-zinc-950"
            type="submit"
          >
            Saiba mais
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-8">
        <div className="flex min-h-[420px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 pb-8 dark:bg-shapePrimary">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />

              <p className="font-inter text-sm">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                FREE
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                Ideal para pequenas empresas ou equipes iniciando no
                gerenciamento de dispositivos móveis. Oferece funcionalidades
                básicas para controle e segurança sem custo.
              </p>
            </div>
          </div>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="mt-auto py-2 font-inter text-xl font-bold">
            R$ 0,00/mês
          </div>

          <div className="mt-auto flex justify-center">
            <Button variant="secondary" style={{ width: '100%' }}>
              Começar agora!
            </Button>
          </div>
        </div>

        <div className="mb-24 flex min-h-[420px] max-w-[380px] flex-col gap-3 rounded-3xl bg-shapePrimary px-5 pb-8 dark:bg-zinc-100">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <p className="font-inter text-sm text-zinc-50 dark:text-shapePrimary">
                Toop
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                PRO
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight text-zinc-300 dark:text-zinc-950">
                Ideal para pequenas empresas ou equipes iniciando no
                gerenciamento de dispositivos móveis. Oferece funcionalidades
                básicas para controle e segurança sem custo.
              </p>
            </div>
          </div>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="mt-auto py-2 font-inter text-xl font-bold text-zinc-300 dark:text-zinc-950">
            R$ 0,00/mês
          </div>

          <div className="mt-auto flex justify-center">
            <button
              style={{ width: '100%' }}
              className="rounded-full bg-zinc-50 px-6 py-3 text-[16px] font-bold text-shapePrimary dark:bg-zinc-950 dark:text-zinc-100"
            >
              Começar agora!
            </button>
          </div>
        </div>

        <div className="flex min-h-[420px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 pb-8 dark:bg-shapePrimary">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />

              <p className="font-inter text-sm">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                Ultra
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                Ideal para pequenas empresas ou equipes iniciando no
                gerenciamento de dispositivos móveis. Oferece funcionalidades
                básicas para controle e segurança sem custo.
              </p>
            </div>
          </div>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="mt-auto py-2 font-inter text-xl font-bold">
            R$ 0,00/mês
          </div>

          <div className="mt-auto flex justify-center">
            <Button variant="secondary" style={{ width: '100%' }}>
              Começar agora!
            </Button>
          </div>
        </div>
      </div>

      <div className="flex min-h-[400px] items-center justify-center px-[18%]">
        <TablePlans />
      </div>

      <div className="flex px-[10%] py-20">
        <div className="h-[1px] w-full bg-zinc-500" />
      </div>

      <div className="flex flex-row items-center justify-center gap-10 px-[18%] pb-20">
        <div className="flex max-w-[60%] flex-col">
          <div className="pb-10 text-2xl font-bold">
            Como funciona o plano{' '}
            <span className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
              Enterprise
            </span>{' '}
            ?
          </div>
          <div className="pb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            nisi placeat odio cupiditate ad, voluptatibus eligendi asperiores
            vel repudiandae cum aperiam nobis exercitationem. Sint beatae
            suscipit officia voluptate fuga accusamus!Lorem
          </div>
          <div className="pb-2 text-xl font-bold">Ficou com alguma dúvida?</div>
          <div className="flex flex-row items-center gap-3">
            Clique aqui e entre em contato{' '}
            <button className="flex flex-row items-center gap-1 rounded-full bg-shapePrimary px-6 py-3 text-[14px] font-bold text-zinc-100 dark:bg-zinc-50 dark:text-shapePrimary">
              <WhatsappLogo className="h-5 w-5 text-green-500" />
              WhatsApp
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-1 pt-3">
                <Image
                  src={iconWhite}
                  alt="Toop icon"
                  className="hidden h-8 w-8 dark:block"
                />

                <Image
                  src={iconDark}
                  alt="Toop icon"
                  className="block h-8 w-8 dark:hidden"
                />
                <p className="font-inter text-sm">Toop</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="flex items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                  ENTERPRISE
                </h1>

                <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                  Ideal para pequenas empresas ou equipes iniciando no
                  gerenciamento de dispositivos móveis. Oferece funcionalidades
                  básicas para controle.
                </p>
              </div>
            </div>

            <div className="py-2 font-inter text-xl font-bold">R$ 0,00/mês</div>

            <Button variant="secondary">Entre em contato</Button>

            <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

            <div className="flex flex-col gap-2 pt-4">
              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Controle limitado de dispositivos móveis, como rastreamento e
                bloqueio remoto.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Relatórios básicos com informações sobre dispositivos
                cadastrados.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Suporte gratuito através de fóruns e base de conhecimento.h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
