import Image from 'next/image'
import accessibility from '@/../public/accessibility.svg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Accessibility() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div className="mx-20 flex flex-col items-center justify-between gap-28 pb-[10%] md:flex-row">
      <motion.div
        ref={ref}
        className="flex max-w-[50%] flex-col items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={
          inView
            ? {
                opacity: 1,

                transform: 'translateX(0px)',
              }
            : {}
        }
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
      >
        <h1 className="font-plusJakartaSans text-xl font-bold text-blue-600 dark:text-blue-500 md:text-4xl">
          Toop acessível para todos
        </h1>
        <div className="flex flex-col gap-3 text-left font-normal leading-5">
          <p>
            O TOOP foi desenvolvido com um forte compromisso com a
            acessibilidade, garantindo que pessoas com deficiência visual possam
            utilizá-lo de forma <span className="font-semibold">intuitiva</span>{' '}
            e<span className="font-semibold"> eficiente</span>.
          </p>
          <p>
            Desde sua concepção, foi projetado para oferecer compatibilidade
            total com leitores de tela e contrastes para facilitar a
            visualização de elementos essenciais.
          </p>
          <p>
            Com o TOOP, a tecnologia se adapta às necessidades de todos,
            promovendo inclusão e autonomia.
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        className={`mt-4 flex max-w-[50%] duration-500 md:mx-4`}
        initial={{ opacity: 0 }}
        animate={
          inView
            ? {
                opacity: 1,

                transform: 'translateX(0px)',
              }
            : {}
        }
        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src={accessibility}
          alt="Toop icon"
          className="h-auto w-[600px]"
        />
      </motion.div>
    </div>
  )
}
