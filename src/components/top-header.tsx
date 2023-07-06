'use client'

import { Container } from '@/components/container'
import Link from 'next/link'

import { WhatsappLogo } from '@phosphor-icons/react'
import { Facebook, Instagram } from 'lucide-react'

export const TopHeader = () => {
  return (
    <div className="relative w-full bg-[#22253f] py-3">
      <Container className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <strong className="text-sm font-semibold leading-6 text-gray-100">
            Duo Conexx
          </strong>
        </div>
        <div className="flex flex-1 justify-end gap-x-6">
          <Link
            href={''}
            className="-m-3 rounded-md p-2 transition-all hover:bg-slate-500 focus-visible:outline-offset-[-4px]"
          >
            <Facebook className="h-6 w-6 text-gray-100" aria-hidden={'true'} />
          </Link>

          <Link
            href={''}
            className="-m-3 rounded-md p-2 hover:bg-slate-500 focus-visible:outline-offset-[-4px]"
          >
            <WhatsappLogo
              className="h-6 w-6 text-gray-100"
              aria-hidden={'true'}
            />
          </Link>

          <Link
            href={''}
            className="-m-3 rounded-md p-2 hover:bg-slate-500 focus-visible:outline-offset-[-4px]"
          >
            <Instagram className="h-6 w-6 text-gray-100" aria-hidden={'true'} />
          </Link>
        </div>
      </Container>
    </div>
  )
}
