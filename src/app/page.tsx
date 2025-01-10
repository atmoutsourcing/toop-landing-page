'use client'

import Image from 'next/image'
import androidEMM from '../../public/androidEMM.png'
import imageExample from '../../public/DALL·E 2024-12-26 15.09.21 - A sleek and modern smartphone placed on a clean, white surface. The smartphone has a minimalistic design with a large edge-to-edge display, slim bezel.webp'
import loreal from '../../public/loreal.png'
import bombril from '../../public/bombril.png'
import agili from '../../public/AGILI-TELECOM.webp'
import amspec from '../../public/amspec.png'
import tel from '../../public/tel.png'
import enterprise from '../../public/enterpriseAndroid.png'
import benefits from '../../public/DALL·E 2025-01-10 09.08.11 - A modern and minimalistic website banner representing the benefits of an Enterprise Mobility Management (EMM) product called TOOP. The design includes.webp'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Check } from 'lucide-react'
import { Button } from './components/button'

const slides = [
  { id: '1', image: loreal },
  { id: '2', image: bombril },
  { id: '3', image: agili },
  { id: '4', image: amspec },
  { id: '5', image: tel },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-905 max-h-[800px] min-h-[700px] flex-col bg-zinc-950 p-10">
        <h1 className="max-w-3xl text-left text-zinc-100 lg:text-5xl">
          O sistema EMM que transforma a gestão de dispositivos em uma{' '}
          <span className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text text-transparent">
            experiência prática e eficiente
          </span>
        </h1>
      </div>

      <div>
        <div className="flex flex-col items-start px-20 py-20 md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-16">
            <Image
              className="h-auto w-full rounded-xl md:w-[1500px]"
              src={imageExample}
              alt="Example image"
            />
          </div>

          <div className="flex flex-col gap-14">
            <span className="flex justify-center text-3xl font-bold tracking-tighter">
              O porquê de empresas adorarem o TOOP
            </span>

            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumLorem Ipsum is simply dummy text of the printing and
            </p>
          </div>
        </div>

        <div className="bg-zinc-9 mt-12 flex flex-col border-t border-zinc-950 bg-zinc-900 p-10">
          <p className="flex justify-center text-3xl font-bold tracking-tighter text-zinc-100">
            Parceiros que confiam no TOOP
          </p>

          <div className="ml-24 mr-24 mt-20 rounded-lg">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {slides.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/3 lg:basis-1/4"
                  >
                    <Image
                      className="h-[140px] w-[250px] rounded-xl"
                      src={item.image}
                      alt="teste"
                      width={400}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="space-y-12 px-20 py-20">
          <span className="flex justify-center text-4xl font-bold tracking-tighter">
            Quais são os beneficios de usar o TOOP?
          </span>

          <div className="mt-11 flex flex-col md:flex-row">
            <div className="flex flex-col gap-14">
              <p className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem IpsumLorem Ipsum is simply dummy text of the printing and
              </p>
            </div>

            <div className="mb-4 md:mb-0 md:ml-16">
              <Image
                className="h-auto w-full rounded-xl md:w-[4500px]"
                src={benefits}
                alt="Example image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 

      <div className="container mx-auto mt-12 flex flex-col gap-20 px-2">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-16">
            <Image
              className="h-auto w-full rounded-xl md:w-[2000px]"
              src={imageExample}
              alt="Example image"
            />
          </div>
          <div className="mr-11">
            <h2 className="mb-11 text-center text-3xl font-bold">
              Título da Seção
            </h2>
            <p className="text-justify text-lg text-zinc-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <div className="mr-11">
            <h2 className="mb-11 text-center text-3xl font-bold text-zinc-100">
              Título da Seção
            </h2>
            <p className="text-justify text-lg text-zinc-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="mb-4 md:mb-0 md:mr-16">
            <Image
              className="h-auto w-full rounded-xl md:w-[2000px]"
              src={imageExample}
              alt="Example image"
            />
          </div>
        </div>

        <div className="ml-24 mr-24 mt-20 rounded-lg">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {slides.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/3 lg:basis-1/4"
                >
                  <Image
                    className="h-[140px] w-[250px] rounded-xl"
                    src={item.image}
                    alt="teste"
                    width={400}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mr-20 mt-20 flex flex-row items-center gap-4">
          <Image className="h-auto w-72" src={enterprise} alt="enterprise" />

          <div className="flex flex-col gap-4">
            <h3 className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text text-lg font-bold text-transparent">
              TOOP Certificado pelo Android Enterprise
            </h3>

            <p className="text-base text-zinc-300">
              O TOOP é um produto recomendado pelo Android Enterprise,
              garantindo segurança, desempenho e compatibilidade para gestão de
              dispositivos e produtividade corporativa.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <span className="flex flex-col items-center text-3xl font-bold tracking-tighter text-zinc-100">
            Conheça nossos planos
          </span>

          <div className="flex flex-row justify-center gap-5">
            <div className="flex min-h-[728px] min-w-96 max-w-96 flex-col items-center rounded-3xl bg-zinc-950 px-2 py-8 transition-transform duration-300 hover:scale-105">
              <h1 className="font-semibold">Enterprise Light</h1>

              <span>
                <Check className="" />
              </span>
            </div>

            <div className="flex min-h-[728px] min-w-96 max-w-96 rounded-3xl bg-zinc-950 transition-transform duration-300 hover:scale-105"></div>

            <div className="flex min-h-[728px] min-w-96 max-w-96 rounded-3xl bg-zinc-950 transition-transform duration-300 hover:scale-105"></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
