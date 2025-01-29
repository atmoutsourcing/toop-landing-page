'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Play } from 'lucide-react'
import React from 'react'
import manoel from '../../../public/Manoel.png'
import recepcao from '../../../public/recepcaoATM.jpeg'
import manoelAtm from '../../../public/ManoelATm.jpg'

import valores from '../../../public/valores_atm.png'

import Image from 'next/image'

export default function AboutUs() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  )

  return (
    <div className="flex flex-col font-inter">
      <div className="group relative flex min-h-[600px] cursor-pointer flex-col items-center justify-center overflow-hidden group-hover:duration-1000 md:px-56">
        <h1
          style={{ zIndex: '100' }}
          className="text-center text-3xl font-bold dark:text-zinc-200 md:text-5xl"
        >
          Conectando eficiência e segurança para{' '}
        </h1>
        <h1
          style={{ zIndex: '10' }}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          <span className="text-yellow-400">transformar</span> sua gestão!
        </h1>
        <div className="absolute flex h-[140px] w-[213px] bg-blue-500 blur-[100px] before:rounded-full md:hidden" />

        <div className="hidden before:absolute before:left-[25%] before:top-[40%] before:h-[204px] before:w-[213px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-500 before:blur-[120px] before:duration-1000 group-hover:before:translate-x-[350%] md:flex" />
        <div className="hidden before:absolute before:left-[68%] before:top-[55%] before:h-[168px] before:w-[151px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-600 before:blur-[120px] before:duration-1000 group-hover:before:translate-x-[-500%] md:flex" />
      </div>

      <div className="flex h-[205px] w-full flex-col items-center pl-10 md:p-0">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full max-w-[80%]"
        >
          <CarouselContent>
            <CarouselItem className="pt-10 md:basis-1/2 lg:basis-1/4">
              <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-blue-500 dark:text-blue-800">
                  +72.544
                </h1>
                <p className="text-[16px]">Smarthphones gerenciados</p>
              </div>
            </CarouselItem>

            <CarouselItem className="pt-10 md:basis-1/2 lg:basis-1/4">
              <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-blue-500 dark:text-blue-800">
                  +38.025
                </h1>
                <p className="text-[16px]">Manutenções feitas</p>
              </div>
            </CarouselItem>

            <CarouselItem className="pt-10 md:basis-1/2 lg:basis-1/4">
              <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-blue-500 dark:text-blue-800">
                  +6.633
                </h1>
                <p className="text-[16px]">Logísticas reversas</p>
              </div>
            </CarouselItem>

            <CarouselItem className="pt-10 md:basis-1/2 lg:basis-1/4">
              <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-blue-500 dark:text-blue-800">
                  +1.977
                </h1>
                <p className="text-[16px]">Reposições por roubo</p>
              </div>
            </CarouselItem>

            <CarouselItem className="pt-10 md:basis-1/2 lg:basis-1/4">
              <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-blue-500 dark:text-blue-800">
                  +28.070
                </h1>
                <p className="text-[16px]">Pedidos enviados</p>
              </div>
            </CarouselItem>

            <CarouselItem className="pt-10 md:basis-1/2 lg:basis-1/4">
              <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold text-blue-500 dark:text-blue-800">
                  +9.463
                </h1>
                <p className="text-[16px]">Telas substituídas</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col items-center py-10 text-center dark:text-zinc-300">
        <div className="flex flex-col pb-10 text-xl font-bold md:text-3xl">
          <div>Toop</div>
          <div>Inovação e Agilidade</div>
        </div>

        <div className="max-w-[80%] pb-16 text-xs md:max-w-[50%] md:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          itaque consequuntur perspiciatis et ut veniam facilis nemo libero
          voluptatibus tempora, animi iusto nesciunt reprehenderit obcaecati
          sapiente. Sunt natus iure atque. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Earum voluptate perferendis eveniet
          numquam consequatur eligendi fugiat pariatur quasi aut nostrum veniam,
          magnam officiis aperiam similique iste ipsa, consectetur asperiores.
          Nostrum!
        </div>

        <div className="flex h-[350px] w-[50%] items-center justify-center rounded-3xl bg-zinc-600 dark:bg-zinc-50">
          <Play className="dark:text-zinc-950" />
        </div>
      </div>

      <div className="flex flex-col items-center pt-10">
        <Image src={manoel} alt="foto do Manoel" className="w-56" />
        <div className="text-2xl font-bold dark:text-zinc-200 md:text-3xl">
          Manoel de Cesare Filho
        </div>
        <div className="text-base dark:text-zinc-200 md:text-lg">
          CEO ATM Outsourcing
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 px-[10%] py-20">
        <div className="h-[1px] w-full bg-gray-500" />
      </div>

      <div className="hidden flex-col gap-[100px] px-[20%] md:flex">
        <div className="relative flex flex-row">
          <div className="absolute inset-0 left-[-20px] top-[80px] -z-10 h-[200px] w-[250px] rounded-xl bg-blue-500 dark:bg-blue-800" />

          <Image
            src={recepcao}
            alt="imagem atm"
            className="w-[350px] rounded-xl"
          />
          <div className="flex items-center justify-center pl-10 text-left text-sm font-bold dark:text-zinc-300">
            A ATM Outsourcing foi fundada em 2007, atualmente, somos líderes no
            segmento de Outsourcing de mobilidade no Brasil. Fabricante de
            Smartphones corporativos homologados pela ANATEL e desenvolvedora de
            sistemas de MDM, a ATM Outsourcing é referência em soluções de
            mobilidade corporativa.
          </div>
        </div>

        <div className="relative flex flex-row justify-end pl-[20%]">
          <div className="flex flex-col justify-center pr-10 text-sm font-bold dark:text-zinc-300">
            <h1 className="pb-4 text-right text-2xl">
              Somos a{' '}
              <span className="text-blue-500 dark:text-blue-800">
                ATM Outsourcing
              </span>
            </h1>
            <p className="text-right text-xl">a solução mais completa</p>
            <p className="text-right text-xl">em telefonia móvel corporativa</p>
          </div>

          <div className="absolute inset-0 left-[75%] top-[35%] -z-10 h-[72%] w-[27%] rounded-xl bg-blue-500 dark:bg-blue-800" />

          <Image
            src={manoelAtm}
            alt="imagem atm"
            className="flex w-[350px] rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={recepcao}
            alt="imagem atm"
            className="w-[350px] rounded-3xl"
          />
          <div className="absolute inset-0 left-[2%] top-[240%] -z-10 h-[200px] w-[250px] rounded-xl bg-blue-500 dark:bg-blue-800" />

          <div className="flex px-10 pt-10 text-center text-sm font-bold dark:text-zinc-300">
            A ATM Outsourcing foi fundada em 2007, atualmente, somos líderes no
            segmento de Outsourcing de mobilidade no Brasil. Fabricante de
            Smartphones corporativos homologados pela ANATEL e desenvolvedora de
            sistemas de MDM, a ATM Outsourcing é referência em soluções de
            mobilidade corporativa.
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20 md:hidden">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={manoelAtm}
            alt="imagem atm"
            className="w-[350px] rounded-3xl"
          />
          <div className="absolute inset-0 left-[38%] top-[310%] -z-10 h-[200px] w-[250px] rounded-xl bg-blue-500 dark:bg-blue-800" />

          <div className="flex flex-col justify-center text-sm font-bold dark:text-zinc-300">
            <h1 className="pb-2 pt-10 text-center text-2xl">
              Somos a{' '}
              <span className="text-blue-500 dark:text-blue-800">
                ATM Outsourcing
              </span>
            </h1>
            <p className="text-center text-xl">a solução mais completa</p>
            <p className="text-center text-xl">
              em telefonia móvel corporativa
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 px-[10%] py-20">
        <div className="hidden h-[1px] w-full bg-gray-500 md:block" />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 pb-20 md:min-h-[700px] md:flex-row">
        <div className="flex flex-col items-center rounded-full border p-10 shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] md:h-[550px] md:max-w-[360px] md:rounded-xl">
          <svg
            className="h-[100px] w-[100px] text-blue-500 dark:text-blue-800 md:h-[150px] md:w-[150px]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
          </svg>
          <p className="pb-2 text-2xl font-bold text-blue-500 dark:text-blue-800 md:pb-10 md:text-4xl">
            Propósito
          </p>
          <p className="w-[200px] text-center md:w-auto">
            “Ajudar e inspirar com exemplo para dar sentido a vida em Deus.”
          </p>
        </div>

        <div className="flex flex-col items-center rounded-full border p-10 shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] md:h-[550px] md:max-w-[360px] md:rounded-xl">
          <svg
            className="h-[100px] w-[100px] text-blue-500 dark:text-blue-800 md:h-[150px] md:w-[150px]"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 7a5 5 0 1 0 5 5"></path>
            <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
            <path d="M15 6v3h3l3 -3h-3v-3z"></path>
            <path d="M15 9l-3 3"></path>
          </svg>
          <p className="pb-2 text-2xl font-bold text-blue-500 dark:text-blue-800 md:pb-10 md:text-4xl">
            Missão
          </p>
          <p className="w-[300px] pb-10 text-center md:w-auto">
            “A nossa missão é ajudar os clientes e colaboradores a garantirem
            uma qualidade de vida e realização no seu trabalho com suporte da
            tecnologia.”
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 pb-20 md:flex-row">
        <Image src={valores} alt="Valores" className="w-[60%] md:w-[30%]" />
      </div>
    </div>
  )
}
