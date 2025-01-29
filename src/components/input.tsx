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

// import { ComponentProps, ReactNode } from 'react'
// import { tv, VariantProps } from 'tailwind-variants'

// const buttonVariants = tv({
//   base: 'items-center rounded-full bg-zinc-950 px-6 py-3 text-zinc-50 hover:bg-zinc-800 font-bold dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200',
//   variants: {
//     variant: {
//       primary: 'text-sm',
//       secondary: 'text-md ',
//     },
//   },

//   defaultVariants: {
//     variant: 'primary',
//   },
// })

// interface ButtonProps
//   extends ComponentProps<'button'>,
//     VariantProps<typeof buttonVariants> {
//   children: ReactNode
// }

// export function Button({ children, variant, ...props }: ButtonProps) {
//   return (
//     <button {...props} className={buttonVariants({ variant })}>
//       {children}
//     </button>
//   )
// }
