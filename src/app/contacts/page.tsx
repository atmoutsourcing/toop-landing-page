import Image from 'next/image'
import Ellipse from '../../../public/Ellipse.svg'
import { Checkbox } from '@/components/ui/checkbox'

export default function Contacts() {
  return (
    <div className="mx-auto mb-20 mt-20 flex max-w-[1440px] items-center gap-36">
      <div className="flex flex-col gap-3">
        <span className="text-3xl font-bold tracking-tight">
          Será um prazer atendê-lo
        </span>

        <hr className="my-4 border-t border-zinc-300 dark:border-zinc-600" />

        <p className="text-sm">
          No Grupo ATM, estamos comprometidos em oferecer soluções que atendam
          às necessidades específicas do seu negócio. O TOOP foi desenvolvido
          para ser uma plataforma prática e eficiente, permitindo que você
          configure sua integração de forma simples e rápida. Se a sua empresa
          precisa de uma abordagem mais avançada, nossa equipe de especialistas
          está aqui para ajudar. Com o nosso suporte, você encontrará a solução
          ideal para integrar o TOOP ao seu fluxo de trabalho, garantindo
          eficiência e resultados alinhados aos seus objetivos. Entre em contato
          conosco, será um prazer entender suas necessidades e ajudá-lo a
          encontrar o melhor caminho para aproveitar tudo o que o TOOP tem a
          oferecer.
        </p>
      </div>

      <div className="relative flex items-center">
        <Image src={Ellipse} alt="ellipse" className="absolute scale-125" />
        <div className="inset-0 z-10 flex items-center justify-center">
          <div className="bg-b-zinc-200 h-[550px] w-[612px] max-w-[652px] flex-col rounded-2xl border bg-white p-8 shadow-lg">
            <h1 className="flex justify-center text-2xl font-bold">
              Mande mensagem
            </h1>

            <form className="mt-6 flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <input
                  id="email"
                  type="text"
                  placeholder="Nome"
                  className="h-10 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
                />

                <input
                  id="email"
                  type="text"
                  placeholder="Sobrenome"
                  className="h-10 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
                />
              </div>

              <div className="flex flex-row gap-2">
                <input
                  id="email"
                  type="text"
                  placeholder="E-mail"
                  className="h-10 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
                />

                <input
                  id="email"
                  type="text"
                  placeholder="WhatsApp"
                  className="h-10 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
                />
              </div>

              <div className="flex flex-row gap-2">
                <input
                  id="email"
                  type="text"
                  placeholder="Empresa"
                  className="h-10 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
                />

                <input
                  id="email"
                  type="text"
                  placeholder="Qtd. de dispositivos"
                  className="h-10 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
                />
              </div>

              <textarea
                id="remarks"
                placeholder="Mensagem"
                className="h-32 w-full rounded-xl border border-b-zinc-200 p-4 text-sm font-medium text-zinc-800 shadow-sm outline-none placeholder:font-bold dark:bg-zinc-700 placeholder:dark:text-zinc-500"
              />

              <div className="flex items-center gap-2">
                <Checkbox id="terms1" />

                <span className="text-sm">
                  Declaro que li e concordo com a Política de Privacidade e os
                  Termos de Uso.
                </span>
              </div>

              <button className="bg-b-zinc-400 left-1/2 mt-10 h-10 w-full rounded-xl bg-zinc-950 text-sm font-bold text-white shadow-md hover:bg-zinc-800">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
