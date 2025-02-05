import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Questions() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-2xl font-bold dark:text-zinc-300 md:text-4xl">
        Dúvidas frequentes
      </h1>

      <div className="flex justify-center pb-20">
        <Accordion type="single" collapsible className="w-[80%] md:w-[50%]">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que é MDM?</AccordionTrigger>
            <AccordionContent className="text-justify font-inter text-xs font-medium dark:text-zinc-400">
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
            <AccordionContent className="text-justify font-inter text-xs font-medium dark:text-zinc-400">
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
            <AccordionContent className="text-justify font-inter text-xs font-medium dark:text-zinc-400">
              O TOOP é uma ferramenta poderosa que otimiza a gestão de dados,
              simplifica processos e garante a segurança e conformidade. Ele
              representa um avanço significativo na forma como interagimos com
              dados e serviços públicos, tornando-os mais acessíveis e
              eficientes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Como funciona nossos planos?</AccordionTrigger>
            <AccordionContent className="text-justify font-inter text-xs font-medium dark:text-zinc-400">
              Nosso plano está 100% gratuito até o fim de 2025!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
