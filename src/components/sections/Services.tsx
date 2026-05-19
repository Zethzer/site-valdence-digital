import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    icon: '🪟',
    title: 'Sites vitrines',
    description:
      'Présence en ligne professionnelle, rapide à lancer et facile à maintenir. Un site qui vous représente et rassure vos visiteurs dès le premier regard.',
  },
  {
    icon: '🛒',
    title: 'Sites e-commerce',
    description:
      'Boutiques performantes, conçues pour convertir et fidéliser. Du catalogue produits au tunnel de paiement, pensés pour la croissance.',
  },
  {
    icon: '⚙️',
    title: 'Applications web',
    description:
      "Outils métier sur mesure, robustes, évolutifs et bien documentés. Des solutions pensées pour votre usage réel, pas pour une démo.",
  },
  {
    icon: '🤝',
    title: 'Consulting / AT',
    description:
      "Accompagnement technique en entreprise : audit, conseil, renfort d'équipe. Une expertise full-stack disponible quand vous en avez besoin.",
  },
]

export default function Services() {
  return (
    <SectionWrapper id="services">
      <p className="text-xs font-dm-sans tracking-[0.3em] text-teal uppercase mb-3">
        Ce que nous faisons
      </p>
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-4">
        Nos services
      </h2>
      <p className="font-dm-sans text-muted max-w-xl mb-12">
        Quatre offres complémentaires pour couvrir l&apos;ensemble de vos besoins digitaux.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-lg p-8 border border-gray-100 hover:border-teal/30 hover:shadow-md transition-all duration-200 group"
          >
            <div className="text-3xl mb-4" aria-hidden="true">{service.icon}</div>
            <h3 className="font-sora text-xl font-semibold text-foreground mb-3 group-hover:text-teal transition-colors">
              {service.title}
            </h3>
            <p className="font-dm-sans text-muted leading-relaxed text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
