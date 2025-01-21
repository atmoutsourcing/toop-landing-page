'use client'

import Image from 'next/image'
import imageExample from '../../public/DALL·E 2024-12-26 15.09.21 - A sleek and modern smartphone placed on a clean, white surface. The smartphone has a minimalistic design with a large edge-to-edge display, slim bezel.webp'
import loreal from '../../public/loreal.png'
import bombril from '../../public/bombril.png'
import agili from '../../public/AGILI-TELECOM.webp'
import amspec from '../../public/amspec.png'
import tel from '../../public/tel.png'
import iconWhite from '../../public/icon-white.png'
import { InstagramLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react'
import logo from '../../public/logo-white.png'
import seloSilverPartner from '../../public/Selo Silver Partner do Google.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import {
  CalendarDays,
  Check,
  Copyright,
  Lock,
  Mail,
  MapPin,
  NotebookPen,
  Phone,
} from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'
import { Button } from '../components/button'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const slides = [
  { id: '1', image: loreal },
  { id: '2', image: bombril },
  { id: '3', image: agili },
  { id: '4', image: amspec },
  { id: '5', image: tel },
  { id: '6', image: amspec },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-905 max-h-[800px] min-h-[700px] flex-col bg-zinc-950 p-10">
        <h1 className="font-barlow max-w-3xl text-left text-xl text-zinc-100 lg:text-5xl">
          O sistema EMM que transforma a gestão de dispositivos em uma{' '}
          <span className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text text-xl text-transparent lg:text-5xl">
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
            <span className="flex justify-center text-xl tracking-tighter md:text-3xl">
              O porquê de empresas adorarem o TOOP
            </span>

            <p className="text-sm md:text-lg">
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
          <p className="flex justify-center text-xl font-bold tracking-tighter text-zinc-100 md:text-3xl">
            Parceiros que confiam no TOOP
          </p>

          <div className="ml-24 mr-24 mt-20 rounded-lg">
            <Carousel
              opts={{
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
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="space-y-10 py-20 md:space-y-32 md:px-20">
          <span className="flex justify-center text-xl font-bold tracking-tighter md:text-4xl">
            Quais são os beneficios de usar o TOOP?
          </span>

          <div className="flex flex-col items-center">
            <div className="align-start flex flex-row">
              <span>teste</span>

              <div className="flex items-center justify-center gap-60">
                <span>teste</span>

                <div className="flex h-[680px] w-[340px] items-center justify-center rounded-xl bg-zinc-950">
                  <span className="font-bold">mockup</span>
                </div>

                <span>teste</span>
              </div>

              <span>teste</span>
            </div>
          </div>
        </div>

        <div className="mt-28 flex justify-center gap-6">
          <div className="relative flex min-h-[728px] min-w-[415] max-w-96 flex-col rounded-3xl bg-zinc-950 p-6">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-1">
                <Image
                  className="h-8 w-8 rounded-xl"
                  src={iconWhite}
                  alt="toopIcon"
                />

                <h1 className="text-medium items-center font-sans font-bold text-zinc-200">
                  Toop
                </h1>
              </div>

              <h1 className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text font-sans text-2xl font-bold text-transparent">
                FREE
              </h1>

              <span className="text-sm font-bold text-zinc-100">
                R$ 00,00/mês
              </span>
            </div>

            <hr className="my-4 w-full border-t border-zinc-700" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Gestão de equipamentos do cliente</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Voz e dados ilimitado</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform">
              <Button variant="plans">Contratar agora!</Button>
            </div>
          </div>

          <div className="relative flex min-h-[728px] min-w-[415] max-w-96 flex-col rounded-3xl bg-zinc-950 p-6">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-1">
                <Image
                  className="h-8 w-8 rounded-xl"
                  src={iconWhite}
                  alt="toopIcon"
                />

                <h1 className="text-medium items-center font-sans font-bold text-zinc-200">
                  Toop
                </h1>
              </div>

              <h1 className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text font-sans text-2xl font-bold text-transparent">
                LIGHT
              </h1>

              <span className="text-sm font-bold text-zinc-100">
                R$ 21,90/mês
              </span>
            </div>

            <hr className="my-4 w-full border-t border-zinc-700" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Gestão de equipamentos do cliente</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Voz e dados ilimitado</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>
            </div>

            <div className="align-end absolute bottom-8 left-1/2 flex -translate-x-1/2 transform">
              <Button variant="plans">Contratar agora!</Button>
            </div>
          </div>

          <div className="relative flex min-h-[728px] min-w-[415] max-w-96 flex-col rounded-3xl bg-zinc-950 p-6">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-1">
                <Image
                  className="h-8 w-8 rounded-xl"
                  src={iconWhite}
                  alt="toopIcon"
                />

                <h1 className="text-medium items-center font-sans font-bold text-zinc-200">
                  Toop
                </h1>
              </div>

              <h1 className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text font-sans text-2xl font-bold text-transparent">
                PRO
              </h1>

              <span className="text-sm font-bold text-zinc-100">
                R$ 27,90/mês
              </span>
            </div>

            <hr className="my-4 w-full border-t border-zinc-700" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Gestão de equipamentos do cliente</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Voz e dados ilimitado</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Lock className="size-4 flex-shrink-0 text-zinc-400" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>
            </div>

            <div className="align-end absolute bottom-8 left-1/2 flex -translate-x-1/2 transform">
              <Button variant="plans">Contratar agora!</Button>
            </div>
          </div>

          <div className="relative flex min-h-[728px] min-w-[415] max-w-96 flex-col rounded-3xl bg-zinc-950 p-6">
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-1">
                <Image
                  className="h-8 w-8 rounded-xl"
                  src={iconWhite}
                  alt="toopIcon"
                />

                <h1 className="text-medium items-center font-sans font-bold text-zinc-200">
                  Toop
                </h1>
              </div>

              <h1 className="animate-gradient-cyan-blue bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-[length:200%_200%] bg-clip-text font-sans text-2xl font-bold text-transparent">
                ENTERPRISE
              </h1>

              <span className="text-sm font-bold text-zinc-100">
                R$ 34,90/mês
              </span>
            </div>

            <hr className="my-4 w-full border-t border-zinc-700" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Gestão de equipamentos do cliente</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Voz e dados ilimitado</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>

              <div className="flex flex-row gap-2 text-sm">
                <Check className="size-4 flex-shrink-0 text-green-500" />

                <span>Aluguel do smartphone ATM X50 Ultra</span>
              </div>
            </div>

            <div className="align-end absolute bottom-8 left-1/2 flex -translate-x-1/2 transform">
              <Button variant="plans">Entre em contato</Button>
            </div>
          </div>
        </div>

        <div className="mt-36 flex flex-col items-center justify-center gap-8">
          <h1 className="font-sans text-4xl font-bold tracking-tighter text-zinc-50">
            Contato rápido
          </h1>

          <hr className="my-4 w-[1700px] border-t border-zinc-700" />

          <div className="flex flex-row gap-24">
            <div className="flex w-[500px] flex-col items-center gap-2 rounded-2xl bg-zinc-900 p-10">
              <NotebookPen className="h-11 w-11" />

              <span className="flex font-sans text-2xl font-bold tracking-tighter">
                Nos solicite uma proposta
              </span>

              <hr className="my-4 w-full border-t border-zinc-700" />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    className="w-[400px] rounded-lg bg-zinc-800 px-4 py-3 placeholder:text-zinc-300 focus:outline-none"
                    placeholder="Nome"
                  />

                  <input
                    className="w-[400px] rounded-lg bg-zinc-800 px-4 py-3 placeholder:text-zinc-300 focus:outline-none"
                    placeholder="E-mail"
                  />

                  <textarea
                    placeholder="Mensagem"
                    className="h-[160px] w-[400px] resize-none rounded-lg bg-zinc-800 p-3 px-4 align-top placeholder:text-zinc-300 focus:outline-none"
                  />
                </div>

                <button className="w-full items-center rounded-lg bg-zinc-300 px-4 py-4 text-lg font-bold text-zinc-900 transition duration-200 hover:bg-zinc-400">
                  Solicitar proposta
                </button>
              </div>
            </div>

            <div className="flex w-[500px] flex-col items-center gap-2 rounded-2xl bg-zinc-900 p-10">
              <span className="flex font-sans text-2xl font-bold tracking-tighter">
                Atendimento rápido
              </span>

              <hr className="my-4 w-full border-t border-zinc-700" />

              <span className="flex text-lg font-medium text-zinc-100">
                Estamos comprometidos com a agilidade e <br /> excelência no
                atendimento: resolvemos 95% dos <br />
                chamados em até 10 minutos e alcançamos <br />
                100% de solução em até 8 horas, porque a sua satisfação é nossa
                prioridade.
              </span>

              <div className="mt-auto w-full">
                <button className="w-full items-center rounded-lg bg-zinc-300 px-4 py-4 text-lg font-bold text-zinc-900 transition duration-200 hover:bg-zinc-400">
                  Chamar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-36 flex items-center justify-center gap-6">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center gap-12">
              <h1 className="text-4xl font-bold tracking-tighter text-zinc-50">
                Dúvidas frequentes
              </h1>

              <Accordion type="single" collapsible className="min-w-[900px]">
                <AccordionItem className="border-b-zinc-600" value="item-1">
                  <AccordionTrigger className="text-zinc-50">
                    O que é MDM?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-b-zinc-600" value="item-2">
                  <AccordionTrigger>O que é o TOOP?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-b-zinc-600" value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* <div className="mt-36 flex h-[550px] w-full flex-col gap-8 bg-zinc-950 p-12 px-48">
          <div className="flex flex-row">
            <div className="mr-36 flex-shrink-0">
              <Image className="h-auto w-36" src={logo} alt="logo" />
            </div>

            <div className="grid grid-cols-4 gap-24">
              <div className="flex flex-col items-center gap-2">
                <div>
                  <span className="text-base font-bold text-zinc-400 underline underline-offset-4">
                    Links úteis
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="flex cursor-pointer items-center gap-2 text-sm font-bold text-zinc-300 hover:text-zinc-400 hover:underline">
                    Suporte
                  </span>

                  <span className="flex cursor-pointer items-center gap-2 text-sm font-bold text-zinc-300 hover:text-zinc-400 hover:underline">
                    Planos
                  </span>

                  <span className="flex cursor-pointer items-center gap-2 text-sm font-bold text-zinc-300 hover:text-zinc-400 hover:underline">
                    Contatos
                  </span>

                  <span className="flex cursor-pointer items-center gap-2 text-sm font-bold text-zinc-300 hover:text-zinc-400 hover:underline">
                    Sobre nós
                  </span>

                  <span className="flex cursor-pointer items-center gap-2 text-sm font-bold text-zinc-300 hover:text-zinc-400 hover:underline">
                    Blog
                  </span>
                </div>
              </div>

              <div className="font-roboto flex flex-col text-xl font-bold tracking-tighter">
                <div className="flex flex-col items-center gap-2">
                  <div>
                    <span className="text-base font-bold text-zinc-400 underline underline-offset-4">
                      Escritório São Paulo - SP
                    </span>
                  </div>

                  <div className="space-y-4">
                    <span className="flex items-center gap-2 text-sm text-zinc-300">
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      Rua Arandu, 566 - Brooklin São Paulo - SP, 04562-031
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-roboto flex flex-col text-lg font-bold tracking-tighter">
                <div className="flex flex-col items-center gap-2">
                  <div>
                    <span className="text-base font-bold text-zinc-400 underline underline-offset-4">
                      Matriz
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-sm text-zinc-300">
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      Georgina Business Park - Av Anísio Haddad, 8001, Milan
                      Sul, Sala 413, São José do Rio Preto - SP, 15091-751
                    </span>

                    <span className="flex items-center gap-2 text-sm text-zinc-300">
                      <Phone className="h-5 w-5" />
                      (17) 3211-5353 <br />
                      0800 777 4343
                    </span>

                    <span className="flex items-center gap-2 text-sm text-zinc-300">
                      <Mail className="h-5 w-5" />
                      contato@atmoutsourcing.com.br
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-roboto flex flex-col text-xl font-bold tracking-tighter">
                <div className="flex flex-col items-center gap-2">
                  <div>
                    <span className="text-base font-bold text-zinc-400 underline underline-offset-4">
                      Horários comercial
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="flex items-center gap-2 text-sm text-zinc-300">
                      <CalendarDays className="h-4 w-4 flex-shrink-0" />
                      Seg. a Sex. das 8h às 19h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4 border-t border-zinc-600" />

          <div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-300 p-2">
                  <WhatsappLogo className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-300 p-2">
                  <InstagramLogo className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-300 p-2">
                  <YoutubeLogo className="h-5 w-5" />
                </div>
              </div>
              <span className="flex flex-row items-center text-xs text-zinc-400">
                <Copyright className="h-4 w-4 text-zinc-400" />
                Copyright todos os direitos reservados -{' '}
                {new Date().getFullYear()}
              </span>
            </div>

            <Image
              className="h-auto w-48"
              src={seloSilverPartner}
              alt="teste"
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
