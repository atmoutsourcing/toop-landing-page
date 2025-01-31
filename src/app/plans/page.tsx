'use client'

import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import Image from 'next/image'
import { Check, Clock } from 'lucide-react'
import { Button } from '@/components/button'
import Link from 'next/link'
// import { WhatsappLogo } from 'phosphor-react'
// import { TablePlans } from './tablePlans'

export default function Plans() {
  return (
    <div className="flex h-auto w-full flex-col font-inter">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <div
          className="absolute mb-10 hidden h-[150px] w-[90%] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[150px] md:flex"
          style={{ transform: 'rotate(20deg)', zIndex: '-1' }}
        />

        <div
          className="absolute flex h-[400px] w-[200px] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[230px] md:hidden"
          style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
        />

        <Image
          src={iconWhite}
          alt="Toop icon"
          className="hidden h-28 w-28 dark:block"
        />

        <Image
          src={iconDark}
          alt="Toop icon"
          className="block h-28 w-28 dark:hidden"
        />

        <div className="font-plusJakartaSans text-3xl font-bold dark:text-zinc-200 md:text-5xl">
          Veja nossos planos e escolha a melhor
        </div>
        <div className="mb-[12.5%] font-plusJakartaSans text-3xl font-bold dark:text-zinc-200 md:text-5xl">
          <span className="text-yellow-400">solução</span> para você!
        </div>
      </div>

      <div className="relative flex h-full flex-col items-center justify-center gap-10 pb-[5%] md:flex-row md:items-start">
        <div className="mx-4 mt-4">
          <div
            className="absolute flex min-h-[450px] w-[95%] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300 md:w-[380px]"
            style={{ zIndex: '1' }}
          >
            <Clock className="h-[40px] w-[40px]" />
            Disponível em breve
          </div>
          <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 opacity-[.25] blur-[5px] dark:bg-shapePrimary">
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
                  PRO
                </h1>

                <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                  Solução robusta para empresas que buscam gerenciar aplicativos
                  e dispositivos de forma integrada, com análises avançadas e
                  suporte especializado.
                </p>
              </div>
            </div>

            <div className="py-2 font-inter text-xl font-bold">
              R$ **,**/mês
            </div>

            <Button variant="secondary">Contratar agora!</Button>

            <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

            <div className="flex flex-col gap-2 pt-4">
              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Configuração de políticas de segurança e restrições de uso para
                dispositivos.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Relatórios básicos com informações sobre dispositivos
                cadastrados.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Atendimento por e-mail com prioridade para resolução de
                problemas
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 p-4 px-5 dark:bg-shapePrimary md:scale-110">
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

              <p className="font-inter text-sm font-semibold">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                FREE
              </h1>

              <p className="space-y-4 font-inter text-sm font-bold leading-tight dark:text-zinc-400">
                100% Gratuito até o fim de 2025!!
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 0,00/mês</div>

          <Link href="https://wa.me/5518996187681">
            <button className="w-full rounded-full bg-zinc-950 px-6 py-3 text-[14px] font-bold text-zinc-50 duration-500 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
              Contratar agora!
            </button>
          </Link>

          <div className="mt-4 h-[1px] w-full bg-gray-500" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <span className="text-sm">
                🎉 Boas notícias! Todas as features do TOOP estão 100% liberadas
                para você aproveitar ao máximo! 🚀💙
              </span>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-4">
          <div
            className="absolute flex min-h-[450px] w-[95%] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300 md:w-[380px]"
            style={{ zIndex: '1' }}
          >
            <Clock className="h-[40px] w-[40px]" />
            Disponível em breve
          </div>

          <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 opacity-[.25] blur-[5px] dark:bg-shapePrimary">
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
                  ULTRA
                </h1>

                <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                  Implantação e gerenciamento de aplicativos corporativos
                  remotamente.
                </p>
              </div>
            </div>

            <div className="py-2 font-inter text-xl font-bold">
              R$ **,**/mês
            </div>

            <Button variant="secondary">Contratar agora!</Button>

            <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

            <div className="flex flex-col gap-2 pt-4">
              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Relatórios preditivos sobre vulnerabilidades e riscos de
                segurança.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Relatórios básicos com informações sobre dispositivos
                cadastrados.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Sessões exclusivas para capacitação da equipe de TI no uso da
                plataforma.h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex min-h-[400px] items-center justify-center px-[18%]">
        <TablePlans />
      </div> */}

      {/* <div className="flex px-[10%] py-20">
        <div className="h-[1px] w-full bg-zinc-500" />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 px-[5%] pb-20 md:flex-row md:px-[18%]">
        <div className="flex flex-col text-center md:max-w-[60%] md:text-start">
          <div className="pb-4 text-2xl font-bold">
            Como funciona o plano{' '}
            <span className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
              Enterprise
            </span>{' '}
            ?
          </div>
          <div className="pb-14 text-zinc-300">
            O plano Enterprise permitirá que você ofereça o Toop para outras
            empresas, possibilitando sua comercialização e expansão.
          </div>
          <div className="pb-2 text-xl font-bold">Ficou com alguma dúvida?</div>
          <div className="flex flex-col items-center gap-3 text-zinc-300 md:flex-row">
            Clique aqui e entre em contato{' '}
            <button className="flex flex-row items-center gap-1 rounded-full bg-shapePrimary px-6 py-3 text-[14px] font-bold text-zinc-100 dark:bg-zinc-50 dark:text-shapePrimary">
              <WhatsappLogo className="h-5 w-5 text-green-500" />
              WhatsApp
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex max-w-[700px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 pb-5 dark:bg-shapePrimary">
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
                  Nosso plano Enterprise foi desenvolvido para empresas que
                  desejam levar o Toop a um novo nível. Com essa modalidade,
                  você poderá oferecer a plataforma para outras organizações,
                  possibilitando sua comercialização e ampliação do alcance.
                </p>
              </div>
            </div>

            <div className="py-2 font-inter text-xl font-bold">R$ 0,00/mês</div>

            <Button variant="secondary">Contratar agora!</Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
