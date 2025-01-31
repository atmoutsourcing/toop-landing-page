'use client'

import Link from 'next/link'
import logoDark from '../../public/logo-dark.png'
import logoLight from '../../public/logo-white.png'
import Image from 'next/image'
import { Button } from './button'

import { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { ToggleTheme } from './toggleTheme'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  return (
    <>
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
        <div className="text-md hidden flex-1 flex-row items-center justify-center gap-4 md:flex">
          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/' && 'text-blue-600'}`}
          >
            <Link href="/">Home</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/aboutUs' && 'text-blue-600'}`}
          >
            <Link href="/aboutUs">Sobre nós</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/plans' && 'text-blue-600'}`}
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

        <div className="md:hidden">
          <AlignJustify size={24} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </header>

      <div
        className={`flex transform cursor-pointer flex-col gap-2 overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'h-[320px]' : 'h-[0px]'
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
