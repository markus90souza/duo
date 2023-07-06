import { FC, HtmlHTMLAttributes } from 'react'
import { cn } from '@/libs/utils'

type Props = HtmlHTMLAttributes<HTMLDivElement>

export const Container: FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...rest}
    />
  )
}
