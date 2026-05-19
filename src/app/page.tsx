import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Portfolio from '@/components/sections/Portfolio'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
    </main>
  )
}
