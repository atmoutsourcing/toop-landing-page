'use client'

import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import VMasker from 'vanilla-masker'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/button'

const formEmailSchema = z.object({
  business: z.string().optional(),
  email: z
    .string()
    .min(1, 'Campo obrigatório')
    .email('Formato de email inválido'),
  name: z.string().min(1, 'Campo obrigatório'),
  phone: z
    .string()
    .min(1, 'Campo obrigatório')
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato inválido'),
  message: z.string().min(1, 'Campo obrigatório'),
})

type FormEmailSchema = z.infer<typeof formEmailSchema>

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormEmailSchema>({
    resolver: zodResolver(formEmailSchema),
  })

  useEffect(() => {
    const phoneInput = document.querySelector('input[name="phone"]')
    if (phoneInput) {
      VMasker(phoneInput).maskPattern('(99) 99999-9999')
    }
  }, [])

  async function handleSendEmail(data: FormEmailSchema) {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        business: data.business,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    })

    if (response.ok) {
      const data = await response.json()

      toast.success('Mensagem enviada com sucesso!', {
        description:
          'nossa equipe recebeu sua mensagem irá respondê-lo em breve.',
        duration: 4000,
      })

      reset()
      return Response.json(data)
    } else {
      toast.error('Erro ao enviar mensagem, tente novamente!', {
        duration: 3000,
      })
    }

    reset()
  }

  return (
    <div className="mx-auto mb-20 mt-20 flex max-w-[1440px] flex-col items-center gap-32 p-4 md:flex-row">
      <div className="flex w-auto flex-col gap-1">
        <span className="text-xl font-bold tracking-tight md:text-2xl">
          Será um prazer atendê-lo
        </span>

        <hr className="my-4 border-t border-zinc-300 dark:border-zinc-700" />

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">
            O TOOP facilita sua integração de forma rápida e eficiente. Precisa
            de suporte? Nossa equipe está pronta para ajudar. Entre em contato!
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Phone className="h-6 w-6 text-icons dark:text-zinc-400" />

              <div className="flex flex-col gap-1">
                <span className="text-xs">(17) 3211-5353</span>
                <span className="text-xs">0800 777 4343</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <EnvelopeSimple className="h-6 w-6 text-icons dark:text-zinc-400" />
              <span className="text-xs">contato@atmoutsourcing.com.br</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <MapPin className="h-6 w-6 text-icons dark:text-zinc-400" />
              <span className="text-xs">
                Georgina Business Park - Av Anísio Haddad, 8001, Milan Sul, Sala
                413, São José do Rio Preto - SP, 15091-751
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="flex items-center justify-center">
          <div className="h-auto w-auto flex-col rounded-2xl border bg-zinc-50 p-8 shadow-lg dark:bg-shapePrimary md:h-[490px] md:w-[570px]">
            <h1 className="flex justify-center text-2xl font-bold">
              Envie sua mensagem
            </h1>

            <form
              onSubmit={handleSubmit(handleSendEmail)}
              className="mt-6 flex flex-col gap-6"
            >
              <div className="flex flex-row gap-2">
                <div className="w-[50%]">
                  <input
                    placeholder="Nome"
                    {...register('name')}
                    className={`h-10 w-full rounded-xl border-[2px] ${errors.name ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                  />
                  {errors.name && (
                    <div className="absolute pl-2 text-sm font-bold text-red-500">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div className="w-[50%]">
                  <input
                    placeholder="E-mail"
                    {...register('email')}
                    className={`h-10 w-full rounded-xl border-2 ${errors.email ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                  />
                  {errors.email && (
                    <div className="absolute pl-2 text-sm font-bold text-red-500">
                      {errors?.email?.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-[50%]">
                  <input
                    placeholder="WhatsApp"
                    {...register('phone')}
                    className={`h-10 w-full rounded-xl border-2 ${errors.phone ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                  />
                  {errors.phone && (
                    <div className="absolute pl-2 text-sm font-bold text-red-500">
                      {errors.phone.message}
                    </div>
                  )}
                </div>

                <div className="w-[50%]">
                  <input
                    type="text"
                    placeholder="Empresa"
                    {...register('business')}
                    className="h-10 w-full rounded-xl border border-zinc-300 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Mensagem"
                  {...register('message')}
                  className={`h-40 w-full resize-none rounded-xl border-2 ${errors.message ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                />
                {errors.message && (
                  <div className="absolute pl-2 text-sm font-bold text-red-500">
                    {errors.message.message}
                  </div>
                )}
              </div>

              <Button>Enviar</Button>

              {/* <button
                type="submit"
                className="bg-b-zinc-400 h-10 w-full rounded-xl bg-zinc-950 text-sm font-bold text-zinc-50 shadow-md transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                disabled={isSubmitting}
              >
                Enviar
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
