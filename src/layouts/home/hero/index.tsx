'use client'
import { FC } from 'react'
import { Container } from '@/components/container'

import Image from 'next/image'

import { WhatsappLogo } from '@phosphor-icons/react'

export const Hero: FC = () => {
  return (
    <div className="min-h-[40vh] items-center bg-[#22253f] pt-10 sm:h-[70vh]  sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
      <Container>
        <div className="flex flex-1 flex-col gap-x-8 gap-y-6 sm:flex-row">
          <div className="relative max-w-xl flex flex-1 justify-center">
            <div className="lg:py-24 w-full">
              {/* <a
                href="#"
                className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
              >
                <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                  Fale conosco
                </span>
                <span className="ml-4 text-sm">Consultor</span>
              </a> */}
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-center sm:text-left text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                <span className="block">Duo Conexx</span>
                <span className="block text-4xl bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5 sm:text-5xl">
                  um sistema de confirmação de agendamentos inteligente
                </span>
              </h1>

              <div className="mt-8 flex flex-1 justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400 bg-transparent px-5 py-3 text-base font-medium text-white hover:bg-green-600"
                  >
                    <WhatsappLogo className="h-6 w-6" />
                    Fale com o consultor
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <Image
              width={1200}
              height={680}
              className="h-full w-full"
              src="/images/hero-phone.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
