'use client'

import Image from 'next/image'
import { InstagramLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react'
import logoLight from '../../public/logo-white.png'
import logoDark from '../../public/logo-dark.png'

import seloSilverPartner from '../../public/Selo Silver Partner do Google.png'
import { CalendarDays, Copyright, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8 border-t-2 bg-zinc-100 p-12 dark:bg-shapePrimary">
      <div className="flex flex-col font-sans md:flex-row">
        <div className="flex items-center justify-center md:mr-24 md:flex-shrink-0 md:items-start">
          <Image
            src={logoDark}
            alt="Logo"
            className="h-auto w-36 pb-8 transition-all dark:hidden"
            suppressHydrationWarning
          />

          <Image
            src={logoLight}
            alt="Logo"
            className="hidden h-auto w-36 pb-8 transition-all dark:block"
            suppressHydrationWarning
          />
        </div>

        <div className="gap-24 md:grid md:grid-cols-4">
          <div className="flex flex-col gap-2 pb-4 md:items-center">
            <span className="text-center text-base font-bold underline underline-offset-4 dark:text-zinc-400 md:text-left">
              Links úteis
            </span>

            <div className="md:items-left flex flex-col items-center md:space-y-2">
              <span className="flex cursor-pointer gap-2 font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300">
                Suporte
              </span>

              <Link
                href={'/plans'}
                className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300"
              >
                Planos
              </Link>

              <Link
                href={'/contact'}
                className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300"
              >
                Contatos
              </Link>

              <Link
                href="/aboutUs"
                className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300"
              >
                Sobre nós
              </Link>

              <Link
                href={'/'}
                className="flex cursor-pointer gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-800 hover:underline dark:text-zinc-300"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="font-roboto flex flex-col items-center gap-2 pb-4 text-xl font-bold tracking-tighter md:items-start md:items-center">
            <div>
              <span className="text-base font-bold underline underline-offset-4 dark:text-zinc-400">
                Escritório São Paulo - SP
              </span>
            </div>

            <div className="space-y-4">
              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 md:text-justify">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                Rua Arandu, 566 - Brooklin São Paulo - SP, 04562-031
              </span>
            </div>
          </div>

          <div className="font-roboto flex flex-col items-center gap-2 pb-4 text-lg font-bold tracking-tighter md:items-start md:items-center">
            <div>
              <span className="text-base underline underline-offset-4 dark:text-zinc-400">
                Matriz
              </span>
            </div>

            <div className="space-y-1 md:space-y-2">
              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 md:text-justify">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                Georgina Business Park - Av Anísio Haddad, 8001, Milan Sul, Sala
                413, São José do Rio Preto - SP, 15091-751
              </span>

              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Phone className="h-5 w-5" />
                (17) 3211-5353 <br />
                0800 777 4343
              </span>

              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Mail className="h-5 w-5" />
                contato@atmoutsourcing.com.br
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-xl font-bold tracking-tighter md:items-start">
            <div>
              <span className="text-base font-bold underline underline-offset-4 dark:text-zinc-400">
                Horários comercial
              </span>
            </div>

            <div className="space-y-2">
              <span className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 md:text-justify">
                <CalendarDays className="h-4 w-4 flex-shrink-0" />
                Seg. a Sex. das 8h às 19h
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="hidden items-center justify-center md:absolute md:flex md:items-start md:justify-start">
          <Image
            className="h-auto w-48"
            src={seloSilverPartner}
            alt="seloSilverPartner"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 pb-8 pt-4 text-center md:pl-[25%]">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-950 p-2 dark:border-zinc-300">
              <WhatsappLogo className="h-5 w-5" />
            </div>

            <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-950 p-2 dark:border-zinc-300">
              <InstagramLogo className="h-5 w-5" />
            </div>

            <div className="flex items-center justify-center gap-4 rounded-full border border-zinc-950 p-2 dark:border-zinc-300">
              <YoutubeLogo className="h-5 w-5" />
            </div>
          </div>

          <span className="flex flex-row items-center text-xs dark:text-zinc-400">
            <Copyright className="h-4 w-4" />
            Copyright todos os direitos reservados - {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center justify-center md:absolute md:hidden md:items-start md:justify-start">
          <Image
            className="h-auto w-48"
            src={seloSilverPartner}
            alt="seloSilverPartner"
          />
        </div>
        <div className="flex dark:hidden">
          <svg
            width="391"
            height="100"
            viewBox="0 0 691 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M672.42 0H18.5797C8.33615 0 0 7.10813 0 15.8427V133.157C0 141.892 8.33615 149 18.5797 149H672.42C682.664 149 691 141.892 691 133.157V15.8427C691 7.10813 682.664 0 672.42 0ZM686.549 133.157C686.549 140.039 679.944 145.672 671.873 145.672C508.417 145.672 181.506 145.672 18.0322 145.672C9.96099 145.672 3.35566 140.039 3.35566 133.157C3.35566 103.821 3.35566 45.1638 3.35566 15.8427C3.35566 8.96046 9.96099 3.32817 18.0322 3.32817C181.488 3.32817 508.399 3.32817 671.873 3.32817C679.944 3.32817 686.549 8.96046 686.549 15.8427C686.549 45.1638 686.549 103.821 686.549 133.157Z"
              fill="#202020"
            />
            <path
              d="M122.499 77.015V105.794C122.499 105.899 121.651 106.306 120.556 106.306C118.49 106.306 117.042 105.372 117.042 101.231V92.9481C112.785 101.547 102.224 107.029 88.395 107.029C65.8062 107.029 51.6064 92.4361 51.6064 72.6628C51.6064 52.4829 67.2721 37.9805 90.2141 37.9805C101.994 37.9805 110.366 41.8056 114.852 45.6458C117.766 48.1307 119.108 50.6155 119.108 51.76C119.108 54.7569 115.699 55.0731 115.346 54.8623C111.461 48.0252 101.994 42.5435 89.9669 42.5435C70.9103 42.5435 57.9116 55.0732 57.9116 72.5724C57.9116 89.7555 69.568 102.496 89.2428 102.496C104.537 102.496 115.841 94.0023 117.042 82.316V77.768H93.0046C90.5674 77.768 89.49 77.0451 89.49 75.6898V75.2681C89.49 73.9278 90.585 73.0995 93.0046 73.0995H118.013C120.68 73.0844 122.499 74.741 122.499 77.015Z"
              fill="#202020"
            />
            <path
              d="M167.783 60.1484C167.783 62.1213 166.335 62.9495 166.087 62.8441C164.639 61.6996 162.202 60.8713 159.164 60.8713C148.973 60.8713 144.117 69.5607 144.117 82.7228V103.942C144.117 105.704 143.022 106.321 141.45 106.321H140.849C139.277 106.321 138.182 105.704 138.182 103.942V57.257C138.182 57.1516 139.03 56.745 140.125 56.745C142.192 56.745 143.887 57.6786 144.011 61.7146V67.8288C146.448 59.6514 152.029 56.0221 159.8 56.0221C164.268 56.007 167.783 57.6636 167.783 60.1484Z"
              fill="#202020"
            />
            <path
              d="M226.913 59.1089V105.794C226.913 105.899 225.942 106.306 224.723 106.306C222.78 106.306 221.085 105.372 221.085 101.336V96.8785C217.199 102.676 210.029 107.029 200.315 107.029C185.268 107.029 177.497 98.3392 177.497 85.1922V59.1089C177.497 57.2415 178.592 56.7295 180.04 56.7295H180.764C182.336 56.7295 183.431 57.2415 183.431 59.1089V84.891C183.431 95.6587 189.506 102.285 200.792 102.285C210.258 102.285 217.429 97.7369 220.943 90.8998V59.124C220.943 57.2566 222.039 56.7446 223.487 56.7446H224.211C225.818 56.7295 226.913 57.2415 226.913 59.1089Z"
              fill="#202020"
            />
            <path
              d="M299.501 81.3672C299.501 96.5925 287.845 107.044 271.826 107.044C260.293 107.044 252.522 101.668 249.608 96.0654V123.504C249.608 125.371 248.513 125.989 246.941 125.989H246.34C244.769 125.989 243.674 125.371 243.674 123.504V57.2416C243.674 57.1362 244.521 56.7296 245.616 56.7296C247.683 56.7296 249.502 57.6633 249.502 61.6993V67.0756C254.111 60.3439 261.529 55.9917 272.214 55.9917C287.491 56.0068 299.501 66.2473 299.501 81.3672ZM293.567 81.3672C293.567 69.2592 284.1 60.4493 271.596 60.4493C260.54 60.4493 253.14 65.7353 249.502 73.7018V84.9815C249.502 94.8154 259.092 102.586 271.349 102.586C284.577 102.586 293.567 94.0022 293.567 81.3672Z"
              fill="#202020"
            />
            <path
              d="M337.755 56.0068C354.746 56.0068 366.897 66.9853 366.897 81.6835C366.897 96.1709 354.763 107.044 337.755 107.044C320.518 107.044 308.367 96.0654 308.367 81.4726C308.367 66.8798 320.518 56.0068 337.755 56.0068ZM337.755 60.4494C324.156 60.4494 314.319 69.455 314.319 81.4726C314.319 93.4752 324.156 102.586 337.755 102.586C351.107 102.586 360.945 93.686 360.945 81.6684C360.945 69.6508 351.231 60.4494 337.755 60.4494Z"
              fill="#202020"
            />
            <path
              d="M432.826 78.3551H463.91L448.492 44.6064L432.826 78.3551Z"
              fill="#202020"
            />
            <path
              d="M649.284 18.7041H402.873C398.299 18.7041 394.572 21.8666 394.572 25.7821V123.203C394.572 127.103 398.281 130.281 402.873 130.281H649.284C653.858 130.281 657.585 127.118 657.585 123.203V25.7821C657.585 21.8666 653.876 18.7041 649.284 18.7041ZM480.071 106.306C478.499 106.517 476.68 106.095 475.708 103.927L465.871 83.0088H430.901L421.188 103.927C420.216 106.201 418.397 106.622 416.825 106.306C415.253 106.095 414.035 105.161 414.158 104.86L443.9 40.5707C444.501 39.3358 445.596 38.5979 448.51 38.5979C451.424 38.5979 452.519 39.3208 453.119 40.5707L482.985 104.86C483.091 105.267 481.642 106.095 480.071 106.306ZM541.62 41.7152C541.62 43.1609 540.525 43.8838 538.706 43.8838H512.974V104.032C512.974 105.583 512.002 106.411 510.307 106.411H509.335C507.64 106.411 506.792 105.583 506.792 104.032V43.8838H480.936C479.117 43.8838 478.145 43.1609 478.145 41.7152V41.2936C478.145 39.8478 479.117 39.125 480.936 39.125H538.724C540.543 39.125 541.638 39.8478 541.638 41.2936V41.7152H541.62ZM623.94 104.032C623.94 105.583 623.092 106.411 621.273 106.411H620.549C618.853 106.411 618.006 105.583 618.006 104.032V44.8175L594.092 84.7858C593.121 86.7586 591.779 87.9935 588.864 87.9935C585.703 87.9935 584.502 86.7586 583.513 84.7858L559.723 44.8175V104.032C559.723 105.583 559.123 106.411 557.18 106.411H556.209C554.513 106.411 553.895 105.583 553.895 104.032V42.1219C553.895 40.149 555.59 38.8087 558.151 38.8087H559.6C562.885 38.8087 563.609 39.9533 565.057 42.6339L588.97 83.1142L612.884 42.6339C614.226 39.9382 615.197 38.8087 618.218 38.8087H619.436C622.103 38.8087 623.922 40.149 623.922 42.1219V104.032H623.94Z"
              fill="#202020"
            />
          </svg>
        </div>
        <div className="hidden dark:flex">
          <svg
            width="391"
            height="100"
            viewBox="0 0 691 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5797 150C8.33615 150 0 142.844 0 134.051V15.949C0 7.15584 8.33615 0 18.5797 0H672.42C682.664 0 691 7.15584 691 15.949V134.051C691 142.844 682.664 150 672.42 150H18.5797Z"
              fill="white"
            />
            <path
              d="M671.873 146.665C508.417 146.665 181.506 146.665 18.0323 146.665C9.96105 146.665 3.35571 140.995 3.35571 134.066C3.35571 104.533 3.35571 45.4822 3.35571 15.9643C3.35571 9.03582 9.96105 3.36572 18.0323 3.36572C181.488 3.36572 508.399 3.36572 671.873 3.36572C679.944 3.36572 686.549 9.03582 686.549 15.9643C686.549 45.4973 686.549 104.548 686.549 134.066C686.549 140.979 679.944 146.665 671.873 146.665Z"
              fill="#202020"
            />
            <path
              d="M649.284 131.17H402.873C398.299 131.17 394.572 127.987 394.572 124.045V25.9702C394.572 22.0436 398.281 18.8447 402.873 18.8447H649.284C653.858 18.8447 657.585 22.0284 657.585 25.9702V124.045C657.585 127.971 653.876 131.17 649.284 131.17Z"
              fill="white"
            />
            <path
              d="M122.499 77.5471V106.519C122.499 106.625 121.651 107.035 120.556 107.035C118.49 107.035 117.042 106.095 117.042 101.925V93.5871C112.785 102.244 102.224 107.762 88.395 107.762C65.8062 107.762 51.6064 93.0716 51.6064 73.1656C51.6064 52.8502 67.2721 38.2505 90.2141 38.2505C101.994 38.2505 110.366 42.1013 114.852 45.9673C117.766 48.4688 119.108 50.9703 119.108 52.1225C119.108 55.1395 115.699 55.4579 115.346 55.2456C111.461 48.3627 101.994 42.8442 89.9669 42.8442C70.9103 42.8442 57.9116 55.4579 57.9116 73.0746C57.9116 90.373 69.568 103.199 89.2428 103.199C104.537 103.199 115.841 94.6483 117.042 82.8836V78.3051H93.0046C90.5674 78.3051 89.49 77.5774 89.49 76.2129V75.7884C89.49 74.4391 90.585 73.6053 93.0046 73.6053H118.013C120.68 73.5901 122.499 75.2578 122.499 77.5471Z"
              fill="white"
            />
            <path
              d="M167.783 60.5521C167.783 62.5381 166.335 63.372 166.087 63.2659C164.639 62.1136 162.202 61.2798 159.164 61.2798C148.973 61.2798 144.117 70.0275 144.117 83.278V104.639C144.117 106.413 143.022 107.035 141.45 107.035H140.849C139.277 107.035 138.182 106.413 138.182 104.639V57.6412C138.182 57.5351 139.03 57.1258 140.125 57.1258C142.192 57.1258 143.887 58.0657 144.011 62.1288V68.284C146.448 60.0518 152.029 56.3981 159.8 56.3981C164.268 56.3829 167.783 58.0506 167.783 60.5521Z"
              fill="white"
            />
            <path
              d="M226.913 59.5209V106.519C226.913 106.625 225.942 107.035 224.723 107.035C222.78 107.035 221.085 106.095 221.085 102.031V97.5439C217.199 103.381 210.029 107.762 200.315 107.762C185.268 107.762 177.497 99.0145 177.497 85.7792V59.5209C177.497 57.6409 178.592 57.1255 180.04 57.1255H180.764C182.336 57.1255 183.431 57.6409 183.431 59.5209V85.476C183.431 96.3159 189.506 102.987 200.792 102.987C210.258 102.987 217.429 98.4081 220.943 91.5251V59.536C220.943 57.6561 222.039 57.1406 223.487 57.1406H224.211C225.818 57.1255 226.913 57.6409 226.913 59.5209Z"
              fill="white"
            />
            <path
              d="M299.501 81.9286C299.501 97.2561 287.845 107.778 271.826 107.778C260.293 107.778 252.522 102.365 249.608 96.7255V124.348C249.608 126.228 248.513 126.85 246.941 126.85H246.34C244.769 126.85 243.674 126.228 243.674 124.348V57.6412C243.674 57.5351 244.521 57.1257 245.616 57.1257C247.683 57.1257 249.502 58.0657 249.502 62.1287V67.5411C254.111 60.7643 261.529 56.3828 272.214 56.3828C287.491 56.3828 299.501 66.7073 299.501 81.9286ZM293.567 81.9286C293.567 69.7394 284.1 60.8704 271.596 60.8704C260.54 60.8704 253.14 66.1918 249.502 74.2118V85.5672C249.502 95.4671 259.092 103.29 271.349 103.29C284.577 103.29 293.567 94.6333 293.567 81.9286Z"
              fill="white"
            />
            <path
              d="M337.755 56.3828C354.746 56.3828 366.897 67.435 366.897 82.2318C366.897 96.8164 354.763 107.762 337.755 107.762C320.518 107.762 308.367 96.7103 308.367 82.0196C308.367 67.3288 320.518 56.3828 337.755 56.3828ZM337.755 60.8704C324.156 60.8704 314.319 69.9365 314.319 82.0348C314.319 94.1178 324.156 103.29 337.755 103.29C351.107 103.29 360.945 94.3301 360.945 82.2318C360.945 70.1488 351.231 60.8704 337.755 60.8704Z"
              fill="white"
            />
            <path
              d="M414.141 105.564L443.882 40.843C444.483 39.5998 445.578 38.8569 448.492 38.8569C451.406 38.8569 452.501 39.5846 453.102 40.843L482.967 105.564C483.091 105.989 481.625 106.822 480.053 107.02C478.481 107.232 476.662 106.807 475.691 104.624L465.853 83.5659H430.884L421.17 104.624C420.199 106.913 418.379 107.338 416.808 107.02C415.236 106.822 414.017 105.882 414.141 105.564ZM463.91 78.8964L448.492 44.9212L432.826 78.8964H463.91Z"
              fill="#202020"
            />
            <path
              d="M506.775 44.1785H480.918C479.099 44.1785 478.128 43.4508 478.128 41.9953V41.5708C478.128 40.1154 479.099 39.3877 480.918 39.3877H538.706C540.525 39.3877 541.62 40.1154 541.62 41.5708V41.9953C541.62 43.4508 540.525 44.1785 538.706 44.1785H512.974V104.73C512.974 106.292 512.002 107.126 510.307 107.126H509.335C507.64 107.126 506.792 106.292 506.792 104.73V44.1785H506.775Z"
              fill="#202020"
            />
            <path
              d="M553.877 42.4198C553.877 40.4337 555.573 39.0845 558.134 39.0845H559.582C562.867 39.0845 563.591 40.2367 565.039 42.9353L588.953 83.6873L612.866 42.9353C614.208 40.2215 615.18 39.0845 618.2 39.0845H619.419C622.085 39.0845 623.905 40.4337 623.905 42.4198V104.745C623.905 106.307 623.057 107.141 621.238 107.141H620.514C618.818 107.141 617.97 106.307 617.97 104.745V45.1336L594.057 85.3701C593.085 87.3562 591.743 88.5993 588.829 88.5993C585.668 88.5993 584.467 87.3562 583.478 85.3701L559.688 45.1336V104.745C559.688 106.307 559.087 107.141 557.145 107.141H556.173C554.478 107.141 553.86 106.307 553.86 104.745V42.4198H553.877Z"
              fill="#202020"
            />
          </svg>
        </div>
      </div>
    </footer>
  )
}
