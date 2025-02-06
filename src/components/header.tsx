'use client'

import Link from 'next/link'
import logoDark from '../../public/logo-dark.png'
import logoLight from '../../public/logo-white.png'
import Image from 'next/image'
import { Button } from './button'

import { useEffect, useState } from 'react'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { ToggleTheme } from './toggleTheme'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const pathname = usePathname()

  const [windowHeightPosition, setWindowHeightPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const windowHeight = window.innerHeight

      setScrollPosition(position)
      setWindowHeightPosition(windowHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        style={{ zIndex: '10' }}
        className={`absolute w-screen transform overflow-hidden border-b-[1px] bg-zinc-50 font-inter transition-all duration-200 dark:bg-zinc-950 md:fixed ${scrollPosition > windowHeightPosition ? 'h-[70px] opacity-100' : 'fixed h-0 opacity-0'}`}
      >
        <header className={`mx-auto flex max-w-[1440px] pt-3`}>
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

      <div className={'w-full font-inter'}>
        <header className="mx-auto flex max-w-[1440px] p-6">
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

            {/* <div
           className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/contacts' && 'text-blue-500'}`}
         >
           <Link href="/contacts">Contatos</Link>
         </div> */}

            {/* <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition`}
          >
            <Link href="https://www.google.com.br/?hl=pt-BR">Blog</Link>
          </div> */}
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

      <div
        className={`flex transform cursor-pointer flex-col gap-2 overflow-hidden font-inter text-sm transition-all duration-700 ease-in-out ${
          isOpen ? 'h-[358px]' : 'h-[0px]'
        } `}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Home
        </Link>
        <Link
          href="/aboutUs"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Sobre nós
        </Link>
        <Link
          href="/plans"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Planos
        </Link>
        <Link
          href="https://wa.me/5518996187681"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Teste grátis até fim de 2025
        </Link>
        {/* <Link
          href="/contacts"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Contatos
        </Link> */}
        {/* <Link
          href="/blog"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Blog
        </Link> */}
      </div>
    </>
  )
}
