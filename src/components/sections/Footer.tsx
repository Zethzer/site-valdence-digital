import LogoLight from '@/components/ui/LogoLight'

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white/80 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <LogoLight className="h-24 w-auto" />
          <p className="font-dm-sans text-base text-white/50">
            © 2026 Valdence Digital — Tous droits réservés
          </p>
        </div>
        <nav aria-label="Liens légaux">
          <ul className="flex gap-6">
            <li>
              <a
                href="/mentions-legales"
                className="font-dm-sans text-base text-white/60 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/politique-de-confidentialite"
                className="font-dm-sans text-base text-white/60 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
