import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white/80 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image src="/logo-light.svg" alt="Valdence Digital" width={140} height={35} />
          <p className="font-dm-sans text-xs text-white/50">
            © 2026 Valdence Digital — Tous droits réservés
          </p>
        </div>
        <nav aria-label="Liens légaux">
          <ul className="flex gap-6">
            <li>
              <a
                href="/mentions-legales"
                className="font-dm-sans text-sm text-white/60 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/politique-de-confidentialite"
                className="font-dm-sans text-sm text-white/60 hover:text-white transition-colors"
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
