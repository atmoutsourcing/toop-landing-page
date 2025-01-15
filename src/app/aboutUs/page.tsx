'use client'

import Image from 'next/image'
import atmOutsourcing from '../../../public/atm_outsourcing.jpg'
import atmEvs from '../../../public/atm_evs_logo.jpg'
import atmHome from '../../../public/atm_home.jpg'
import grupoAtm from '../../../public/grupo_atm.png'
import valores from '../../../public/valores_atm.png'
import atmX50 from '../../../public/atmX50.png'
import Autoplay from 'embla-carousel-autoplay'
import manoel from '../../../public/Manoel.png'
import gestaoAmor from '../../../public/gestaoComAmor-Bg5B_FiY.png'
import carroEvs from '../../../public/carroEvs2.png'
import estabelecimentos from '../../../public/estabelecimentos1.png'
import residenciais from '../../../public/residenciais2.png'
import condominios from '../../../public/CONDOMINIOS3.png'

import {
  Award,
  Handshake,
  Headset,
  Heart,
  House,
  Lightbulb,
  Pin,
  Smartphone,
  SmartphoneCharging,
  Sparkles,
} from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen flex-row items-center justify-center gap-6 bg-zinc-950 p-10">
        <div className="mb-4 md:mb-0 md:ml-16">
          <Image
            className="h-auto w-full rounded-xl md:w-[800px]"
            src={valores}
            alt="Example image"
          />
        </div>
        <div className="flex flex-col gap-8">
          <Image
            className="mb-10 h-auto w-full rounded-xl md:w-[700px]"
            src={grupoAtm}
            alt="Example image"
          />

          <div className="flex flex-row items-center justify-end gap-4 text-zinc-100">
            <Image
              className="mb-10 h-auto w-full rounded-xl md:w-[200px]"
              src={manoel}
              alt="Example image"
            />

            <div className="flex flex-col">
              <div className="text-2xl font-bold">Manoel de Cesare Filho</div>
              <div className="text-end">CEO ATM Outsourcing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[200px] items-center justify-center gap-8 bg-zinc-950 p-10 pb-20">
        <div className="flex min-w-[50%] flex-col items-center justify-center pl-10">
          <svg
            className="text-blue-600"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            height="8em"
            width="8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
          </svg>

          <h1 className="pb-4 text-4xl font-bold text-blue-600">Propósito</h1>
          <div className="font-sans text-xl text-blue-100">
            Ajudar e inspirar com exemplo para dar sentido a vida em Deus.
          </div>
        </div>

        <div className="h-80 w-[1px] bg-gray-500"></div>

        <div className="flex flex-col items-center justify-center pl-10">
          <svg
            className="text-blue-600"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="8em"
            width="8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 7a5 5 0 1 0 5 5"></path>
            <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
            <path d="M15 6v3h3l3 -3h-3v-3z"></path>
            <path d="M15 9l-3 3"></path>
          </svg>

          <h1 className="pb-4 text-4xl font-bold text-blue-600">Missão</h1>

          <div className="font-sans text-xl text-blue-100">
            A nossa missão é ajudar os clientes e colaboradores a garantirem uma
            qualidade de vida e realização no seu trabalho com suporte da
            tecnologia.
          </div>

          {/* <div>
            "A nossa missão é ajudar os clientes e colaboradores a garantirem
            uma qualidade de vida e realização no seu trabalho com suporte da
            tecnologia."
          </div> */}
        </div>
      </div>

      <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 bg-zinc-950 p-10">
        <div className="text-4xl font-bold">Nossos Valores</div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem key={'a'} className="pl-10">
              <div className="flex flex-row items-center gap-4">
                <Heart size={80} className="text-blue-600" />

                <div className="flex max-w-[40%] flex-col">
                  <div className="text-4xl font-bold text-blue-600">
                    Respeito
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="text-xl">
                      Amar o próximo com justiça, dedicação e empatia visando o
                      crescimento da empresa para que tenhamos um clima leve e
                      familiar.
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem key={'b'}>
              <div className="flex flex-row items-center gap-4">
                <Sparkles size={80} className="text-blue-600" />

                <div className="flex max-w-[45%] flex-col">
                  <div className="text-4xl font-bold text-blue-600">
                    Autenticidade
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="text-xl">
                      Agimos com integridade, pioneirismo, transparência,
                      originalidade e responsabilidade social para oferecer a
                      melhoria contínua aos nossos clientes e serviços.
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem key={'c'}>
              <div className="flex flex-row items-center gap-4">
                <Lightbulb size={80} className="text-blue-600" />

                <div className="flex max-w-[40%] flex-col">
                  <div className="text-4xl font-bold text-blue-600">
                    Inovação
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="text-xl">
                      Ser criativo, aperfeiçoar nossos produtos e desenvolver
                      novas soluções para servir com eficiência nossos clientes
                      e colaboradores.
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem key={'d'}>
              <div className="flex flex-row items-center gap-4">
                <Handshake size={80} className="text-blue-600" />

                <div className="flex max-w-[40%] flex-col">
                  <div className="text-4xl font-bold text-blue-600">
                    Confiança
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="text-xl">
                      É a certeza que o trabalho é realizado com união,
                      competência, força e comprometimento garantindo a
                      qualidade dos serviços para o sucesso do cliente.
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="bg-zinc-9 flex min-h-[300px] items-center justify-center gap-8">
        <div className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl bg-zinc-950 text-zinc-50 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-500">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmOutsourcing}
            alt="Example image"
          />
          <Smartphone size="60" />
        </div>

        <div className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl bg-zinc-950 text-zinc-50 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-500">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmEvs}
            alt="Example image"
          />
          <SmartphoneCharging size="60" />
        </div>

        <div className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl bg-zinc-950 text-zinc-50 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-500">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmHome}
            alt="Example image"
          />
          <House size="60" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-10 bg-zinc-950 p-10">
        <div className="flex max-w-[800px] flex-col gap-8">
          <h1 className="h-auto w-full text-center text-zinc-100 lg:text-8xl">
            ATM Outsourcing
          </h1>
          <div className="text-lx text-justify text-zinc-100">
            A ATM Outsourcing foi fundada no ano de 2007, e hoje somos líderes
            de mercado no segmento de outsourcing de mobilidade no Brasil.
            Fabricante de Smartphones corporativos homologados pela ANATEL e
            desenvolvedora de sistemas de MDM, a ATM Outsourcing é referência em
            soluções de mobilidade corporativa. A empresa possui laboratório
            integrado e conta com um time especializado em pós-vendas,
            desenvolvimento, suporte, manutenção e expedição. Desde 2007, esses
            profissionais já participaram do gerenciamento de mais de 70.558
            equipamentos e linhas celulares das maiores operadoras do país: TIM,
            VIVO e CLARO. A ATM Outsourcing conhece os principais problemas
            enfrentados pelas empresas com as operadoras atuais, por isso,
            oferece um serviço único no mercado. Dispomos de um departamento de
            expedição eficiente, tratando com agilidade as demandas de suporte e
            entrega de equipamentos. Além disso, oferecemos serviços extras que
            as outras operadoras não oferecem, tais como; seguro sem burocracia,
            equipamentos de reserva e conserto de equipamentos sem custo.
          </div>
        </div>

        <div className="mb-4 md:mb-0 md:ml-16">
          <Image
            className="mb-10 h-auto w-full rounded-xl md:w-[200px]"
            src={gestaoAmor}
            alt="Example image"
          />
        </div>

        <div className="mb-4 md:mb-0 md:ml-16">
          <Image
            className="h-auto w-full rounded-xl md:w-[360px]"
            src={atmX50}
            alt="Example image"
          />
        </div>
      </div>

      <div className="bg-zinc-9 flex items-center justify-between gap-8 p-8">
        <div className="flex max-w-[30%] flex-col items-center text-center">
          <div className="flex flex-row gap-2">
            <h1 className="pb-2 text-2xl font-bold">Suporte humanizado</h1>
            <Headset size={30} />
          </div>
          <div className="text-zinc-100">
            O ATM Suporte é a solução ideal para sanar os problemas de telefonia
            móvel da sua empresa.
          </div>
        </div>

        <div className="h-32 w-[1px] bg-gray-500"></div>

        <div className="flex max-w-[30%] flex-col items-center text-center">
          <div className="flex flex-row gap-2">
            <h1 className="pb-2 text-2xl font-bold">Líder de mercado</h1>
            <Award size={30} />
          </div>
          <div className="text-zinc-100">
            Fundada em 2007, atualmente, somos líderes no segmento de
            Outsourcing de mobilidade no Brasil.
          </div>
        </div>

        <div className="h-32 w-[1px] bg-gray-500"></div>

        <div className="flex max-w-[30%] flex-col items-center text-center">
          <div className="flex flex-row gap-2">
            <h1 className="pb-2 text-2xl font-bold">Manutenção e reparo</h1>
            <Pin size={30} />
          </div>
          <div className="text-zinc-100">
            A ATM conta com um laboratório próprio de manutenção, onde
            realizamos todos os reparos dos equipamentos.
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-zinc-950">
        <div className="flex flex-row items-center justify-center gap-10 bg-zinc-950 p-10">
          <div className="mb-4 md:mb-0 md:ml-16">
            <Image
              className="h-auto w-full rounded-xl md:w-[400px]"
              src={carroEvs}
              alt="Example image"
            />
          </div>
          <div className="flex max-w-[800px] flex-col gap-8">
            <h1 className="h-auto w-full text-center text-zinc-100 lg:text-8xl">
              ATM Evs
            </h1>
            <div className="text-lx text-justify text-zinc-100">
              Somos especialistas em carregamento de veículos elétricos,
              desenvolvemos soluções inovadoras. Nosso foco na eletromobilidade
              reflete nossa paixão por um mundo mais sustentável. Fabricamos
              Pontos de Carregamento Inteligentes de alta qualidade,
              impulsionando a mobilidade elétrica para um futuro melhor e mais
              limpo. Junte-se à revolução conosco!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 bg-zinc-950 p-10">
          <h1 className="text-center text-4xl font-bold text-blue-500">
            Atendimentos:
          </h1>

          <div className="flex flex-row justify-between px-[8%]">
            <Image
              className="md: flex h-auto w-full transform shadow-lg transition-all ease-in-out hover:scale-105 md:w-[300px]"
              src={estabelecimentos}
              alt="Example image"
            />

            <Image
              className="md: flex h-auto w-full transform shadow-lg transition-all ease-in-out hover:scale-105 md:w-[300px]"
              src={residenciais}
              alt="Example image"
            />

            <Image
              className="md: flex h-auto w-full transform shadow-lg transition-all ease-in-out hover:scale-105 md:w-[300px]"
              src={condominios}
              alt="Example image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
