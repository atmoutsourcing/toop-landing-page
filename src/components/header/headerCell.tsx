'use client'

import Link from 'next/link'

interface HeaderCellProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export function HeaderCell({ isOpen, setIsOpen }: HeaderCellProps) {
  return (
    <div
      style={{ zIndex: '10' }}
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
    </div>
  )
}
