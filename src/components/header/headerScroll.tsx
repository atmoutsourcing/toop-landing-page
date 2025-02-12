'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import logoDark from '../../../public/logo-dark.png'
import logoLight from '../../../public/logo-white.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ToggleTheme } from '../toggleTheme'
import { Button } from '../button'
import { AlignJustify } from 'lucide-react'

export function HeaderScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  const [windowHeightPosition, setWindowHeightPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const windowHeight = window.innerHeight

      setScrollPosition(position)
      setWindowHeightPosition(windowHeight)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{ zIndex: '10' }}
      className={`absolute w-screen transform overflow-hidden border-b-[1px] bg-zinc-50 font-inter transition-all duration-200 dark:bg-zinc-950 md:fixed ${scrollPosition > windowHeightPosition ? 'h-[70px] opacity-100' : 'fixed h-0 opacity-0'}`}
    >
      <header className={`mx-auto flex max-w-[1440px] px-6 py-3`}>
        <div className="flex-1">
          <Link href="/" className="cur sor-pointer">
            <Image
              src={logoDark}
              alt="Logo"
              className="h-9 w-28 transition-all dark:hidden"
              suppressHydrationWarning
            />

            <Image
              src={logoLight}
              alt="Logo"
              className="hidden h-9 w-28 transition-all dark:block"
            />
          </Link>
        </div>

        <div className="text-md hidden flex-1 flex-row items-center justify-center gap-5 md:flex">
          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/' && 'text-sky-500 dark:text-sky-400'}`}
          >
            <Link href="/">Home</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/aboutUs' && 'text-sky-500 dark:text-sky-400'}`}
          >
            <Link href="/aboutUs">Sobre nós</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/plans' && 'text-sky-500 dark:text-sky-400'}`}
          >
            <Link href="/plans">Planos</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/contacts' && 'text-sky-500 dark:text-sky-400'}`}
          >
            <Link href="/contacts">Contato</Link>
          </div>
        </div>

        <div className="hidden flex-1 flex-row items-center justify-end gap-4 md:flex">
          <ToggleTheme />

          <Link href="https://wa.me/5518996187681">
            <Button>Teste grátis até fim de 2025</Button>
          </Link>
        </div>

        <div className="pr-5 md:hidden">
          <ToggleTheme />
        </div>

        <div className="mt-1 md:hidden">
          <AlignJustify size={24} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </header>
    </div>
  )
}
