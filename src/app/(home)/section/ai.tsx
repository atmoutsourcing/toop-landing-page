import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RobotHandImage } from './animations-component/ai-animations/robot-hand-image'
import { DataOrganization } from './animations-component/ai-animations/data-organization'
import { SearchOptimization } from './animations-component/ai-animations/search-optimization'
import { ProcessOptimization } from './animations-component/ai-animations/process-optimization'
export function Ai() {
  const { ref, inView } = useInView({
    triggerOnce: false, // A animação ocorre apenas uma vez
    threshold: 0.4, // Quando 20% do elemento estiver visível
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
            <ProcessOptimization />

            <SearchOptimization />

            <DataOrganization />
          </div>
        </div>
        <RobotHandImage />
      </div>
    </div>
  )
}
