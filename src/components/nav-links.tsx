import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navigation = [
    { name: 'Planos e Preços', href: '#plans' },
    { name: 'A Soluçao', href: '#solutions' },
    { name: 'Materiais', href: '#files' },
    { name: 'Quem Somos', href: '#about-us' },
  ]

  return (
    <>
      {navigation.map((item, index) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0  border-b-2 border-green-900"
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </>
  )
}
