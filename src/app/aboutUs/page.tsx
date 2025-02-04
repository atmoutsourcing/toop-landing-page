'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import manoel from '../../../public/Manoel.png'
import recepcao from '../../../public/recepcaoATM.jpeg'
import pessoalAtm from '../../../public/pessoalAtm.png'

import iconeWhite from '../../../public/icon-white.png'
import iconeDark from '../../../public/icon-dark.png'

import valores from '../../../public/valores_atm.png'

import Image from 'next/image'

export default function AboutUs() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  )

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col font-inter">
      <div className="group mb-80 mt-52 flex cursor-pointer flex-col items-center justify-center overflow-hidden group-hover:duration-1000 md:px-56">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={iconeWhite}
            alt="Toop icon"
            className="hidden h-28 w-28 dark:block"
          />

          <Image
            src={iconeDark}
            alt="Toop icon"
            className="block h-28 w-28 dark:hidden"
          />

          <h1
            style={{ zIndex: '100' }}
            className="flex text-center font-plusJakartaSans text-3xl font-bold md:text-start md:text-4xl"
          >
            Conectando eficiência e segurança para{' '}
          </h1>
        </div>

        <h1
          style={{ zIndex: '10' }}
          className="flex justify-center gap-2 text-center font-plusJakartaSans text-3xl font-bold md:text-start md:text-4xl"
        >
          transformar sua gestão impulsionar resultados.
        </h1>
        <div
          className="absolute flex h-[200px] w-[200px] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[130px] md:hidden"
          style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
        />
        <div className="absolute flex h-auto w-[100%] items-center justify-center gap-[35%] px-[10%]">
          <div className="mb-10 hidden h-[204px] w-[213px] rounded-full bg-blue-500 blur-[120px] md:flex" />
          <div className="mt-36 hidden h-[204px] w-[213px] rounded-full bg-blue-500 blur-[120px] md:flex" />
        </div>
      </div>

      <div className="flex h-[205px] w-full flex-col items-center pl-10 md:px-[5%]">
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

      <div className="flex flex-col items-center pt-10">
        <Image src={manoel} alt="foto do Manoel" className="w-56" />
        <div className="text-2xl font-bold dark:text-zinc-200 md:text-3xl">
          Manoel de Cesare Filho
        </div>
        <div className="text-base dark:text-zinc-200 md:text-lg">
          CEO ATM Outsourcing
        </div>
      </div>

      <div className="flex flex-col items-center pt-5 text-center dark:text-zinc-300 md:py-10">
        <iframe
          className="h-[200px] w-[80%] rounded-3xl md:h-[450px] md:w-[40%] md:min-w-[750px]"
          src="https://www.youtube.com/embed/YK_ZRNtf_U4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col items-center gap-8 px-[10%] py-20">
        <div className="h-[1px] w-full bg-gray-500" />
      </div>

      <div className="hidden flex-col gap-[100px] px-[15%] md:flex">
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

        <div className="relative flex flex-row justify-end pl-[10%]">
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

          <div className="absolute inset-0 left-[77.4%] top-[35%] -z-10 h-[72%] w-[25%] rounded-xl bg-blue-500 dark:bg-blue-800" />

          <Image
            src={pessoalAtm}
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
          <div className="absolute inset-0 left-[2%] top-[240%] -z-10 hidden h-[200px] w-[250px] rounded-xl bg-blue-500 dark:bg-blue-800 md:flex" />

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
            src={pessoalAtm}
            alt="imagem atm"
            className="w-[350px] rounded-3xl"
          />
          <div className="absolute inset-0 left-[38%] top-[310%] -z-10 hidden h-[200px] w-[250px] rounded-xl bg-blue-500 dark:bg-blue-800 md:flex" />

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

      <div className="flex items-center justify-center gap-10 pb-20 md:flex-row">
        <Image src={valores} alt="Valores" className="w-[60%] md:w-[30%]" />
      </div>
    </div>
  )
}
