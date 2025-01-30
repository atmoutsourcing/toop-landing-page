import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: 'h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400',
  variants: {
    variant: {
      primary: '',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

export function Input({ variant, ...props }: InputProps) {
  return <input {...props} className={inputVariants({ variant })} />
}
