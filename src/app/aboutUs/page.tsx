'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

export default function AboutUs() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false }),
  )

  return (
    <div className="flex flex-col font-inter">
      <div className="group relative flex min-h-[600px] cursor-pointer flex-col items-center justify-center overflow-hidden px-56 group-hover:duration-1000">
        <h1
          style={{ zIndex: '100' }}
          className="text-center text-5xl font-bold dark:text-zinc-200"
        >
          Conectando eficiência e segurança para{' '}
        </h1>
        <h1 className="text-center text-5xl font-bold">
          <span className="text-yellow-400">transformar</span> sua gestão!
        </h1>
        <div className="before:absolute before:left-[25%] before:top-[40%] before:h-[204px] before:w-[213px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-500 before:blur-[120px] before:duration-1000 group-hover:before:translate-x-[350%]" />
        <div className="before:absolute before:left-[68%] before:top-[55%] before:h-[168px] before:w-[151px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-600 before:blur-[120px] before:duration-1000 group-hover:before:translate-x-[-500%]" />
      </div>

      <div className="flex h-[305px] w-full flex-col items-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full max-w-[80%]"
        >
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pt-10 md:basis-1/2 lg:basis-1/4"
              >
                <div className="flex h-[122px] w-[248px] flex-col items-center justify-center">
                  <h1 className="text-[40px] font-bold text-blue-800">
                    +38.025
                  </h1>
                  <p className="text-[16px]">Manutenções feitas</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
