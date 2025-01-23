'use client'
import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import cellToop from '@/../public/cellToop.png'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import React from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/button'

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return (
    <div className="flex flex-col">
      <div className="absolute left-[-380px] top-[-153.81px] h-[649.99px] w-[575.79px] rotate-[-0.02deg] bg-gradient-radial from-blue-500 to-blue-800 blur-[250px]" />

      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <div className="min-h-full">
          <div className="mt-52 items-center font-bold">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-28 w-28 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-28 w-28 dark:hidden"
              />

              <h1 className="flex justify-center text-4xl">
                O sistema EMM que transforma a gestão de
              </h1>

              <h1 className="flex justify-center text-4xl">
                dispositivos em uma experiência prática e eficiente
              </h1>

              <span className="mt-2 text-sm text-zinc-600 dark:text-textBase">
                Gerenciamento dispositivos móveis de maneira segura inteligente.
              </span>

              <div className="mt-2">
                <Button>Saiba mais</Button>
              </div>
            </div>
          </div>

          <div className="absolute left-[1256px] top-[291px] h-[438px] w-[1056px] bg-gradient-radial from-blue-500 to-blue-800 blur-[250px]" />
        </div>

        {/* <div className="bg-red-400">topic</div>
        <div className="bg-blue-400">carousel</div>
        <div className="bg-green-400">benefits</div>
        <div className="bg-yellow-400">plans</div>
        <div className="bg-purple-500">contact</div>
        <div className="bg-orange-500">doubts</div> */}
      </div>
      <div className="flex flex-row gap-10 px-[4%] py-[4%]">
        <Image src={cellToop} alt="Toop icon" />
        <div className="flex flex-col items-center gap-[20%] pt-[5%]">
          <h1 className="text-2xl font-bold md:text-4xl">
            O porquê de empresas adorarem o TOOP.
          </h1>
          <div className="max-w-[500px] text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, minus
            vero architecto optio nobis quidem recusandae veritatis
            reprehenderit quo odio cum qui, illum neque consequuntur alias
            deserunt dolorum doloremque! Ab?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis deleniti rem a velit
            architecto repellendus alias. Quis labore natus veritatis aspernatur
            voluptates! Quo hic, enim dignissimos corrupti at necessitatibus
            repellendus!
          </div>
        </div>
      </div>

      <div className="flex h-[305px] w-full flex-col items-center bg-zinc-100 dark:bg-shapePrimary">
        <h1 className="pt-[2%] text-center text-xl md:text-3xl">
          Parceiros que confiam no TOOP
        </h1>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[60%]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pt-10 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-[122px] w-[248px] items-center justify-center rounded-lg border">
                  {index + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex h-screen flex-col items-center gap-[20%] pt-[5%]">
        <h1 className="pb-10 text-2xl font-bold md:text-4xl">
          Quais são os beneficios de usar o TOOP?
        </h1>
        <div
          className="absolute left-[800px] top-[2150px] h-full w-[131.74px] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[200px]"
          style={{ transform: 'rotate(132.67deg)' }}
        ></div>

        <div className="flex w-full flex-col gap-10 pl-[10%]">
          <div className="grid grid-cols-1 justify-between gap-5 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
            <div className="md:max-w-[300px]">
              <h2 className="pb-5 font-sans text-xl text-blue-500">
                Controle e Segurança
              </h2>
              <p className="pb-1 text-sm">
                Controle total sobre dispositivos corporativos para proteger
                dados sensíveis.
              </p>
              <p className="pb-1 text-sm">
                Capacidade de aplicar políticas de segurança, como autenticação
                forte e criptografia.
              </p>
              <p className="pb-4 text-sm">
                Remoção remota de dados em caso de perda ou roubo do
                dispositivo.
              </p>

              <div className="flex cursor-pointer flex-row items-center gap-1 pl-4 text-xs">
                Saiba mais <ArrowRight size={12.5} />
              </div>
            </div>

            <div className="md:max-w-[300px]">
              <h2 className="pb-5 font-sans text-xl text-blue-500">
                Gestão Centralizada
              </h2>
              <p className="pb-1 text-sm">
                Monitoramento e gerenciamento de todos os dispositivos em um
                único painel.
              </p>
              <p className="pb-1 text-sm">
                Instalação e atualização de aplicativos de forma centralizada e
                sem necessidade de interação do usuário.
              </p>
              <p className="pb-4 text-sm">
                Definição de perfis de configuração personalizados por
                departamento ou função.
              </p>

              <div className="flex cursor-pointer flex-row items-center gap-1 pl-4 text-center text-xs">
                Saiba mais <ArrowRight size={12.5} />
              </div>
            </div>

            <div className="md:max-w-[300px]">
              <h2 className="pb-5 font-sans text-xl text-blue-500">
                Aumento da Produtividade
              </h2>
              <p className="pb-1 text-sm">
                Acesso simplificado a ferramentas e aplicativos essenciais para
                o trabalho.
              </p>
              <p className="pb-1 text-sm">
                Redução do tempo de inatividade com suporte remoto e
                diagnósticos em tempo real.
              </p>
              <p className="pb-4 text-sm">
                Controle sobre o uso de aplicativos para garantir o foco nas
                atividades corporativas.
              </p>

              <div className="flex cursor-pointer flex-row items-center gap-1 pl-4 text-center text-xs">
                Saiba mais <ArrowRight size={12.5} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
            <div className="md:max-w-[300px]">
              <h2 className="pb-5 font-sans text-xl text-blue-500">
                Flexibilidade e Escalabilidade
              </h2>
              <p className="pb-1 text-sm">
                Suporte a uma ampla gama de dispositivos Android, desde
                smartphones a tablets e dispositivos específicos (como coletores
                de dados).
              </p>
              <p className="pb-4 text-sm">
                Capacidade de adicionar ou remover dispositivos e usuários
                conforme necessário.
              </p>

              <div className="flex cursor-pointer flex-row items-center gap-1 pl-4 text-center text-xs">
                Saiba mais <ArrowRight size={12.5} />
              </div>
            </div>

            <div className="md:max-w-[300px]">
              <h2 className="pb-5 font-sans text-xl text-blue-500">
                Conformidade e Auditoria
              </h2>
              <p className="pb-1 text-sm">
                Relatórios detalhados para rastrear o uso e a conformidade com
                as políticas da empresa.
              </p>
              <p className="pb-4 text-sm">
                Ferramentas de auditoria para garantir que os dispositivos
                estejam em conformidade com regulamentos específicos.
              </p>

              <div className="flex cursor-pointer flex-row items-center gap-1 pl-4 text-center text-xs">
                Saiba mais <ArrowRight size={12.5} />
              </div>
            </div>

            <div className="md:max-w-[300px]">
              <h2 className="pb-5 font-sans text-xl text-blue-500">
                Redução de Custos Operacionais
              </h2>
              <p className="pb-1 text-sm">
                Automação de tarefas de gerenciamento reduz a necessidade de
                suporte manual.
              </p>
              <p className="pb-4 text-sm">
                Minimização de riscos de violações de dados que podem gerar
                custos elevados.
              </p>

              <div className="flex cursor-pointer flex-row items-center gap-1 pl-4 text-center text-xs">
                Saiba mais <ArrowRight size={12.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-row justify-center gap-8 p-8">
        <div className="flex h-[450px] w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />

              <p className="font-inter text-sm">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                FREE
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                Ideal para pequenas empresas ou equipes iniciando no
                gerenciamento de dispositivos móveis. Oferece funcionalidades
                básicas para controle e segurança sem custo.
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 0,00/mês</div>

          <Button variant="secondary">Contratar agora!</Button>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Controle limitado de dispositivos móveis, como rastreamento e
              bloqueio remoto.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios básicos com informações sobre dispositivos cadastrados.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Suporte gratuito através de fóruns e base de conhecimento.
            </div>
          </div>
        </div>

        <div className="ml-3 mr-4 flex h-[450px] w-[380px] scale-110 flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />
              <p className="font-inter text-sm">Toop</p>

              <p className="ml-auto text-xs">Popular</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                PRO
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                Solução robusta para empresas que buscam gerenciar aplicativos e
                dispositivos de forma integrada, com análises avançadas e
                suporte especializado.
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 27,90/mês</div>

          <Button variant="secondary">Contratar agora!</Button>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Configuração de políticas de segurança e restrições de uso para
              dispositivos.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios básicos com informações sobre dispositivos cadastrados.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Atendimento por e-mail com prioridade para resolução de problemas
            </div>
          </div>
        </div>

        <div className="flex h-[450px] w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />
              <p className="font-inter text-sm">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                ULTRA
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                Implantação e gerenciamento de aplicativos corporativos
                remotamente.
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 34,90/mês</div>

          <Button variant="secondary">Contratar agora!</Button>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios preditivos sobre vulnerabilidades e riscos de
              segurança.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios básicos com informações sobre dispositivos cadastrados.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Sessões exclusivas para capacitação da equipe de TI no uso da
              plataforma.h
            </div>
          </div>
        </div>

        <div className="flex h-[450px] w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1 pt-3">
              <Image
                src={iconWhite}
                alt="Toop icon"
                className="hidden h-8 w-8 dark:block"
              />

              <Image
                src={iconDark}
                alt="Toop icon"
                className="block h-8 w-8 dark:hidden"
              />
              <p className="font-inter text-sm">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="flex items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                ENTERPRISE
              </h1>

              <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                Implantação e gerenciamento de aplicativos corporativos
                remotamente.
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 47,90/mês</div>

          <Button variant="secondary">Entre em contato</Button>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios preditivos sobre vulnerabilidades e riscos de
              segurança.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Relatórios básicos com informações sobre dispositivos cadastrados.
            </div>

            <div className="flex flex-row gap-2 font-inter text-xs">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              Sessões exclusivas para capacitação da equipe de TI no uso da
              plataforma.h
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
