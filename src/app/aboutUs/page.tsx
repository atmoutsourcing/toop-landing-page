import Image from 'next/image'
import imageExample from '../../../public/DALL·E 2024-12-26 15.09.21 - A sleek and modern smartphone placed on a clean, white surface. The smartphone has a minimalistic design with a large edge-to-edge display, slim bezel.webp'
import atmOutsourcing from '../../../public/atm_outsourcing.jpg'
import atmEvs from '../../../public/atm_evs_logo.jpg'
import atmHome from '../../../public/atm_home.jpg'
import grupoAtm from '../../../public/grupo_atm.png'
import valores from '../../../public/valores_atm.png'
import atmX50 from '../../../public/atmX50.png'

import { Award, Headset, House, Pin, Smartphone, SmartphoneCharging } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="flex flex-col ">
      <div className="bg-zinc-950  min-h-screen flex flex-row items-center justify-center gap-6 p-10">
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
          <div>imagem proposito</div>
          <div>
            "Ajudar e inspirar com exemplo para dar sentido a vida em Deus."
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div>imagem missao</div>
          <div>
            "A nossa missão é ajudar os clientes e colaboradores a garantirem uma
            qualidade de vida e realização no seu trabalho com suporte da
            tecnologia."
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

      <div className="bg-zinc-950 flex flex-row items-center justify-center gap-20 p-10">
        <div className="flex flex-col gap-8 max-w-[800px]">
          <h1 className="h-auto w-full text-center text-zinc-100 lg:text-8xl">
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
            className="h-auto w-full rounded-xl md:w-[360px]"
            src={atmX50}
            alt="Example image"
          />
        </div>
      </div>

      <div className=" bg-zinc-9 min-h-[150px] gap-8 flex items-center  justify-between px-10 ">
          <div className='flex flex-col max-w-[30%] items-center text-center'>
            <div className='flex flex-row gap-2'>

            <h1 className='text-2xl pb-2 font-bold'>Suporte humanizado</h1>
            <Headset size={30} />
            </div>
            <div className='text-zinc-100'>O ATM Suporte é a solução ideal para sanar os problemas de telefonia móvel da sua empresa.</div>
          </div>

          <div className="w-[1px] h-24 bg-gray-500 "></div>

          <div className='flex flex-col max-w-[30%] items-center text-center'>
            <div className='flex flex-row gap-2'>
              <h1 className='text-2xl pb-2 font-bold'>Líder de mercado</h1>
              <Award size={30} />
            </div>
            <div className='text-zinc-100'>Fundada em 2007, atualmente, somos líderes no segmento de Outsourcing de mobilidade no Brasil.</div>
          </div>

          <div className="w-[1px] h-24 bg-gray-500 "></div>

          <div className='flex flex-col max-w-[30%] items-center text-center'>
            <div className='flex flex-row gap-2'>
              <h1 className='text-2xl pb-2 font-bold'>Manutenção e reparo</h1>
              <Pin size={30} />
            </div>
            <div className='text-zinc-100'>A ATM conta com um laboratório próprio de manutenção, onde realizamos todos os reparos dos equipamentos.</div>
          </div>
      </div>
      
  
  </div> 
  )
}
