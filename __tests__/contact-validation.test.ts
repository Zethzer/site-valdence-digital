import { validateContactForm } from '@/lib/contact-validation'

const valid = {
  nom: 'Bernard',
  prenom: 'Yannick',
  entreprise: '',
  email: 'yannick@valdence.com',
  codePostal: '75001',
  telephone: '+33612345678',
  message: "Bonjour, je souhaite discuter d'un projet.",
  website: '',
  rgpd: 'on',
}

describe('validateContactForm', () => {
  it('returns null for valid complete data', () => {
    expect(validateContactForm(valid)).toBeNull()
  })

  it('returns null when entreprise is empty (optional field)', () => {
    expect(validateContactForm({ ...valid, entreprise: '' })).toBeNull()
  })

  it('returns null silently when honeypot is filled', () => {
    expect(validateContactForm({ ...valid, website: 'spam' })).toBeNull()
  })

  it('returns error when nom is missing', () => {
    expect(validateContactForm({ ...valid, nom: '' })).toBe(
      'Tous les champs obligatoires doivent être remplis.'
    )
  })

  it('returns error when prenom is missing', () => {
    expect(validateContactForm({ ...valid, prenom: '   ' })).toBe(
      'Tous les champs obligatoires doivent être remplis.'
    )
  })

  it('returns error for invalid email', () => {
    expect(validateContactForm({ ...valid, email: 'pas-un-email' })).toBe(
      'Adresse email invalide.'
    )
  })

  it('returns error for phone too short', () => {
    expect(validateContactForm({ ...valid, telephone: '1234' })).toBe(
      'Numéro de téléphone invalide.'
    )
  })

  it('accepts national format 0612345678', () => {
    expect(validateContactForm({ ...valid, telephone: '0612345678' })).toBeNull()
  })

  it('accepts +33 with spaces', () => {
    expect(validateContactForm({ ...valid, telephone: '+33 6 12 34 56 78' })).toBeNull()
  })

  it('returns error when RGPD not accepted', () => {
    expect(validateContactForm({ ...valid, rgpd: '' })).toBe(
      'Vous devez accepter les conditions RGPD.'
    )
  })
})
