import Image from 'next/image'

import robotHand from '../../../../public/assets/robot-hand.png'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
export function Ai() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  return (
    <div className="mb-32 flex w-auto items-center rounded-xl border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 md:max-h-[700] md:max-w-[1440px]">
      <div className="flex flex-col md:flex-row">
        <div className="ml-20 flex h-auto max-w-[250px] flex-col gap-6 py-20 md:min-w-[500px] md:max-w-[600px] md:gap-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
            className="font-plusJakartaSans text-xl font-bold text-sky-500 dark:text-sky-400 md:text-4xl"
          >
            <h1>Gestão EMM com Integração Inteligente de IA</h1>
          </motion.div>

          <div className="flex flex-col gap-5">
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
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
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
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className="font-normal text-zinc-800 dark:text-zinc-200"
              >
                Com IA integrada, o TOOP realiza buscas rápidas <br /> e
                precisas, garantindo acesso ágil às informações <br />{' '}
                essenciais.
              </motion.span>
            </div>

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
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                  className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:text-xl"
                >
                  Organização de dados
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
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                className="font-normal text-zinc-800 dark:text-zinc-200"
              >
                A integração com IA do TOOP organiza dados de <br /> forma
                inteligente, facilitando o acesso e a análise <br /> para uma
                gestão mais eficiente.
              </motion.span>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 20 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: -50,
                  transform: 'translateX(0px)',
                }
              : {}
          }
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          className="flex items-center md:items-end"
        >
          <Image
            src={robotHand}
            alt="robot-hand"
            className="h-auto w-[400px] md:w-full md:items-end"
          />
        </motion.div>
      </div>
    </div>
  )
}
