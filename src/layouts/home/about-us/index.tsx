import { Container } from '@/components/container'
import Image from 'next/image'
import { FC } from 'react'

export const AboutUs: FC = () => {
  return (
    <section className="w-full py-24">
      <Container>
        <article className="relative flex w-full justify-center mb-6 sm:mb-0  items-center">
          <div className="relative w-full items-center justify-center">
            <div className="relative flex-col items-start align-middle">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="order-first block w-full ">
                  <Image
                    className="w-full object-cover object-center sm:-mr-52 "
                    alt="hero"
                    src="/images/woman.png"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="relative m-auto items-center md:order-first lg:inline-flex">
                  <div className="max-w-xl lg:text-left">
                    <div className="max-w-sm sm:-ml-[430px] sm:mb-32">
                      <h3 className="text-4xl font-bold tracking-tight block text-[#22253F] sm:text-4xl">
                        Facilitamos a conexão entre profissionais e seus
                        clientes
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex w-full mt-12 mb-6 sm:mb-0  items-center">
          <div className="relative w-full items-center">
            <div className="relative flex-col items-start align-middle">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative m-auto items-center md:order-first lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm mt-12">
                      <p className="mt-4 max-w-xl text-2xl tracking-tight text-gray-600">
                        Nossas soluções tem como foco a gestão eficiente de
                        mensagens de confirmação de agendamentos , lembretes e
                        reagendamentos. Tudo de forma automática via Whatsapp
                        para que você tenha mais tempo para focar no que
                        realmente importa.
                      </p>

                      <p className="mt-4 max-w-xl text-2xl tracking-tight text-gray-600">
                        Desenvolvemos soluções de mensageria para facilitar o
                        dia a dia dos profissionais que trabalham com
                        agendamentos para aumentar seus lucros
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full ">
                  <Image
                    className="w-full object-cover object-center lg:ml-auto "
                    alt="hero"
                    src="/images/about.png"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}
