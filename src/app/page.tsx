'use client'
import iconWhite from '@/../public/icon-white.png'
import iconDark from '@/../public/icon-dark.png'
import cellToop from '@/../public/cellToop.png'

import Image from 'next/image'

import React from 'react'
import { Check, Clock, SquarePen } from 'lucide-react'
import { Button } from '@/components/button'
import { WhatsappLogo } from 'phosphor-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

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
            <div className="flex flex-col items-center gap-4 text-center md:text-start">
              <div className="flex flex-col items-center">
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

                <h1 className="flex justify-center font-plusJakartaSans text-3xl md:text-4xl">
                  O sistema EMM que transforma a gestão de
                </h1>

                <h1 className="flex justify-center font-plusJakartaSans text-3xl md:text-4xl">
                  dispositivos em uma experiência prática e eficiente
                </h1>

                <span className="text-md mt-2 font-plusJakartaSans text-zinc-600 dark:text-textBase">
                  Gerenciamento dispositivos móveis de maneira segura
                  inteligente.
                </span>
              </div>

              <Button>
                <Link href={'/plans'} type="submit">
                  Saiba mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[1256px] top-[291px] hidden h-[438px] w-[1056px] max-w-[1440px] bg-gradient-radial from-blue-500 to-blue-800 blur-[250px] md:flex" />

      <div className="flex flex-col items-center justify-center gap-10 px-[4%] py-[4%] md:flex-row">
        <Image src={cellToop} alt="Toop icon" className="h-[400px] w-[400px]" />
        <div className="flex flex-col gap-4 rounded-xl p-6 shadow-md">
          <h1 className="text-2xl font-bold">
            Por que as empresas adoram o TOOP?
          </h1>
          <p>
            Empresas escolhem o TOOP porque ele transforma a gestão de
            dispositivos móveis em uma experiência simples, segura e eficiente.
            Nossa plataforma EMM é projetada para atender às necessidades de
            negócios modernos, oferecendo:
          </p>
          <ul className="list-inside list-disc">
            <li className="pb-4">
              <strong>Segurança de ponta a ponta:</strong> Protegemos dados
              sensíveis com controles avançados e políticas robustas, garantindo
              tranquilidade às empresas.
            </li>
            <li className="pb-4">
              <strong>Gestão centralizada:</strong> Administradores podem
              monitorar, configurar e gerenciar dispositivos em um único painel
              intuitivo.
            </li>
            <li className="pb-4">
              <strong>Produtividade maximizada:</strong> Com ferramentas fáceis
              de usar, os colaboradores têm acesso rápido e seguro aos recursos
              necessários para o trabalho.
            </li>
            <li className="pb-4">
              <strong>Flexibilidade para crescer:</strong> O TOOP se adapta às
              demandas de empresas de qualquer tamanho, com soluções escaláveis
              que acompanham o crescimento do negócio.
            </li>
            <li className="pb-4">
              <strong>Suporte confiável:</strong> Nossa equipe está sempre
              pronta para oferecer assistência, ajudando as empresas a superar
              desafios e alcançar seus objetivos.
            </li>
          </ul>
        </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-10 md:flex-row md:items-start md:p-8">
        <div className="flex">
          <div
            className="absolute flex min-h-[450px] w-[95%] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300 md:w-[380px]"
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

        <div className="flex min-h-[450px] max-w-[380px] flex-col gap-3 rounded-3xl bg-zinc-100 p-4 px-5 dark:bg-shapePrimary md:scale-110">
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

              <p className="font-inter text-sm font-semibold">Toop</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="items-center bg-gradient-to-b from-[#22D3EE] via-[#0EA5E9] to-[#3B82F6] bg-clip-text font-inter text-2xl font-bold leading-[22px] text-transparent">
                FREE
              </h1>

              <p className="space-y-4 font-inter text-sm font-bold leading-tight dark:text-zinc-400">
                100% Gratuito até o fim de 2025!!
              </p>
            </div>
          </div>

          <div className="py-2 font-inter text-xl font-bold">R$ 0,00/mês</div>

          <Button variant="secondary">Contratar agora!</Button>

          <div className="mt-4 hidden h-[1px] w-full bg-gray-500 md:block" />

          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2 font-inter text-xs">
              <span className="text-sm">
                🎉 Boas notícias! Todas as features do TOOP estão 100% liberadas
                para você aproveitar ao máximo! 🚀💙
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
          <div
            className="absolute flex min-h-[450px] w-[95%] flex-col items-center justify-center gap-2 p-10 text-xl font-semibold dark:text-zinc-300 md:w-[380px]"
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

      <div className="flex flex-col items-center gap-8 px-[10%] pt-[20%] md:pt-[10%]">
        <h1 className="text-2xl font-bold dark:text-zinc-300 md:text-4xl">
          Contato rápido
        </h1>
        <div className="hidden h-[1px] w-full bg-gray-500 md:block" />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 py-14 md:flex-row md:items-start">
        <div className="flex h-[528px] w-[350px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary md:w-[450px]">
          <div className="flex flex-col items-center gap-5 py-6 dark:text-zinc-300">
            <SquarePen className="h-[32.72px] w-[35px]" />
            <p className="text-xl font-bold md:text-2xl">
              Nos solicite uma proposta
            </p>
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

          <div className="flex h-full items-end justify-center pb-8">
            <Button style={{ width: '90%' }} variant="secondary">
              Solicitar proposta
            </Button>
          </div>
        </div>

        <div className="flex h-[528px] w-[350px] flex-col gap-3 rounded-3xl bg-zinc-100 px-5 dark:bg-shapePrimary md:w-[450px]">
          <div className="flex flex-col items-center gap-5 py-6 dark:text-zinc-300">
            <WhatsappLogo className="h-[32.72px] w-[35px] text-green-600" />

            <p className="text-xl font-bold md:text-2xl">Atendimento rápido</p>
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

          <div className="flex h-full items-end justify-center pb-8">
            <Button style={{ width: '90%' }} variant="secondary">
              Chamar no WhatsApp
            </Button>
          </div>
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
              Nosso plano está 100% gratuito até o fim de 2025!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
