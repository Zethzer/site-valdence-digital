'use client'

import { useActionState } from 'react'
import { submitContact } from '@/app/actions/contact'
import SectionWrapper from '@/components/ui/SectionWrapper'

const RGPD_TEXT =
  "J'ai été informé.e de mon droit de suppression, mon droit de consultation, et mon droit de modification des données personnelles récoltées sur ce formulaire. Mais aussi de la procédure d'exercice de mes droits, de la durée de conservation de mes données, et des conditions de gestions de ces dernières."

const inputClass =
  'w-full px-4 py-3 rounded-sm border border-gray-200 bg-white font-dm-sans text-sm text-foreground placeholder-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors'

export default function Contact() {
  const [state, action, isPending] = useActionState(submitContact, {})

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Decorative circle */}
      <div aria-hidden="true" className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full border border-teal/8 pointer-events-none" />

      <p className="text-xs font-dm-sans tracking-[0.3em] text-teal uppercase mb-3">
        Travaillons ensemble
      </p>
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-4">
        Parlons de votre projet
      </h2>
      <p className="font-dm-sans text-muted max-w-xl mb-12">
        Partagez-nous vos besoins et nous reviendrons vers vous dans les plus brefs délais.
      </p>

      {state.success ? (
        <div className="bg-teal/10 border border-teal/30 rounded-lg p-8 text-center max-w-lg">
          <p className="font-sora text-xl font-semibold text-teal mb-2">Message envoyé !</p>
          <p className="font-dm-sans text-muted text-sm">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      ) : (
        <form action={action} className="max-w-2xl space-y-5" noValidate>
          {/* Honeypot — must stay empty (bots fill it, humans don't) */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nom" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
                Nom <span className="text-teal" aria-hidden="true">*</span>
              </label>
              <input id="nom" name="nom" type="text" required autoComplete="family-name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
                Prénom <span className="text-teal" aria-hidden="true">*</span>
              </label>
              <input id="prenom" name="prenom" type="text" required autoComplete="given-name" className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="entreprise" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
              Nom de l&apos;entreprise{' '}
              <span className="text-muted font-normal text-xs">(Facultatif)</span>
            </label>
            <input id="entreprise" name="entreprise" type="text" autoComplete="organization" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
                Email <span className="text-teal" aria-hidden="true">*</span>
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="codePostal" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
                Code postal <span className="text-teal" aria-hidden="true">*</span>
              </label>
              <input id="codePostal" name="codePostal" type="text" required autoComplete="postal-code" className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
              Téléphone <span className="text-teal" aria-hidden="true">*</span>
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+33 6 12 34 56 78"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-dm-sans font-medium text-foreground mb-1.5">
              Message <span className="text-teal" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Dites-nous en plus sur votre projet"
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="rgpd"
              name="rgpd"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-teal"
            />
            <label htmlFor="rgpd" className="text-xs font-dm-sans text-muted leading-relaxed">
              {RGPD_TEXT}
            </label>
          </div>

          {state.error && (
            <p role="alert" className="text-sm font-dm-sans text-red-600 bg-red-50 border border-red-200 rounded px-4 py-2">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="px-8 py-3 bg-teal text-white font-dm-sans font-semibold text-sm rounded-sm hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isPending ? 'Envoi en cours…' : 'Envoyer le message →'}
          </button>
        </form>
      )}
    </SectionWrapper>
  )
}
