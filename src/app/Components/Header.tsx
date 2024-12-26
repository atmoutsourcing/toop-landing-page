import Link from 'next/link'
import logo from '../../../public/logo-white.png'
import Image from 'next/image'
import { Button } from './Button'

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-zinc-950">
      <div>
        <Image src={logo} alt="Logo" className="w-28 h-9" />
      </div>

      <div className="hidden md:flex space-x-6 text-zinc-100 text-md">
        <div className="flex flex-row items-center gap-1 hover:text-blue-500 transition cursor-pointer">
          <Link href="/">Home</Link>
        </div>

        <div className="flex flex-row items-center gap-1 hover:text-blue-500 transition cursor-pointer">
          <Link href="/aboutUs">Sobre nós</Link>
        </div>

        <div className="flex flex-row items-center gap-1 hover:text-blue-500 transition cursor-pointer">
          <Link href="/plans">Planos</Link>
        </div>

        <div className="flex flex-row items-center gap-1 hover:text-blue-500 transition cursor-pointer">
          <Link href="/contacts">Contatos</Link>
        </div>

        <div className="flex flex-row items-center gap-1 hover:text-blue-500 transition cursor-pointer">
          <Link href="/blog">Blog</Link>
        </div>
      </div>

      <div className="space-x-4">
        <Button>Login</Button>

        <Button> Teste de graça</Button>
      </div>
    </header>
  )
}
