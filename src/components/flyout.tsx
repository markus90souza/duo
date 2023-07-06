import React, { FC } from 'react'

import bg from '@/assets/bg.svg'
import Image from 'next/image'
export const Flyout: FC = () => {
  return (
    <div className="absolute top-0 right-5">
      <Image src={bg} alt="" width={800} height={800} className="" />
    </div>
  )
}
