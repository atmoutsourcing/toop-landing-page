import { Mail, MailPlus, MapPin, Phone } from 'lucide-react'
import { Checkbox } from '../../components/ui/checkbox'
import Link from 'next/link'

export default function Contacts() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-8 p-10 md:flex-row">
        <div className="flex w-auto flex-1 flex-col items-center justify-center gap-10 md:items-end">
          <div className="gap-10 text-center md:w-[60%] md:text-left">
            <div className="pb-4 font-sans text-4xl font-bold text-blue-500">
              Alguma dúvida?
            </div>
            <div className="font-inter text-2xl font-bold">
              Entre em contato com nossa equipe de especialitas.
            </div>
            <div className="font-inter text-xl">
              Nossa equipe irá saciar qualquer dúvida que você tiver.
            </div>
          </div>

          <div className="flex flex-col text-left md:w-[60%]">
            <div className="mb-3 flex flex-row items-center gap-2">
              <Mail size={20} />
              <p className="text-sx text-zinc-500">contatoAtm@gmail.com</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Phone size={20} />
              <p className="text-sx text-zinc-500">(17) 3211-5353</p>
            </div>

            <div className="mt-1 flex flex-row gap-1">
              <MapPin size={40} />
              <p className="text-sx mt-3 text-zinc-500">
                Georgina Business Park - Av Anísio Haddad, 8001, Milan Sul, Sala
                413, São José do Rio Preto - SP, 15091-751
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-1">
          <div className="flex min-h-[600px] w-full flex-col gap-2 rounded-3xl bg-zinc-100 p-4 dark:bg-shapePrimary md:w-[70%] md:p-10">
            <div className="flex flex-row items-center justify-center gap-4 md:gap-4">
              <MailPlus size={48} />
              <h1 className="text-2xl font-bold md:text-4xl">Mande Mensagem</h1>
            </div>

            <div className="flex flex-col gap-4 pt-10">
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="name"
                    className="font-sans text-base md:text-xl"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    className="h-[42px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="surname"
                    className="font-sans text-base md:text-xl"
                  >
                    Sobrenome
                  </label>
                  <input
                    id="surname"
                    type="text"
                    placeholder="Digite seu sobrenome"
                    className="h-[42px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="email"
                    className="font-sans text-base md:text-xl"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="h-[42px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="whatsapp"
                    className="font-sans text-base md:text-xl"
                  >
                    Whatsapp
                  </label>
                  <input
                    id="whatsapp"
                    type="text"
                    placeholder="Digite seu whatsapp"
                    className="h-[42px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="company"
                    className="font-sans text-base md:text-xl"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Digite sua empresa"
                    className="h-[42px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor="devices"
                    className="font-sans text-base md:text-xl"
                  >
                    Qtd. de dispositivos
                  </label>
                  <select
                    defaultValue="0"
                    id="devices"
                    className="h-[42px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-400 shadow-sm focus:border-blue-500 focus:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-zinc-400" value="0" disabled>
                      Clique para selecionar
                    </option>
                    <option value="option1">5 a 50</option>
                    <option value="option2">51 a 100</option>
                    <option value="option3">101 a 200</option>
                    <option value="option4">201 a 400</option>
                    <option value="option5">500 a 1000</option>
                    <option value="option6">1000+</option>
                  </select>
                </div>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="message"
                  className="font-sans text-base md:text-xl"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  placeholder="Digite sua mensagem"
                  className="min-h-[100px] w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid leading-none">
                  <label htmlFor="terms1" className="text-sm">
                    Declaro que li e <span className="font-bold">concordo</span>{' '}
                    com a{' '}
                    <Link
                      href=""
                      className="text-blue-600 underline transition duration-300 ease-in-out hover:text-blue-800"
                    >
                      Política de Privacidade
                    </Link>{' '}
                    e os{' '}
                    <Link
                      href=""
                      className="text-blue-600 underline transition duration-300 ease-in-out hover:text-blue-800"
                    >
                      Termos de Uso
                    </Link>
                    .
                  </label>
                </div>
              </div>

              <button className="focus:shadow-outline mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
