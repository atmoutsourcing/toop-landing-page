import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'font-bold rounded-lg px-4 py-2 items-center transition duration-200',
  variants: {
    variant: {
      primary: 'bg-blue-800 text-zinc-50 hover:bg-blue-900',
      secondary: 'bg-zinc-900 text-zinc-50 hover:bg-zjinc-800',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant })}>
      {children}
    </button>
  )
}
