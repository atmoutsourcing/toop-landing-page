import Image from 'next/image'

import robotHand from '../../../../public/assets/robot-hand.png'

export function Ai() {
  return (
    <div className="mb-32 flex w-auto rounded-xl border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 md:max-h-[700] md:max-w-[1440px]">
      <div className="flex flex-col md:flex-row">
        <div className="ml-10 flex h-auto w-auto flex-col gap-10 py-20 md:ml-40 md:min-w-[500px] md:gap-16">
          <div className="font-plusJakartaSans text-2xl font-bold text-sky-500 dark:text-sky-400 md:text-4xl">
            <h1>Gestão EMM com Integração Inteligente de IA</h1>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:text-xl">
                  Otimização de processos
                </h2>
              </div>

              <span className="font-normal text-zinc-800 dark:text-zinc-200">
                Com IA integrada, o TOOP automatiza e otimiza <br /> processos,
                reduzindo tempo e aumentando a <br />
                eficiência operacional com inteligência avançada.
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:text-xl">
                  Otimização de buscas
                </h2>
              </div>

              <span className="font-normal text-zinc-800 dark:text-zinc-200">
                Com IA integrada, o TOOP realiza buscas rápidas <br /> e
                precisas, garantindo acesso ágil às informações <br />{' '}
                essenciais.
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:text-xl">
                  Organização de dados
                </h2>
              </div>

              <span className="font-normal text-zinc-800 dark:text-zinc-200">
                A integração com IA do TOOP organiza dados de <br /> forma
                inteligente, facilitando o acesso e a análise <br /> para uma
                gestão mais eficiente.
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center md:items-end">
          <Image
            src={robotHand}
            alt="robot-hand"
            className="h-auto w-[400px] md:w-full"
          />
        </div>
      </div>
    </div>
  )
}
