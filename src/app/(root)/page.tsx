import { Hero } from '@/layouts/home/hero'
import { Features } from '@/layouts/home/features'
import { AboutUs } from '@/layouts/home/about-us'
import { Plans } from '@/layouts/home/plans'
import { ContactUS } from '@/layouts/home/contact-us'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Plans />
      <ContactUS />
    </>
  )
}
