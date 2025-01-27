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
    <div>
      <header className="mx-auto flex max-w-[1440px] flex-row items-center justify-between px-12 py-4">
        <Link href="/" className="cursor-pointer" style={{ zIndex: '1' }}>
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
            suppressHydrationWarning
          />
        </Link>

        <div className="text-md hidden space-x-6 md:flex">
          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/' && 'text-blue-500'}`}
          >
            <Link href="/">Home</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/aboutUs' && 'text-blue-500'}`}
          >
            <Link href="/aboutUs">Sobre nós</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/plans' && 'text-blue-500'}`}
          >
            <Link href="/plans">Planos</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/contacts' && 'text-blue-500'}`}
          >
            <Link href="/contacts">Contatos</Link>
          </div>

          <div
            className={`flex cursor-pointer flex-row items-center gap-1 transition`}
          >
            <Link href="https://www.google.com.br/?hl=pt-BR">Blog</Link>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <div>
            <ToggleTheme />
          </div>

          <div className="hidden flex-row items-center gap-2 md:flex">
            <Button>Teste 15 dias grátis</Button>
          </div>
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
        <Link
          href="/contacts"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Contatos
        </Link>
        <Link
          href="/blog"
          onClick={() => setIsOpen(false)}
          className={`border-b-[1px] border-zinc-700 p-4`}
        >
          Blog
        </Link>
      </div>
    </div>
  )
}
