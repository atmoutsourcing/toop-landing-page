import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RobotHandImage } from './animations-component/ai-animations/robot-hand-image'
import { DataOrganization } from './animations-component/ai-animations/data-organization'
import { SearchOptimization } from './animations-component/ai-animations/search-optimization'
import { ProcessOptimization } from './animations-component/ai-animations/process-optimization'
export function Ai() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  })

  return (
    <div className="mb-32 flex w-auto items-center overflow-hidden rounded-xl border border-zinc-300 bg-zinc-50 bg-clip-content dark:border-zinc-700 dark:bg-zinc-950 md:max-h-[700] md:max-w-[1440px]">
      <div className="flex flex-col md:flex-row">
        <div className="ml-20 flex h-auto max-w-[250px] flex-col gap-6 py-20 md:min-w-[500px] md:max-w-[600px] md:gap-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-plusJakartaSans text-xl font-bold text-blue-600 dark:text-blue-500 md:text-4xl"
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
