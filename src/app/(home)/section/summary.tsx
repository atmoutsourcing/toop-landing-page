import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import x50Mockup from '@/../public/assets/ATM Ultra para toop.png'

export function Summary() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -150 }}
        animate={
          inView
            ? {
                opacity: 1,
                transform: 'translateX(0px)',
              }
            : {}
        }
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src={x50Mockup}
          alt="X50-mockup"
          className="flex h-auto scale-125 rounded-s-3xl md:min-w-[700px]"
        />
      </motion.div>

      <div className="flex flex-col gap-6 pb-10">
        <h1 className="text-center font-plusJakartaSans text-lg font-bold tracking-tighter text-zinc-900 dark:text-zinc-300 md:text-2xl">
          Tecnologia Inteligente para Gestão Empresarial
        </h1>

        <div className="flex flex-col gap-3 px-0 text-center text-sm font-normal dark:text-zinc-300 md:text-justify md:text-base">
          <span>
            O TOOP, desenvolvido pela ATM Outsourcing, é a solução definitiva
            para otimizar e transformar a gestão do seu negócio. Com integração
            de Inteligência Artificial, analisa dados em tempo real e
            proporciona insights estratégicos para uma tomada de decisão mais
            ágil e assertiva.
          </span>
          <span className="dark:text-zinc-300">
            Seja para otimizar fluxos operacionais, integrar equipes ou
            potencializar resultados, o TOOP combina automação e IA para
            automatizar processos, oferecer eficiência e inovação na gestão
            empresarial
          </span>
          <span className="dark:text-zinc-300">
            Para uma gestão inteligente, automatizada e conectada ao futuro fale
            conosco e descubra como o TOOP pode revolucionar a sua empresa💡
          </span>
        </div>
      </div>
    </div>
  )
}
