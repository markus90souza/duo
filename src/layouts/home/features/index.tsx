import { FC } from 'react'
import { Container } from '@/components/container'

import Image from 'next/image'

export const Features: FC = () => {
  return (
    <section className="w-full py-24">
      <Container>
        <article className="relative flex w-full mb-6 sm:mb-0 items-center">
          <div className="relative w-full items-center">
            <div className="relative m-auto flex-col items-start align-middle">
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="relative items-center lg:inline-flex">
                  <div className="m-auto max-w-xl text-center lg:text-left">
                    <div className="max-w-sm mt-12">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Aumente a rentabilidade do seu negócio
                      </h3>
                      <p className="mt-4 max-w-xl sm:text-2xl text-base tracking-tight text-gray-600">
                        confirmação automática, antecipada e no mesmo dia. Nossa
                        solução reduzira 50% a chance do seu cliente cancelar em
                        cima da hora e de sua agenda ficar vazia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full lg:order-first lg:mt-0">
                  <Image
                    className="mx-auto w-full bg-gray-300 object-cover object-center lg:ml-auto"
                    alt="hero"
                    src="/images/feature-01.png"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex w-full mb-6 sm:mb-0  items-center">
          <div className="relative w-full items-center">
            <div className="relative flex-col items-start align-middle">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative m-auto items-center md:order-first lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm mt-12">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Aumento da taxa de retorno
                      </h3>
                      <p className="mt-4 max-w-xl sm:text-2xl text-base tracking-tight text-gray-600">
                        Lembretes direcionados. “O cliente fez um procedimento
                        que precisa manutenção recorrente? “ Quando estiver
                        próximo ao vencimento, nossa solução o lembrará que já é
                        hora de voltar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full ">
                  <Image
                    className="w-full bg-gray-300 object-cover object-center lg:ml-auto "
                    alt="hero"
                    src="/images/feature-02.png"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex w-full mb-6 sm:mb-0 items-center">
          <div className="relative w-full items-center">
            <div className="relative m-auto flex-col items-start align-middle">
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="relative items-center lg:inline-flex">
                  <div className="m-auto max-w-xl text-center lg:text-left">
                    <div className="max-w-sm mt-12">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Melhore o investimento do seu tempo.
                      </h3>
                      <p className="mt-4 max-w-xl text-base sm:text-2xl tracking-tight text-gray-600">
                        Com a confirmação automática, você precisará entrar em
                        contato com o cliente apenas quando ele desejar fazer um
                        reagendamento. Isso reduz em 80% o tempo investido em
                        confirmações de agendamentos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full lg:order-first lg:mt-0">
                  <Image
                    className="mx-auto w-full bg-gray-300 object-cover object-center lg:ml-auto"
                    alt="hero"
                    src="/images/feature-03.png"
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
