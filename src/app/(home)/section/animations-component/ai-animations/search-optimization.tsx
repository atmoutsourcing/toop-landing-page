import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function SearchOptimization() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:text-xl"
        >
          Otimização de buscas
        </motion.h2>
      </div>

      <motion.span
        ref={ref}
        initial={{ opacity: 0, y: 25 }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className="font-normal text-zinc-800 dark:text-zinc-200"
      >
        Com tecnologia avançada, o TOOP realiza buscas rápidas <br /> e
        precisas, garantindo acesso ágil às informações <br /> essenciais.
      </motion.span>
    </div>
  )
}
