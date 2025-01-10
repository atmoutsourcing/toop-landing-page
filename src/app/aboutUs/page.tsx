import Image from 'next/image'
import imageExample from '../../../public/DALL·E 2024-12-26 15.09.21 - A sleek and modern smartphone placed on a clean, white surface. The smartphone has a minimalistic design with a large edge-to-edge display, slim bezel.webp'
import atmOutsourcing from '../../../public/atm_outsourcing.jpg'
import atmEvs from '../../../public/atm_evs_logo.jpg'
import atmHome from '../../../public/atm_home.jpg'
import grupoAtm from '../../../public/grupo_atm.png'
import valores from '../../../public/valores_atm.png'

import { House, Smartphone, SmartphoneCharging } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="flex flex-col ">
      <div className="bg-zinc-950  min-h-screen flex flex-row items-center justify-center gap-6">
        <div className="mb-4 md:mb-0 md:ml-16">
          <Image
            className="h-auto w-full rounded-xl md:w-[1500px]"
            src={valores}
            alt="Example image"
          />
        </div>
        <div className="flex flex-col gap-8">
          <Image
            className="h-auto w-full rounded-xl md:w-[1000px] mb-10"
            src={grupoAtm}
            alt="Example image"
          />

          <div className="text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas
            itaque provident a eos facere adipisci amet magni ea illo, at
            molestiae! Eius, consectetur? Hic quisquam natus vero necessitatibus
            aspernatur.
          </div>
          <div className="text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas
            itaque provident a eos facere adipisci amet magni ea illo, at
            molestiae! Eius, consectetur? Hic quisquam natus vero necessitatibus
            aspernatur.
          </div>
        </div>
      </div>

      <div className=" bg-zinc-950 min-h-[300px] gap-8 flex items-center  justify-center">
        <div className="flex items-center min-w-[50%] justify-center flex-col">
          <div>proposito</div>
          <div>
            Ajudar e inspirar com exemplo para dar sentido a vida em Deus.
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div>missao</div>
          <div>
            A nossa missão é ajudar os clientes e colaboradores a garantirem uma
            qualidade de vida e realização no seu trabalho com suporte da
            tecnologia.
          </div>
        </div>
      </div>

      <div className=" bg-zinc-9 min-h-[300px] gap-8 flex items-center  justify-center">
        <div className="bg-zinc-950 rounded-3xl min-h-[200px] min-w-[200px] gap-2 flex flex-col items-center text-zinc-50 transform hover:scale-105 cursor-pointer hover:text-blue-500 transition-all ease-in-out shadow-lg">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmOutsourcing}
            alt="Example image"
          />
          <Smartphone size="60" />
        </div>

        <div className="bg-zinc-950 rounded-3xl min-h-[200px] min-w-[200px] gap-2 flex flex-col items-center text-zinc-50 transform  hover:scale-105 cursor-pointer hover:text-blue-500 transition-all  ease-in-out shadow-lg">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmEvs}
            alt="Example image"
          />
          <SmartphoneCharging size="60" />
        </div>

        <div className="bg-zinc-950 rounded-3xl min-h-[200px] min-w-[200px] gap-2 flex flex-col items-center text-zinc-50 transform  hover:scale-105 cursor-pointer hover:text-blue-500 transition-all  ease-in-out shadow-lg">
          <Image
            className="h-auto w-full rounded-xl md:w-[100px]"
            src={atmHome}
            alt="Example image"
          />
          <House size="60" />
        </div>
      </div>

      <div className="bg-zinc-950  min-h-screen flex flex-row items-center justify-center gap-6 p-8">
        <div className="flex flex-col gap-8 max-w-[700px]">
          <h1 className="h-auto w-full text-center text-zinc-100 lg:text-8xl ">
            ATM Outsourcing
          </h1>
          <div className="text-zinc-100">
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
            className="h-auto w-full rounded-xl md:w-[1500px]"
            src={imageExample}
            alt="Example image"
          />
        </div>
      </div>
    </div>
  )
}
