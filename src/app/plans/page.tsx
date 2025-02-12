'use client'

import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import Image from 'next/image'
import { Check, Clock } from 'lucide-react'
import { Button } from '@/components/button'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export default function Plans() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const shootRealisticConfetti = () => {
    const count = 200
    const defaults = {
      origin: { y: 0.8 }
    };
    
    function fire(particleRatio: number, opts: {spread: number, startVelocity?: number, decay?: number, scalar?: number}) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    })
    fire(0.2, {
      spread: 60,
    })
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }

  function handleSubmit() {
    shootRealisticConfetti()
  }

  useEffect(() => {
    const position = window.scrollY
    const windowHeight = window.innerHeight

    if (position < windowHeight / 6) {
      handleSubmit()
    }
  }, [])

  return (
    <div className="flex h-auto w-full flex-col font-inter">
      <div className="mb-16 mt-52 flex flex-col items-center justify-center gap-24 text-center">
        <div
          className="absolute mb-10 hidden h-[150px] w-[90%] rounded-[8px] bg-gradient-radial from-[#bfdbfe] to-[#2563eb] blur-[150px] dark:from-blue-500 dark:to-blue-600 dark:blur-[250px] md:flex"
          style={{ transform: 'rotate(20deg)', zIndex: '-1' }}
        />

        <div
          className="absolute mb-36 flex h-[150px] w-[150px] rounded-[8px] bg-gradient-radial from-[#bfdbfe] to-[#2563eb] blur-[150px] dark:blur-[100px] md:hidden"
          style={{ transform: 'rotate(45deg)', zIndex: '-1' }}
        />

        <div className="flex flex-col items-center gap-3">
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

          <div className="flex flex-col gap-2">
            <div className="font-plusJakartaSans text-3xl font-bold dark:text-zinc-200 md:text-4xl">
              Nosso plano está totalmente de{'  '}
              <span className="text-yellow-500 dark:text-yellow-400">
                GRÁTIS
              </span>{' '}
              durante 2025
            </div>

            <div className="mb-56 font-plusJakartaSans text-3xl font-bold dark:text-zinc-200 md:text-4xl">
              Aproveite e contrate agora!
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-full flex-col items-center justify-center gap-10 pb-[5%] md:mt-[10%] md:flex-row md:items-start">
        <motion.div
          style={{ transitionDuration: '1.0s', transitionDelay: '0.2s' }}
          ref={ref}
          className={`mt-4 duration-500 ${inView ? 'opacity-100' : 'opacity-0'} md:mx-4`}
        >
          <div
            className="absolute flex min-h-[450px] w-[94%] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300 md:w-[380px]"
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
                  Indisponível
                </h1>

                <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                  Implantação e gerenciamento oara
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
        </motion.div>

        <motion.div
          style={{ transitionDuration: '1.2s', transitionDelay: '0.8s' }}
          ref={ref}
          className={`flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} border border-zinc-300 bg-zinc-100 p-4 px-5 transition ease-out hover:scale-110 dark:border-zinc-700 dark:bg-shapePrimary md:scale-105`}
        >
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

              <p className="font-inter text-base font-semibold">Toop</p>
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

          <div className="py-2 font-inter text-xl font-bold dark:text-zinc-300">
            R$ 0,00/mês
          </div>

          <Link href="https://wa.me/5518996187681">
            <button className="w-full rounded-full bg-zinc-950 px-6 py-3 text-[14px] font-bold text-zinc-50 duration-500 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
              Contratar agora!
            </button>
          </Link>

          <div className="mt-4 h-[1px] w-full bg-gray-500" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <span className="text-sm dark:text-zinc-300">
                🎉 Boas notícias! Todas os recursos do TOOP estão 100% liberadas
                para você aproveitar ao máximo! 🚀💙
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ transitionDuration: '1.2s', transitionDelay: '0.4s' }}
          ref={ref}
          className={`mt-4 md:mx-4 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="absolute flex min-h-[450px] w-[94%] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300 md:w-[380px]"
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
                  Indisponível
                </h1>

                <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                  Implantação e gerenciamento oara
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
        </motion.div>
      </div>
    </div>
  )
}
