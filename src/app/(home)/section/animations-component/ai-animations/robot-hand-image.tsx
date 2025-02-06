import Image from 'next/image'
import robotHand from '../../../../../../public/assets/robot-hand.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function RobotHandImage() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 80 }}
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
  )
}
