import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ProcessOptimization() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:text-xl"
        >
          Otimização de processos
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
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="font-normal text-zinc-800 dark:text-zinc-200"
      >
        Com IA integrada, o TOOP automatiza e otimiza <br /> processos,
        reduzindo tempo e aumentando a <br />
        eficiência operacional com inteligência avançada.
      </motion.span>
    </div>
  )
}
