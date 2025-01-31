import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'items-center rounded-full bg-zinc-950 px-6 py-3 text-zinc-50 duration-500 hover:bg-zinc-800 font-bold dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200',
  variants: {
    variant: {
      primary: 'text-sm',
      secondary: 'text-md ',
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
