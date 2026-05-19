import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16">
      {/* Teal decorative circles */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none select-none">
        <div className="w-[520px] h-[520px] rounded-full border border-teal/8 absolute -top-36 -right-36" />
        <div className="w-[360px] h-[360px] rounded-full border border-teal/12 absolute -top-16 -right-16" />
        <div className="w-[210px] h-[210px] rounded-full border border-teal/18 absolute top-8 right-8" />
        <div className="w-4 h-4 rounded-full bg-teal/20 absolute top-28 right-72" />
        <div className="w-2 h-2 rounded-full bg-teal/35 absolute top-44 right-52" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 relative z-10">
        <p className="text-xs font-dm-sans tracking-[0.3em] text-teal uppercase mb-6">
          Valdence Digital
        </p>
        <h1 className="font-sora text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 max-w-3xl">
          Du code au clic —{' '}
          <span className="text-teal">construisons ensemble.</span>
        </h1>
        <p className="font-dm-sans text-lg text-muted max-w-xl mb-10 leading-relaxed">
          Développeur full-stack indépendant, nous travaillons avec vous — pas à votre
          place — pour créer des outils digitaux qui vous ressemblent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="#contact" variant="primary">Parlons de votre projet →</Button>
          <Button href="#services" variant="outline">Nos services</Button>
        </div>
      </div>
    </section>
  )
}
