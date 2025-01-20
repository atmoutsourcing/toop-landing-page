import { Calendar, ChevronRight, Dot, Rss } from 'lucide-react'

export default function Blog() {
  return (
    <>
      <div className="flex flex-col bg-zinc-950 p-[5%] md:px-[10%]">
        <div className="flex flex-col pb-[15%]">
          <h1 className="flex text-center text-4xl md:text-start">
            <Rss size={32} className="mt-1" />
            Bem-vindo ao Blog do Toop.
          </h1>
          <h2 className="pb-2 text-center text-2xl text-zinc-500 md:text-start">
            Fique por dentro das atualizacões e novidades.
          </h2>
          <div className="text-justify text-sm font-light md:w-[60%] md:text-start">
            <p>
              Uma comunidade vibrante é a base da inovação. Nosso blog foi
              criado para facilitar o engajamento, oferecendo um espaço renovado
              onde usuários podem colaborar, compartilhar insights e acessar
              ferramentas que desbloqueiam novas oportunidades em cada etapa de
              sua jornada. Pronto para fazer parte dessa comunidade?
            </p>
            <p className="text-center text-xl text-blue-500 md:text-start">
              Acesse nosso blog e participe!
            </p>
            <div className="pt-4 text-center md:text-end">
              <button className="items-center rounded-lg border-2 border-blue-800 px-6 py-3 font-bold text-blue-500 transition-all duration-300 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-900">
                <p>Ir para o blog</p>
              </button>
            </div>
          </div>
        </div>

        <h1 className="flex justify-center pb-[5%] text-center text-4xl font-bold">
          Últimos posts
        </h1>

        <div className="flex flex-col gap-8 pb-[5%]">
          <div className="flex flex-col gap-4 hover:cursor-pointer md:max-h-[150px] md:flex-row">
            <div className="relative hidden w-[40%] max-w-[250px] rounded-lg md:block">
              <div className="h-[150px] rounded-xl bg-zinc-500"></div>

              <div className="absolute inset-0 bg-zinc-950 bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="text-left md:text-justify">
                <h1 className="pb-2 text-2xl font-bold">
                  Samsung lança primeira atualização de 2025 para dispositivos
                  Galaxy
                </h1>

                <div className="flex text-sm text-zinc-400">
                  A Samsung acaba de dar um passo à frente com o lançamento de
                  sua primeira atualização de 2025, trazendo consigo…
                </div>
              </div>

              <div className="flex flex-row justify-between text-zinc-500">
                <div className="flex flex-row gap-2">
                  <Calendar size={20} />
                  <div>17/01/2025</div>

                  <Dot />

                  <div>9 minutos atrás</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 hover:cursor-pointer md:max-h-[150px] md:flex-row">
            <div className="relative hidden w-[40%] max-w-[250px] rounded-lg md:block">
              <div className="h-[150px] rounded-xl bg-zinc-500"></div>

              <div className="absolute inset-0 bg-zinc-950 bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="text-left md:text-justify">
                <h1 className="pb-2 text-2xl font-bold">
                  Samsung lança primeira atualização de 2025 para dispositivos
                  Galaxy
                </h1>

                <div className="flex text-sm text-zinc-400">
                  A Samsung acaba de dar um passo à frente com o lançamento de
                  sua primeira atualização de 2025, trazendo consigo…
                </div>
              </div>

              <div className="flex flex-row justify-between text-zinc-500">
                <div className="flex flex-row gap-2">
                  <Calendar size={20} />
                  <div>17/01/2025</div>

                  <Dot />

                  <div>9 minutos atrás</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 hover:cursor-pointer md:max-h-[150px] md:flex-row">
            <div className="relative hidden w-[40%] max-w-[250px] rounded-lg md:block">
              <div className="h-[150px] rounded-xl bg-zinc-500"></div>

              <div className="absolute inset-0 bg-zinc-950 bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="text-left md:text-justify">
                <h1 className="pb-2 text-2xl font-bold">
                  Samsung lança primeira atualização de 2025 para dispositivos
                  Galaxy
                </h1>

                <div className="flex text-sm text-zinc-400">
                  A Samsung acaba de dar um passo à frente com o lançamento de
                  sua primeira atualização de 2025, trazendo consigo…
                </div>
              </div>

              <div className="flex flex-row justify-between text-zinc-500">
                <div className="flex flex-row gap-2">
                  <Calendar size={20} />
                  <div>17/01/2025</div>

                  <Dot />

                  <div>9 minutos atrás</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-3 pb-[5%] text-lg">
          <p className="scale-125 cursor-pointer text-blue-500">1</p>
          <p className="cursor-pointer">2</p>
          <p className="cursor-pointer">3</p>
          <p>...</p>
          <p className="cursor-pointer">20</p>
          <ChevronRight className="scale-125" />
        </div>
      </div>
    </>
  )
}
