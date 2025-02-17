'use client'

import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
    .regex(/^\d{11}$/, 'Formato inválido'),
  message: z.string().min(1, 'Campo obrigatório'),
})

type FormEmailSchema = z.infer<typeof formEmailSchema>

export default function Contacts() {
  const { register, handleSubmit, formState } = useForm<FormEmailSchema>({
    resolver: zodResolver(formEmailSchema),
  })

  async function handleSendEmail(data: FormEmailSchema) {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        name: data.name,
        business: data.business,
        email: data.email,
        message: data.message,
        phone: data.phone,
      }),
    })
    if (response.ok) {
      const data = await response.json()
      return Response.json(data)
    }
  }

  return (
    <div className="mx-auto mb-20 mt-20 flex max-w-[1440px] flex-col items-center gap-32 p-4 md:flex-row">
      <div className="flex max-w-[50%] flex-col gap-1">
        <span className="text-3xl font-bold tracking-tight">
          Será um prazer atendê-lo
        </span>

        <hr className="my-4 border-t border-zinc-300 dark:border-zinc-700" />

        <div className="flex flex-col gap-4">
          <p className="text-md font-medium">
            No Grupo ATM, o TOOP facilita sua integração de forma rápida e
            eficiente. Precisa de suporte? Nossa equipe está pronta para ajudar.
            Entre em contato!
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
          <div className="h-auto w-auto flex-col rounded-2xl border bg-zinc-50 p-8 shadow-lg dark:bg-shapePrimary md:h-[470px] md:w-[550px]">
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
                    className={`h-10 w-full rounded-xl border-[2px] ${formState.errors.name ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                  />
                  {formState.errors.name && (
                    <div className="absolute pl-2 text-sm font-bold text-red-500">
                      {formState.errors.name.message}
                    </div>
                  )}
                </div>

                <div className="w-[50%]">
                  <input
                    placeholder="E-mail"
                    {...register('email')}
                    className={`h-10 w-full rounded-xl border-2 ${formState.errors.email ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                  />
                  {formState.errors.email && (
                    <div className="absolute pl-2 text-sm font-bold text-red-500">
                      {formState?.errors?.email?.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-[50%]">
                  <input
                    placeholder="WhatsApp"
                    {...register('phone')}
                    className={`h-10 w-full rounded-xl border-2 ${formState.errors.phone ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                  />
                  {formState.errors.phone && (
                    <div className="absolute pl-2 text-sm font-bold text-red-500">
                      {formState.errors.phone.message}
                    </div>
                  )}
                </div>

                <div className="w-[50%]">
                  <input
                    type="text"
                    placeholder="Empresa"
                    {...register('business')}
                    className="h-10 w-full rounded-xl border border-zinc-200 p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder:dark:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Mensagem"
                  {...register('message')}
                  className={`h-40 w-full resize-none rounded-xl border-2 ${formState.errors.message ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-950' : 'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900'} p-4 text-sm font-medium text-zinc-800 outline-none placeholder:font-bold dark:text-zinc-100 placeholder:dark:text-zinc-400`}
                />
                {formState.errors.message && (
                  <div className="absolute pl-2 text-sm font-bold text-red-500">
                    {formState.errors.message.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="bg-b-zinc-400 mt-2 h-10 w-full rounded-xl bg-zinc-950 text-sm font-bold text-zinc-50 shadow-md transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
