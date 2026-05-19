import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'

const projects = [
  {
    title: 'Sagesse Holistique',
    category: 'Site vitrine',
    image: '/portfolio/sagesse-holistique.webp',
    url: 'https://www.sagesse-holistique.fr/',
  },
  {
    title: 'Jonathan Deymier',
    category: 'Refonte WordPress',
    image: '/portfolio/jonathan-deymier.webp',
    url: 'https://www.jonathandeymier.com/',
  },
]

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio">
      <p className="text-xs font-dm-sans tracking-[0.3em] text-teal uppercase mb-3">
        Nos réalisations
      </p>
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-4">
        Projets récents
      </h2>
      <p className="font-dm-sans text-muted max-w-xl mb-12">
        Quelques-uns des projets que nous avons eu le plaisir de réaliser.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-teal/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-52 overflow-hidden bg-gray-50">
              <Image
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 flex items-start justify-between">
              <div>
                <span className="inline-block text-xs font-dm-sans font-medium text-teal bg-teal/10 px-2 py-0.5 rounded mb-2">
                  {project.category}
                </span>
                <h3 className="font-sora text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm font-dm-sans text-teal hover:underline mt-1 whitespace-nowrap"
                aria-label={`Voir le site ${project.title}`}
              >
                Voir le site →
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
