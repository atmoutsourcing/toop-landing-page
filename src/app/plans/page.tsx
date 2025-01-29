'use client'

import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import Image from 'next/image'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { Button } from '@/components/button'
import { WhatsappLogo } from 'phosphor-react'
import { TablePlans } from './tablePlans'

export default function Plans() {
  return (
    <div className="flex w-auto flex-col font-inter">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <div
          className="absolute hidden h-[180%] w-[10%] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[230px] md:flex"
          style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
        />

        <div
          className="absolute flex h-[400px] w-[200px] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[230px] md:hidden"
          style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
        />

        <div className="font-plusJakartaSans text-3xl font-bold dark:text-zinc-200 md:text-5xl">
          Veja nossos planos e escolha a melhor
        </div>
        <div className="font-plusJakartaSans text-3xl font-bold dark:text-zinc-200 md:text-5xl">
          solução para você!
        </div>
        <div className="flex flex-col items-center gap-1 pt-6 md:flex-row">
          <div>
            Conheça também o plano{' '}
            <span className="font-bold underline">Enterprise</span>
          </div>

          <ArrowRight className="hidden w-[20px] md:flex" />

          <button
            className="isolation-auto flex h-[45px] items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-50 px-6 py-3 text-[16px] font-bold text-shapePrimary shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-shapePrimary before:transition-all before:duration-700 hover:text-zinc-50 before:hover:left-0 before:hover:w-full dark:bg-shapePrimary dark:text-zinc-50 dark:before:bg-zinc-50 dark:hover:text-zinc-950"
            type="submit"
          >
            Saiba mais
          </button>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-10 md:flex-row md:items-start md:p-8">
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

        <div className="mx-4 flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary md:scale-110">
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
                Oferece uma solução simples e completa de forma gratuita, nosso
                plano Free permite que você faça controle dos dispositivos de
                forma segura e fornecendo relatórios.
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 0,00/mês</div>

          <Button variant="secondary">Contratar agora!</Button>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Controle limitado de dispositivos móveis, como rastreamento e
              bloqueio remoto.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios básicos com informações sobre dispositivos cadastrados.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Suporte gratuito através de fóruns e base de conhecimento.
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

      <div className="flex min-h-[400px] items-center justify-center px-[18%]">
        <TablePlans />
      </div>

      <div className="flex px-[10%] py-20">
        <div className="h-[1px] w-full bg-zinc-500" />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 px-[5%] pb-20 md:flex-row md:px-[18%]">
        <div className="flex flex-col text-center md:max-w-[60%] md:text-start">
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
          <div className="flex flex-col items-center gap-3 md:flex-row">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto ea dicta facere ipsam ab! Assumenda, excepturi?
                  Debitis sed accusantium nemo? Explicabo obcaecati soluta, ut
                  eligendi magni pariatur fugiat commodi sit?
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
