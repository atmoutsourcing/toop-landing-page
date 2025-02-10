export function Benefits() {
  return (
    <div className="flex flex-col items-center justify-center gap-[40] px-4 py-10 md:h-screen">
      <div
        className="absolute hidden h-[1000px] w-[5%] rounded-[8px] bg-gradient-radial from-[#bfdbfe] to-[#2563eb] blur-[180px] dark:from-blue-500 dark:to-blue-950 dark:blur-[150px] md:flex"
        style={{ transform: 'rotate(-58.67deg)', zIndex: '-1' }}
      />
      <h1 className="pb-12 text-center text-2xl font-bold tracking-tighter dark:text-zinc-300 md:text-start md:text-3xl">
        Quais são os benefícios de usar o TOOP?
      </h1>

      <div className="flex w-full flex-col gap-16 font-inter md:pl-[10%]">
        <div className="grid grid-cols-1 justify-between gap-16 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:text-left">
          <div className="md:max-w-[350px]">
            <h2 className="pb-5 text-xl font-semibold text-sky-500 dark:text-sky-400">
              <span className="font-light text-zinc-950 dark:text-zinc-100">
                |
              </span>{' '}
              Controle e Segurança
            </h2>
            <p className="pb-1 text-sm">
              Controle total sobre dispositivos corporativos para proteger dados
              sensíveis. <br />
              Capacidade de aplicar políticas de segurança, como autenticação
              forte e criptografia. <br />
              Remoção remota de dados em caso de perda ou roubo do dispositivo.
            </p>
          </div>

          <div className="md:max-w-[350px]">
            <h2 className="pb-5 text-xl font-semibold text-sky-500 dark:text-sky-400">
              <span className="font-light text-zinc-950 dark:text-zinc-100">
                |
              </span>{' '}
              Gestão Centralizada
            </h2>
            <p className="pb-1 text-sm">
              Monitoramento e gerenciamento de todos os dispositivos em um único
              painel. <br />
              Instalação e atualização de aplicativos de forma centralizada e
              sem necessidade de interação do usuário. <br />
              Definição de perfis de configuração personalizados por
              departamento ou função.
            </p>
          </div>

          <div className="md:max-w-[350px]">
            <h2 className="pb-5 text-xl font-semibold text-sky-500 dark:text-sky-400">
              <span className="font-light text-zinc-950 dark:text-zinc-100">
                |
              </span>{' '}
              Aumento da Produtividade
            </h2>
            <p className="pb-1 text-sm">
              Acesso simplificado a ferramentas e aplicativos essenciais para o
              trabalho. <br />
              Redução do tempo de inatividade com suporte remoto e diagnósticos
              em tempo real. <br />
              Controle sobre o uso de aplicativos para garantir o foco nas
              atividades corporativas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:text-left">
          <div className="md:max-w-[350px]">
            <h2 className="pb-5 text-xl font-semibold text-sky-500 dark:text-sky-400">
              <span className="font-light text-zinc-950 dark:text-zinc-100">
                |
              </span>{' '}
              Flexibilidade e Escalabilidade
            </h2>
            <p className="pb-1 text-sm">
              Suporte a uma ampla gama de dispositivos Android, desde
              smartphones a tablets e dispositivos específicos (como coletores
              de dados). <br />
              Capacidade de adicionar ou remover dispositivos e usuários
              conforme necessário.
            </p>
          </div>

          <div className="md:max-w-[350px]">
            <h2 className="pb-5 text-xl font-semibold text-sky-500 dark:text-sky-400">
              <span className="font-light text-zinc-950 dark:text-zinc-100">
                |
              </span>{' '}
              Conformidade e Auditoria
            </h2>
            <p className="pb-1 text-sm">
              Relatórios detalhados para rastrear o uso e a conformidade com as
              políticas da empresa. <br />
              Ferramentas de auditoria para garantir que os dispositivos estejam
              em conformidade com regulamentos específicos.
            </p>
          </div>

          <div className="md:max-w-[350px]">
            <h2 className="pb-5 text-xl font-semibold text-sky-500 dark:text-sky-400">
              <div className="flex items-center gap-2">
                <span className="font-light text-zinc-950 dark:text-zinc-100">
                  |
                </span>
                <p className="flex flex-shrink-0">
                  Redução de Custos Operacionais
                </p>
              </div>
            </h2>
            <p className="pb-1 text-sm">
              Automação de tarefas de gerenciamento reduz a necessidade de
              suporte manual. <br />
              Minimização de riscos de violações de dados que podem gerar custos
              elevados.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
