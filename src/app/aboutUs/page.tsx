'use client'

import Image from 'next/image'
import Link from 'next/link'
import atmOutsourcing from '../../../public/atm_outsourcing.jpg'
import atmEvs from '../../../public/atm_evs_logo.jpg'
import atmHome from '../../../public/atm_home.jpg'
import grupoAtm from '../../../public/grupo_atm.png'
import valores from '../../../public/valores_atm.png'
import manoel from '../../../public/Manoel.png'
import iconLight from '../../../public/icon-white.png'
import iconDark from '../../../public/icon-dark.png'
import logoLight from '../../../public/logo-white.png'
import logoDark from '../../../public/logo-dark.png'

import {
  CornerUpRight,
  Dot,
  Handshake,
  Heart,
  House,
  Lightbulb,
  Smartphone,
  SmartphoneCharging,
  Sparkles,
} from 'lucide-react'

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col p-[5%] md:px-[10%]">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex w-full flex-col gap-4 text-center md:w-[50%] md:text-justify">
            <h1 className="text-4xl font-bold text-blue-600 md:text-6xl">
              Quem Somos
            </h1>
            <div>
              A ATM Outsourcing foi fundada em 2007, atualmente, somos líderes
              no segmento de Outsourcing de mobilidade no Brasil. Fabricante de
              Smartphones corporativos homologados pela ANATEL e desenvolvedora
              de sistemas de MDM, a ATM Outsourcing é referência em soluções de
              mobilidade corporativa.
            </div>
          </div>
          <Image
            className="hidden h-auto w-[80%] rounded-xl transition-all md:w-[35%] dark:md:block"
            src={iconLight}
            alt="ícone Toop"
          />
          <Image
            className="hidden h-auto w-[80%] rounded-xl transition-all dark:hidden md:block md:w-[35%]"
            src={iconDark}
            alt="ícone Toop"
          />
        </div>

        <div className="flex flex-col py-20">
          <div className="flex flex-col items-center gap-4 pb-10 text-center md:flex-row md:text-left">
            <h1 className="font-sans text-3xl md:text-4xl">
              Vantagens de usar o
            </h1>
            <Image
              className="hidden h-auto w-[80px] dark:block md:w-[150px]"
              src={logoLight}
              alt="logo Toop"
            />
            <Image
              className="block h-auto w-[80px] dark:hidden md:w-[150px]"
              src={logoDark}
              alt="logo Toop"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
              <div className="md:max-w-[300px]">
                <h2 className="pb-5 font-sans text-xl text-blue-500">
                  Controle e Segurança
                </h2>
                <p className="pb-4 text-sm">
                  - Controle total sobre dispositivos corporativos para proteger
                  dados sensíveis.
                </p>
                <p className="pb-4 text-sm">
                  - Capacidade de aplicar políticas de segurança, como
                  autenticação forte e criptografia.
                </p>
                <p className="text-sm">
                  - Remoção remota de dados em caso de perda ou roubo do
                  dispositivo.
                </p>
              </div>

              <div className="md:max-w-[300px]">
                <h2 className="pb-5 font-sans text-xl text-blue-500">
                  Gestão Centralizada
                </h2>
                <p className="pb-4 text-sm">
                  - Monitoramento e gerenciamento de todos os dispositivos em um
                  único painel.
                </p>
                <p className="pb-4 text-sm">
                  - Instalação e atualização de aplicativos de forma
                  centralizada e sem necessidade de interação do usuário.
                </p>
                <p className="text-sm">
                  - Definição de perfis de configuração personalizados por
                  departamento ou função.
                </p>
              </div>

              <div className="md:max-w-[300px]">
                <h2 className="pb-5 font-sans text-xl text-blue-500">
                  Aumento da Produtividade
                </h2>
                <p className="pb-4 text-sm">
                  - Acesso simplificado a ferramentas e aplicativos essenciais
                  para o trabalho.
                </p>
                <p className="pb-4 text-sm">
                  - Redução do tempo de inatividade com suporte remoto e
                  diagnósticos em tempo real.
                </p>
                <p className="text-sm">
                  - Controle sobre o uso de aplicativos para garantir o foco nas
                  atividades corporativas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
              <div className="md:max-w-[300px]">
                <h2 className="pb-5 font-sans text-xl text-blue-500">
                  Flexibilidade e Escalabilidade
                </h2>
                <p className="pb-4 text-sm">
                  - Suporte a uma ampla gama de dispositivos Android, desde
                  smartphones a tablets e dispositivos específicos (como
                  coletores de dados).
                </p>
                <p className="pb-4 text-sm">
                  - Capacidade de adicionar ou remover dispositivos e usuários
                  conforme necessário.
                </p>
              </div>

              <div className="md:max-w-[300px]">
                <h2 className="pb-5 font-sans text-xl text-blue-500">
                  Conformidade e Auditoria
                </h2>
                <p className="pb-4 text-sm">
                  - Relatórios detalhados para rastrear o uso e a conformidade
                  com as políticas da empresa.
                </p>
                <p className="pb-4 text-sm">
                  - Ferramentas de auditoria para garantir que os dispositivos
                  estejam em conformidade com regulamentos específicos.
                </p>
              </div>

              <div className="md:max-w-[300px]">
                <h2 className="pb-5 font-sans text-xl text-blue-500">
                  Redução de Custos Operacionais
                </h2>
                <p className="pb-4 text-sm">
                  - Automação de tarefas de gerenciamento reduz a necessidade de
                  suporte manual.
                </p>
                <p className="pb-4 text-sm">
                  - Minimização de riscos de violações de dados que podem gerar
                  custos elevados.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-screen flex-col items-center justify-center gap-6 pb-10 md:flex-row md:pb-0">
          <div className="mb-6 flex w-full justify-center md:mb-0 md:ml-16 md:w-auto">
            <Image
              className="h-auto w-[90%] rounded-xl md:w-[800px]"
              src={valores}
              alt="Example image"
            />
          </div>

          <div className="flex flex-col items-center gap-8 md:items-start">
            <Image
              className="h-auto w-[90%] rounded-xl md:w-[700px]"
              src={grupoAtm}
              alt="Example image"
            />

            <div className="flex flex-col items-center justify-end gap-4 text-zinc-100 md:flex-row">
              <Image
                className="h-auto w-[60%] rounded-xl md:w-[200px]"
                src={manoel}
                alt="Example image"
              />

              <div className="text-center md:text-end">
                <div className="text-2xl font-bold">Manoel de Cesare Filho</div>
                <div>CEO ATM Outsourcing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[300px] flex-col items-center justify-center gap-8 pb-16 md:flex-row md:pb-32">
          <div className="flex flex-col items-center justify-center text-center md:w-[50%] md:pl-10">
            <svg
              className="text-blue-600"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="6em"
              width="6em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
            </svg>

            <h1 className="pb-4 text-4xl font-bold text-blue-600">Propósito</h1>
            <div className="font-sans text-xl">
              Ajudar e inspirar com exemplo para dar sentido a vida em Deus.
            </div>
          </div>

          <div className="hidden h-72 w-[1px] bg-gray-500 md:block"></div>

          <div className="flex flex-col items-center justify-center text-center md:w-[50%] md:pl-10 md:text-left">
            <svg
              className="text-blue-600"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="6em"
              width="6em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 7a5 5 0 1 0 5 5"></path>
              <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
              <path d="M15 6v3h3l3 -3h-3v-3z"></path>
              <path d="M15 9l-3 3"></path>
            </svg>

            <h1 className="pb-4 text-4xl font-bold text-blue-600">Missão</h1>

            <div className="font-sans text-xl">
              A nossa missão é ajudar os clientes e colaboradores a garantirem
              uma qualidade de vida e realização no seu trabalho com suporte da
              tecnologia.
            </div>
          </div>
        </div>

        <div className="min-h-[200px] flex-col gap-2 pb-20">
          <div className="text-center font-sans text-3xl md:text-4xl">
            Nossos Valores
          </div>

          <div className="flex flex-col items-center justify-center gap-2 pt-10 md:hidden">
            <h1 className="text-2xl font-bold">Respeito</h1>
            <h1 className="text-2xl font-bold">Inovação</h1>
            <h1 className="text-2xl font-bold">Autenticidade</h1>
            <h1 className="text-2xl font-bold">Confiança</h1>
          </div>

          <div className="hidden w-[100%] flex-row items-center justify-center gap-10 pt-10 md:flex">
            <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full border border-blue-800 bg-zinc-50 shadow-lg transition-all duration-300 ease-in-out hover:items-start md:hover:w-[850px]">
              <div className="items-center justify-center p-5 text-center font-sans text-3xl">
                <Heart
                  size={80}
                  className="items-center justify-center text-center text-blue-800 md:block"
                />
              </div>
              <div
                style={{ pointerEvents: 'none' }}
                className="hidden pt-3 opacity-0 transition-opacity duration-300 ease-in-out md:block md:group-hover:opacity-100"
              >
                <h1 className="text-3xl font-bold text-blue-800">Respeito</h1>
                <div className="absolute text-lg text-zinc-950">
                  Amar o próximo com justiça, dedicação e empatia visando o
                  crescimento da empresa para que tenhamos um clima leve e
                  familiar.
                </div>
              </div>
            </div>

            <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full border border-blue-800 bg-zinc-50 shadow-lg transition-all duration-300 ease-in-out hover:items-start md:hover:w-[850px]">
              <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
                <Sparkles size={80} className="text-blue-800" />
              </div>
              <div
                style={{ pointerEvents: 'none' }}
                className="hidden pt-3 opacity-0 transition-opacity duration-300 ease-in-out md:block md:group-hover:opacity-100"
              >
                <h1 className="text-3xl font-bold text-blue-800">
                  Autenticidade
                </h1>
                <div className="absolute text-lg text-zinc-950">
                  Agimos com integridade, pioneirismo, transparência,
                  originalidade e responsabilidade social para oferecer a
                  melhoria contínua aos nossos clientes e serviços.
                </div>
              </div>
            </div>
          </div>

          <div className="hidden w-[100%] flex-row items-center justify-center gap-10 pt-10 md:flex">
            <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full border border-blue-800 bg-zinc-50 shadow-lg transition-all duration-300 ease-in-out hover:items-start md:hover:w-[800px]">
              <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
                <Lightbulb size={80} className="text-blue-800" />
              </div>
              <div
                style={{ pointerEvents: 'none' }}
                className="hidden pt-3 opacity-0 transition-opacity duration-300 ease-in-out md:block md:group-hover:opacity-100"
              >
                <h1 className="text-3xl font-bold text-blue-800">Inovação</h1>
                <div className="absolute text-lg text-zinc-950">
                  Ser criativo, aperfeiçoar nossos produtos e desenvolver novas
                  soluções para servir com eficiência nossos clientes e
                  colaboradores.
                </div>
              </div>
            </div>

            <div className="group flex min-h-[100px] w-[120px] transform cursor-pointer flex-row gap-2 rounded-full border border-blue-800 bg-zinc-50 shadow-lg transition-all duration-300 ease-in-out hover:items-start md:hover:w-[850px]">
              <div className="flex flex-col items-center justify-center p-5 text-center font-sans text-3xl">
                <Handshake size={80} className="text-blue-800" />
              </div>
              <div
                className="hidden pt-3 opacity-0 transition-opacity duration-300 ease-in-out md:block md:group-hover:opacity-100"
                style={{ pointerEvents: 'none' }}
              >
                <h1 className="text-3xl font-bold text-blue-800">Confiança</h1>
                <div className="absolute text-lg text-zinc-950">
                  É a certeza que o trabalho é realizado com união, competência,
                  força e comprometimento garantindo a qualidade dos serviços
                  para o sucesso do cliente.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="bg-zinc-100 py-4 text-center font-sans text-xl dark:bg-zinc-900 md:text-4xl">
        Conheça mais sobre as outras nossas empresas:
      </h1>

      <div className="bg-zinc-9 flex flex-col items-center justify-center gap-8 bg-zinc-100 dark:bg-zinc-900 md:min-h-[280px] md:flex-row md:gap-x-28">
        <Link
          href="https://atmoutsourcing.com.br/"
          className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl border-2 bg-zinc-100 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-800 dark:bg-shapePrimary"
        >
          <Image
            className="w-[100px]"
            src={atmOutsourcing}
            alt="Example image"
          />
          <Smartphone size="60" />
        </Link>

        <Link
          href="https://atmevs.com.br/"
          className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl border-2 bg-zinc-100 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-800 dark:bg-shapePrimary"
        >
          <Image className="w-[100px]" src={atmEvs} alt="Example image" />
          <SmartphoneCharging size="60" />
        </Link>

        <Link
          href="https://atmhome.com.br/"
          className="flex min-h-[200px] min-w-[200px] transform cursor-pointer flex-col items-center gap-2 rounded-3xl border-2 bg-zinc-100 shadow-lg transition-all ease-in-out hover:scale-105 hover:text-blue-800 dark:bg-shapePrimary"
        >
          <Image className="w-[100px]" src={atmHome} alt="Example image" />
          <House size="60" />
        </Link>
      </div>
    </>
  )
}
