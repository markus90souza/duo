'use client'

import Image from 'next/image'
import { JSX, SVGProps } from 'react'
import logo from '@/assets/duoconexx.svg'
import { Container } from '@/components/container'

import { WhatsappLogo } from '@phosphor-icons/react'
import { Facebook, Instagram } from 'lucide-react'
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Fale com um consultor', href: '#' },
    { name: 'Suporte', href: '#' },
  ],
  company: [
    { name: 'Nossa Solução', href: '#' },
    { name: 'A Empresa', href: '#' },
    { name: 'Contato', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: <Facebook />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Whatsapp',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-white pt-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        {/* <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8"> */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image className="h-10 w-auto" src={logo} alt="Company name" />
            <p className="text-base text-gray-500">
              um sistema de confirmação de agendamentos inteligente
            </p>
            <div className="flex space-x-6">
              <a href={''} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{'Facebook'}</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>

              <a href={''} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{'Facebook'}</span>
                <WhatsappLogo className="h-6 w-6" aria-hidden="true" />
              </a>

              <a href={''} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{'Facebook'}</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              {/* <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Suporte
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  A Empresa
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Politica de privacidade
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* </div> */}
      </Container>

      <div className="mt-12 border-t border-gray-200 bg-[#22253f] py-8">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; {new Date().getFullYear()} Duo Conexx | Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export { Footer }
