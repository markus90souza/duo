'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '@/components/container'
import { NavLinks } from '@/components/nav-links'
import Image from 'next/image'

import logo from '@/assets/duoconexx.svg'

import { X, Menu } from 'lucide-react'
import { AnchorHTMLAttributes, FC, ReactNode } from 'react'

type MobileNavProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}
function MobileNavLink({ children, href = '', ...props }: MobileNavProps) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

const navigation = [
  { name: 'Planos e Preços', href: '#plans' },
  { name: 'A Soluçao', href: '#solutions' },
  { name: 'Materiais', href: '#files' },
  { name: 'Quem Somos', href: '#about-us' },
]

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-4">
          <div className="relative z-10 flex w-full items-center justify-between gap-16">
            <Link href="/" aria-label="Home">
              <Image className="h-10 w-auto" src={logo} alt="" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <X className="h-6 w-6" />
                      ) : (
                        <Menu className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navigation.map((link, index) => (
                              <MobileNavLink key={index} href={link.href}>
                                {link.name}
                              </MobileNavLink>
                            ))}
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* butoes aqui */}
          </div>
        </Container>
      </nav>
    </header>
  )
}
