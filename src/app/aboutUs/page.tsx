'use client'

import Image from 'next/image'
import atmOutsourcing from '../../../public/atm_outsourcing.jpg'
import atmEvs from '../../../public/atm_evs_logo.jpg'
import atmHome from '../../../public/atm_home.jpg'
import grupoAtm from '../../../public/grupo_atm.png'
import valores from '../../../public/valores_atm.png'
import manoel from '../../../public/Manoel.png'
import toop from '../../../public/icon-white.png'
import logo from '../../../public/logo-white.png'

import {
  Handshake,
  Heart,
  House,
  Lightbulb,
  Smartphone,
  SmartphoneCharging,
  Sparkles,
} from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col gap-6 bg-zinc-950">
        <div className="flex flex-row items-center justify-between px-[15%]">
          <div className="flex w-[50%] flex-col gap-4">
            <h1 className="text-6xl font-bold text-blue-500">Quem Somos</h1>
            <div className="text-justify">
              A ATM Outsourcing foi fundada em 2007, atualmente, somos líderes
              no segmento de Outsourcing de mobilidade no Brasil. Fabricante de
              Smartphones corporativos homologados pela ANATEL e desenvolvedora
              de sistemas de MDM, a ATM Outsourcing é referência em soluções de
              mobilidade corporativa.
            </div>
          </div>
          <Image
            className="h-auto w-full rounded-xl md:w-[500px]"
            src={toop}
            alt="Example image"
          />
        </div>
        <div className="flex flex-col px-[15%] py-20">
          <div className="flex flex-row items-center gap-2 p-10">
            <h1 className="font-sans text-4xl">
              Objetivo e vantagens de usar o{' '}
            </h1>
            <Image
              className="h-auto w-full rounded-xl md:w-[150px]"
              src={logo}
              alt="Example image"
            />
          </div>
          <div className="flex flex-col gap-10 px-10">
            <div className="flex flex-row gap-10">
              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>

              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>

              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>

              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>
            </div>

            <div className="flex flex-row gap-10">
              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>

              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>

              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>

              <div className="max-w-[250px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nam quae voluptates quos possimus nisi eligendi! Inventore,
                reiciendis doloribus dolores modi corrupti earum veniam alias
                omnis amet? Magni, ipsa pariatur!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen flex-row items-center justify-center gap-6 bg-zinc-950 p-10">
        <div className="mb-4 md:mb-0 md:ml-16">
          <Image
            className="h-auto w-full rounded-xl md:w-[800px]"
            src={valores}
            alt="Example image"
          />
        </div>
        <div className="flex flex-col gap-8">
          <Image
            className="mb-10 h-auto w-full rounded-xl md:w-[700px]"
            src={grupoAtm}
            alt="Example image"
          />

          <div className="flex flex-row items-center justify-end gap-4 text-zinc-100">
            <Image
              className="mb-10 h-auto w-full rounded-xl md:w-[200px]"
              src={manoel}
              alt="Example image"
            />

            <div className="flex flex-col">
              <div className="text-2xl font-bold">Manoel de Cesare Filho</div>
              <div className="text-end">CEO ATM Outsourcing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[300px] items-center justify-center gap-8 bg-zinc-950 p-10 pb-32">
        <div className="flex min-w-[50%] flex-col items-center justify-center pl-10">
          <svg
            className="text-blue-600"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            height="8em"
            width="8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
          </svg>

          <h1 className="pb-4 text-4xl font-bold text-blue-600">Propósito</h1>
          <div className="font-sans text-xl text-blue-100">
            "Ajudar e inspirar com exemplo para dar sentido a vida em Deus."
          </div>
        </div>

        <div className="h-80 w-[1px] bg-gray-500"></div>

        <div className="flex flex-col items-center justify-center pl-10">
          <svg
            className="text-blue-600"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="8em"
            width="8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 7a5 5 0 1 0 5 5"></path>
            <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
            <path d="M15 6v3h3l3 -3h-3v-3z"></path>
            <path d="M15 9l-3 3"></path>
          </svg>

          <h1 className="pb-4 text-4xl font-bold text-blue-600">Missão</h1>

          <div className="font-sans text-xl text-blue-100">
            "A nossa missão é ajudar os clientes e colaboradores a garantirem
            uma qualidade de vida e realização no seu trabalho com suporte da
            tecnologia."
          </div>
        </div>
      </div>

      <div className="flex min-h-[200px] flex-col gap-2 bg-zinc-950 pb-20">
        <div className="text-center font-sans text-4xl">Nossos Valores</div>

        <div className="flex w-[100%] flex-row items-center justify-center gap-10 pt-10">
          <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full bg-zinc-50 text-blue-800 shadow-lg transition-all duration-300 ease-in-out hover:w-[800px] hover:items-start">
            <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
              <Heart
                size={80}
                className="items-center justify-center text-center"
              />
            </div>
            <div
              style={{ pointerEvents: 'none' }}
              className="pt-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            >
              <h1 className="text-3xl font-bold text-blue-800">Respeito</h1>
              <div className="absolute text-lg text-zinc-950">
                Amar o próximo com justiça, dedicação e empatia visando o
                crescimento da empresa para que tenhamos um clima leve e
                familiar.
              </div>
            </div>
          </div>

          <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full bg-zinc-50 text-blue-800 shadow-lg transition-all duration-300 ease-in-out hover:w-[850px] hover:items-start">
            <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
              <Sparkles size={80} className="text-blue-700" />
            </div>
            <div
              style={{ pointerEvents: 'none' }}
              className="pt-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            >
              <h1 className="text-3xl font-bold text-blue-800">
                Autenticidade
              </h1>
              <div className="absolute text-lg text-zinc-950">
                Agimos com integridade, pioneirismo, transparência,
                originalidade e responsabilidade social para oferecer a melhoria
                contínua aos nossos clientes e serviços.
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[100%] flex-row items-center justify-center gap-10 pt-10">
          <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full bg-zinc-50 text-blue-800 shadow-lg transition-all duration-300 ease-in-out hover:w-[800px] hover:items-start">
            <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
              <Lightbulb size={80} className="text-blue-800" />
            </div>
            <div
              style={{ pointerEvents: 'none' }}
              className="pt-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            >
              <h1 className="text-3xl font-bold text-blue-800">Inovação</h1>
              <div className="absolute text-lg text-zinc-950">
                Ser criativo, aperfeiçoar nossos produtos e desenvolver novas
                soluções para servir com eficiência nossos clientes e
                colaboradores.
              </div>
            </div>
          </div>

          <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full bg-zinc-50 text-blue-800 shadow-lg transition-all duration-300 ease-in-out hover:w-[850px] hover:items-start">
            <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
              <Handshake size={80} className="text-blue-800" />
            </div>
            <div
              className="pt-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ pointerEvents: 'none' }}
            >
              <h1 className="text-3xl font-bold text-blue-800">Confiança</h1>
              <div className="absolute text-lg text-zinc-950">
                É a certeza que o trabalho é realizado com união, competência,
                força e comprometimento garantindo a qualidade dos serviços para
                o sucesso do cliente.
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="pt-4 text-center font-sans text-4xl">
        Conheça mais sobre as outras nossas empresas:
      </h1>

      <div className="bg-zinc-9 flex min-h-[300px] items-center justify-center gap-32">
        <div className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl bg-zinc-950 text-zinc-50 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-500">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmOutsourcing}
            alt="Example image"
          />
          <Smartphone size="60" />
        </div>

        <div className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl bg-zinc-950 text-zinc-50 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-500">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmEvs}
            alt="Example image"
          />
          <SmartphoneCharging size="60" />
        </div>

        <div className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl bg-zinc-950 text-zinc-50 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-500">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmHome}
            alt="Example image"
          />
          <House size="60" />
        </div>
      </div>
    </div>
  )
}
