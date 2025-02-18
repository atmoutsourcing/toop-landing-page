'use client'

import Link from 'next/link'
import logoDark from '../../../public/logo-dark.png'
import logoLight from '../../../public/logo-white.png'
import Image from 'next/image'
import { Button } from '../button'

import { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { ToggleTheme } from '../toggleTheme'
import { HeaderScroll } from './headerScroll'
import { HeaderCell } from './headerCell'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  return (
    <>
      <HeaderScroll />

      <div className={'w-screen font-inter'}>
        <header className="mx-auto flex max-w-[1440px] p-6">
          <div className="flex-1">
            <Link href="/" className="cur sor-pointer">
              <Image
                src={logoDark}
                alt="Logo"
                className="h-10 w-32 transition-all dark:hidden"
                suppressHydrationWarning
              />

              <Image
                src={logoLight}
                alt="Logo"
                className="hidden h-10 w-32 transition-all dark:block"
              />
            </Link>
          </div>

          <div className="text-md hidden flex-1 flex-row items-center justify-center gap-5 md:flex">
            <div
              className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/' && 'text-blue-600 dark:text-blue-500'}`}
            >
              <Link href="/">Home</Link>
            </div>

            <div
              className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/aboutUs' && 'text-blue-600 dark:text-blue-500'}`}
            >
              <Link href="/aboutUs">Sobre nós</Link>
            </div>

            <div
              className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/plans' && 'text-blue-600 dark:text-blue-500'}`}
            >
              <Link href="/plans">Planos</Link>
            </div>

            <div
              className={`flex cursor-pointer flex-row items-center gap-1 transition ${pathname === '/contacts' && 'text-blue-600 dark:text-blue-500'}`}
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

      <HeaderCell
        isOpen={isOpen}
        setIsOpen={(value: boolean) => setIsOpen(value)}
      />
    </>
  )
}
