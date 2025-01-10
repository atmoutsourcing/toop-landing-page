'use client'

import Link from 'next/link'
import logo from '../../../public/logo-white.png'
import Image from 'next/image'
import { Button } from './button'

export function Header() {
  return (
    <header className="flex items-center justify-between bg-zinc-950 px-12 py-4">
      <Link href="/" className="cursor-pointer">
        <Image src={logo} alt="Logo" className="h-9 w-28" />
      </Link>

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

      <div className="space-x-4">
        <Button>Teste grátis por 15 dias</Button>

        <Button>Login</Button>
      </div>
    </header>
  )
}
