import SectionWrapper from '@/components/ui/SectionWrapper'

const reasons = [
  {
    number: '01',
    title: 'Expertise technique',
    description:
      'Full-stack confirmé (C#/.NET, Next.js, PostgreSQL…), plus de 10 ans de pratique en entreprise et en indépendant. Je maîtrise les technologies que je recommande.',
  },
  {
    number: '02',
    title: 'Accompagnement sur mesure',
    description:
      "Chaque projet est unique. J'adapte mon approche à votre contexte, vos contraintes et vos objectifs — pas l'inverse.",
  },
  {
    number: '03',
    title: 'Un partenaire, pas un exécutant',
    description:
      "Je construis avec vous, pas à votre place. Votre compréhension du projet est ma priorité — je ne livre pas une boîte noire, je vous l'explique.",
  },
]

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-teal/5 rounded-2xl">
      <p className="text-sm font-dm-sans tracking-[0.3em] text-teal uppercase mb-3">
        Ma différence
      </p>
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-12">
        Pourquoi Valdence Digital
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reasons.map((reason) => (
          <div key={reason.number} className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-sm">
            <span className="font-sora text-5xl font-bold text-teal">{reason.number}</span>
            <h3 className="font-sora text-xl font-semibold text-foreground">{reason.title}</h3>
            <p className="font-dm-sans text-muted text-base leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
