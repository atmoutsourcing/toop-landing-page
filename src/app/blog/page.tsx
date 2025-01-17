import { Button } from '@/components/button'
import { Calendar, Dot, Rss } from 'lucide-react'

export default function Blog() {
  return (
    <>
      <div className="flex flex-col bg-zinc-950 p-[5%] md:px-[10%]">
        <div className="flex flex-col pb-[15%]">
          <h1 className="flex text-4xl">
            <Rss size={32} className="mt-1" />
            Bem-vindo ao Blog do Toop.
          </h1>
          <h2 className="pb-2 text-2xl text-zinc-500">
            Fique por dentro das atualizacões e novidades
          </h2>
          <div className="w-[60%] text-sm font-light">
            Uma comunidade próspera alimenta a inovação. Nosso blog torna o
            engajamento fácil, oferecendo um espaço renovado onde os usuários
            colaboram, trocam insights e acessam ferramentas que desbloqueiam
            novas possibilidades em cada etapa de sua jornada.
          </div>
        </div>

        <h1 className="flex justify-center pb-[5%] text-center text-4xl font-bold">
          Últimos posts
        </h1>

        <div className="flex flex-col">
          <div className="flex max-h-[150px] max-w-[70%] flex-col gap-4 hover:cursor-pointer md:flex-row">
            <div className="h-[150px] w-[40%] max-w-[250px] rounded-xl bg-zinc-500"></div>

            <div className="flex flex-col justify-between gap-3">
              <div className="text-justify">
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
      </div>
    </>
  )
}
