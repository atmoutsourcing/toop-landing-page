'use client'
import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import cellToop from '@/../public/cellToop.png'

import Image from 'next/image'

import React from 'react'
import { ArrowRight, Check, Clock, Lock, SquarePen } from 'lucide-react'
import { Button } from '@/components/button'
import { WhatsappLogo } from 'phosphor-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col font-inter">
      <div
        style={{ zIndex: '-1' }}
        className="absolute left-[-380px] top-[-153.81px] h-[649.99px] w-[575.79px] rotate-[-0.02deg] bg-gradient-radial from-blue-500 to-blue-800 blur-[250px]"
      />

      <div className="relative flex min-h-screen flex-col">
        <div className="min-h-full">
          <div className="mt-28 items-center font-bold md:mt-52">
            <div className="flex flex-col items-center gap-2 text-center md:text-start">
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

              <h1 className="flex justify-center text-3xl md:text-4xl">
                O sistema EMM que transforma a gestão de
              </h1>

              <h1 className="flex justify-center text-3xl md:text-4xl">
                dispositivos em uma experiência prática e eficiente
              </h1>

              <span className="mt-2 text-lg text-zinc-600 dark:text-textBase">
                Gerenciamento dispositivos móveis de maneira segura inteligente.
              </span>

              <div className="mt-2">
                <button
                  className="isolation-auto flex h-[45px] items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-50 px-6 py-3 text-[16px] font-bold text-shapePrimary shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-shapePrimary before:transition-all before:duration-700 hover:text-zinc-50 before:hover:left-0 before:hover:w-full dark:bg-shapePrimary dark:text-zinc-50 dark:before:bg-zinc-50 dark:hover:text-zinc-950"
                  type="submit"
                >
                  Saiba mais
                </button>
                {/* <button
                  className="group relative isolation-auto z-10 mx-auto flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 bg-[#0A0D2D] px-4 py-2 font-sans text-lg font-bold text-gray-50 shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-zinc-50 before:transition-all before:duration-700 hover:text-zinc-950 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold"
                  type="submit"
                >
                  Saiba mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 19"
                    className="h-8 w-8 rotate-45 justify-end rounded-full border border-gray-700 bg-gray-50 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-800"
                  >
                    <path
                      className="fill-gray-800 group-hover:fill-gray-50"
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[1256px] top-[291px] h-[438px] w-[1056px] max-w-[1440px] bg-gradient-radial from-blue-500 to-blue-800 blur-[250px]" />

      <div className="flex flex-col justify-center gap-10 px-[4%] py-[4%] md:flex-row">
        <Image src={cellToop} alt="Toop icon" />
        <div className="flex flex-col gap-4 rounded-xl p-6 shadow-md dark:text-zinc-100">
          <h1 className="text-center text-2xl dark:text-zinc-300 md:text-4xl">
            Por que as empresas adoram o Toop?
          </h1>
          <p>
            Empresas escolhem o TOOP porque ele transforma a gestão de
            dispositivos móveis em uma experiência simples, segura e eficiente.
            Nossa plataforma EMM é projetada para atender às necessidades de
            negócios modernos, oferecendo:
          </p>
          <ul className="list-inside list-disc">
            <li className="pb-2">
              <strong>Segurança de ponta a ponta:</strong> Protegemos dados
              sensíveis com controles avançados e políticas robustas, garantindo
              tranquilidade às empresas.
            </li>
            <li className="pb-2">
              <strong>Gestão centralizada:</strong> Administradores podem
              monitorar, configurar e gerenciar dispositivos em um único painel
              intuitivo.
            </li>
            <li className="pb-2">
              <strong>Produtividade maximizada:</strong> Com ferramentas fáceis
              de usar, os colaboradores têm acesso rápido e seguro aos recursos
              necessários para o trabalho.
            </li>
            <li className="pb-2">
              <strong>Flexibilidade para crescer:</strong> O TOOP se adapta às
              demandas de empresas de qualquer tamanho, com soluções escaláveis
              que acompanham o crescimento do negócio.
            </li>
            <li className="pb-2">
              <strong>Suporte confiável:</strong> Nossa equipe está sempre
              pronta para oferecer assistência, ajudando as empresas a superar
              desafios e alcançar seus objetivos.
            </li>
          </ul>
          <p className="">
            O TOOP é mais do que uma ferramenta — é um parceiro estratégico para
            empresas que valorizam inovação e eficiência. 🚀
          </p>
        </div>

        {/* <div className="flex flex-col items-center gap-[15%] pt-[5%]">
          <h1 className="text-center text-2xl dark:text-zinc-300 md:text-start md:text-4xl">
            O porquê de empresas adorarem o TOOP.
          </h1>
          <div className="flex max-w-[550px] flex-col text-center text-sm md:text-start md:text-lg">
            <div>
              Empresas escolhem o TOOP porque ele transforma a gestão de
              dispositivos móveis em uma experiência simples, segura e
              eficiente. Nossa plataforma EMM é projetada para atender às
              necessidades de negócios modernos, oferecendo:
            </div>
            <div className="flex flex-row text-sm">
              <DotOut />
              Segurança de ponta a ponta: Protegemos dados sensíveis com
              controles avançados e políticas robustas, garantindo tranquilidade
              às empresas.
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-center gap-[20%] py-10 md:h-screen">
        <div
          className="absolute hidden h-[100%] w-[5%] rounded-[8px] bg-gradient-radial from-[#5aa2fa] to-[#223d88] blur-[180px] md:flex"
          style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
        />
        <h1 className="pb-[5%] text-center text-2xl dark:text-zinc-300 md:text-start md:text-4xl">
          Quais são os beneficios de usar o TOOP?
        </h1>

        <div className="flex w-full flex-col gap-16 md:pl-[10%]">
          <div className="grid grid-cols-1 justify-between gap-16 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:text-left">
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

          <div className="grid grid-cols-1 gap-16 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:text-left">
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

      <div className="flex h-full flex-col items-center justify-center gap-10 p-8 md:flex-row md:items-start">
        <div>
          <div
            className="absolute flex min-h-[450px] w-[380px] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300"
            style={{ zIndex: '1' }}
          >
            <Clock className="h-[40px] w-[40px]" />
            Disponível em breve
          </div>
          <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 opacity-[.25] blur-[5px] dark:bg-shapePrimary">
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
                  PRO
                </h1>

                <p className="space-y-4 font-inter text-xs font-bold leading-tight dark:text-zinc-400">
                  Solução robusta para empresas que buscam gerenciar aplicativos
                  e dispositivos de forma integrada, com análises avançadas e
                  suporte especializado.
                </p>
              </div>
            </div>

            <div className="py-2 font-inter text-xl font-bold">
              R$ **,**/mês
            </div>

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
                Relatórios básicos com informações sobre dispositivos
                cadastrados.
              </div>

              <div className="flex flex-row gap-2 font-inter text-xs">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                Atendimento por e-mail com prioridade para resolução de
                problemas
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary md:scale-110">
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

        <div className="flex">
          <div
            className="absolute flex min-h-[450px] w-[380px] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300"
            style={{ zIndex: '1' }}
          >
            <Clock className="h-[40px] w-[40px]" />
            Disponível em breve
          </div>
          <div className="opacity- flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 opacity-[.25] blur-[5px] dark:bg-shapePrimary">
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

            <div className="py-2 font-inter text-xl font-bold">
              R$ **,**/mês
            </div>

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
                Relatórios básicos com informações sobre dispositivos
                cadastrados.
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

      <div className="flex flex-col items-center gap-8 px-[10%] pt-[5%]">
        <h1 className="text-2xl font-bold dark:text-zinc-300 md:text-4xl">
          Contato rápido
        </h1>
        <div className="hidden h-[1px] w-full bg-gray-500 md:block" />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 py-14 md:flex-row md:items-start">
        <div className="flex h-[528px] w-[350px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary md:w-[450px]">
          <div className="flex flex-col items-center gap-5 py-6 dark:text-zinc-300">
            <SquarePen className="h-[32.72px] w-[35px]" />
            <p className="text-2xl font-bold">Nos solicite uma proposta</p>
            <div className="hidden h-[1px] w-full bg-gray-500 md:block" />
          </div>

          <div className="flex flex-col gap-3 px-4">
            <input
              id="name"
              type="text"
              placeholder="Nome"
              className="h-[42px] w-full rounded-xl p-4 text-base font-bold shadow-sm dark:bg-zinc-700 placeholder:dark:text-zinc-500"
            />

            <input
              id="email"
              type="text"
              placeholder="E-mail"
              className="h-[42px] w-full rounded-xl p-4 text-base font-bold shadow-sm dark:bg-zinc-700 placeholder:dark:text-zinc-500"
            />

            <textarea
              id="message"
              placeholder="Mensagem"
              className="min-h-[108px] w-full rounded-xl p-3 text-base font-bold text-zinc-950 shadow-sm dark:bg-zinc-700 placeholder:dark:text-zinc-500"
            />
          </div>

          <Button
            style={{ width: '90%', marginLeft: '5%', marginTop: '13%' }}
            variant="secondary"
          >
            Solicitar proposta
          </Button>
        </div>

        <div className="flex h-[528px] w-[350px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary md:w-[450px]">
          <div className="flex flex-col items-center gap-5 py-6 dark:text-zinc-300">
            <WhatsappLogo className="h-[32.72px] w-[35px] text-green-600" />

            <p className="text-2xl font-bold">Atendimento rápido</p>
            <div className="hidden h-[1px] w-full bg-gray-500 md:block" />
          </div>

          <div className="flex flex-col gap-2 px-4 text-center font-bold dark:text-zinc-400">
            <p>
              Estamos comprometidos com a agilidade e excelência no atendimento.
            </p>
            <p>
              Resolvemos 95% dos chamados em até 10 minutos e alcançamos 100% de
              solução em até 8 horas, porque a sua satisfação é nossa
              prioridade.
            </p>
          </div>

          <Button
            style={{ width: '90%', marginLeft: '5%', marginTop: '29%' }}
            variant="secondary"
          >
            Chamar no WhatsApp
          </Button>
        </div>
      </div>

      <h1 className="pb-10 text-center text-2xl font-bold dark:text-zinc-300 md:py-20 md:text-4xl">
        Dúvidas frequentes
      </h1>

      <div className="flex justify-center pb-24">
        <Accordion type="single" collapsible className="w-[80%] md:w-[50%]">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que é MDM?</AccordionTrigger>
            <AccordionContent className="text-justify font-inter text-xs font-bold dark:text-zinc-400">
              Significa Mobile Device Management (Gerenciamento de Dispositivos
              Móveis). É uma solução de software que permite às organizações
              gerenciar, controlar e proteger dispositivos móveis, como
              smartphones e tablets, usados pelos funcionários. Com o MDM, é
              possível configurar dispositivos remotamente, aplicar políticas de
              segurança, controlar aplicativos instalados e monitorar a
              conformidade dos dispositivos com as normas da empresa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>O que é EMM?</AccordionTrigger>
            <AccordionContent className="text-justify font-inter text-xs font-bold dark:text-zinc-400">
              Significa Enterprise Mobility Management (Gerenciamento de
              Mobilidade Empresarial). Trata-se de um conjunto abrangente de
              serviços e tecnologias que gerenciam dispositivos móveis,
              aplicativos e conteúdo corporativo. O EMM inclui MDM, mas também
              abrange outros aspectos, como gerenciamento de aplicativos móveis
              (MAM), gerenciamento de identidade e acesso (IAM) e gerenciamento
              de conteúdo móvel (MCM). O objetivo do EMM é proporcionar uma
              experiência móvel segura e eficiente para os funcionários.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>O que é o TOOP?</AccordionTrigger>
            <AccordionContent className="text-justify font-inter text-xs font-bold dark:text-zinc-400">
              O TOOP é uma ferramenta poderosa que otimiza a gestão de dados,
              simplifica processos e garante a segurança e conformidade. Ele
              representa um avanço significativo na forma como interagimos com
              dados e serviços públicos, tornando-os mais acessíveis e
              eficientes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Como funciona nossos planos?</AccordionTrigger>
            <AccordionContent className="text-justify font-inter text-xs font-bold dark:text-zinc-400">
              Os planos do TOOP representam uma abordagem inovadora e eficiente
              para a gestão de dados e serviços públicos. Eles garantem
              segurança, conformidade e uma experiência aprimorada para todos os
              usuários. Se precisar de mais informações ou tiver outras
              perguntas, estou aqui para ajudar!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
