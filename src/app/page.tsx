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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const slides = [
  { id: '1', image: loreal },
  { id: '2', image: bombril },
  { id: '3', image: agili },
  { id: '4', image: amspec },
  { id: '5', image: tel },
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-zinc-950 min-h-[700px] max-h-[800px]">
        <div className="flex flex-row gap-64 px-8 py-4">
          <div className="flex flex-col items-start mt-24">
            <h1 className="text-left lg:text-5xl max-w-3xl">
              O sistema EMM que transforma a gestão de dispositivos em uma{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-cyan-blue">
                experiência prática e eficiente
              </span>
            </h1>
            <Image
              src={androidEMM}
              alt="emm"
              className="h-auto w-52 mt-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 container mx-auto mt-12 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-16">
            <Image
              className="rounded-lg w-full md:w-[2500px] h-auto"
              src={imageExample}
              alt="Example image"
            />
          </div>
          <div className="mr-11">
            <h2 className="text-3xl font-bold mb-11 text-center">
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

        <div className="flex flex-col md:flex-row items-center">
          <div className="mr-11">
            <h2 className="text-3xl font-bold mb-11 text-center text-zinc-100">
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
              className="rounded-lg w-full md:w-[2500px] h-auto"
              src={imageExample}
              alt="Example image"
            />
          </div>
        </div>

        <div className="mr-11 rounded-lg mt-20">
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
                    className="rounded-xl w-[300px] h-[180px]"
                    src={item.image}
                    alt="teste"
                    width={400}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-20 flex flex-row gap-4 items-center mr-20">
          <Image className="w-80 h-auto" src={enterprise} alt="enterprise" />

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-cyan-blue">
              TOOP Certificado pelo Android Enterprise
            </h3>

            <p className="text-zinc-300 text-lg">
              O TOOP é um produto recomendado pelo Android Enterprise,
              garantindo segurança, desempenho e compatibilidade para gestão de
              dispositivos e produtividade corporativa.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
