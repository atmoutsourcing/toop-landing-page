'use client'

import Link from 'next/link'
import logo from '../../public/logo-white.png'
import Image from 'next/image'
import { Button } from './button'

import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="flex flex-row items-center justify-between bg-zinc-950 px-12 py-4">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="Logo" className="h-9 w-28" />
        </Link>

        <div className="md:hidden">
          <AlignJustify size={24} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className="text-md hidden space-x-6 text-zinc-100 md:flex">
          <div className="flex cursor-pointer flex-row items-center gap-1 transition hover:text-blue-500">
            <Link href="/">Home</Link>
          </div>

          <div className="flex cursor-pointer flex-row items-center gap-1 transition hover:text-blue-500">
            <Link href="/aboutUs">Sobre nós</Link>
          </div>

          <div className="flex cursor-pointer flex-row items-center gap-1 transition hover:text-blue-500">
            <Link href="/plans">Planos</Link>
          </div>

          <div className="flex cursor-pointer flex-row items-center gap-1 transition hover:text-blue-500">
            <Link href="/contacts">Contatos</Link>
          </div>

          <div className="flex cursor-pointer flex-row items-center gap-1 transition hover:text-blue-500">
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div className="hidden space-x-4 md:flex">
          <Button>Teste grátis por 15 dias</Button>

          <Button>Login</Button>
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
          className={`border-b-2 border-zinc-700 p-4`}
        >
          Home
        </Link>
        <Link
          href="/aboutUs"
          onClick={() => setIsOpen(false)}
          className={`border-b-2 border-zinc-700 p-4`}
        >
          Sobre nós
        </Link>
        <Link
          href="/plans"
          onClick={() => setIsOpen(false)}
          className={`border-b-2 border-zinc-700 p-4`}
        >
          Planos
        </Link>
        <Link
          href="/contacts"
          onClick={() => setIsOpen(false)}
          className={`border-b-2 border-zinc-700 p-4`}
        >
          Contatos
        </Link>
        <Link href="/blog" onClick={() => setIsOpen(false)} className={`p-4`}>
          Blog
        </Link>
      </div>
    </>
  )
}
