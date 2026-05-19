export type ContactFormData = {
  nom: string
  prenom: string
  entreprise: string
  email: string
  codePostal: string
  telephone: string
  message: string
  website: string
  rgpd: string
}

export function validateContactForm(data: ContactFormData): string | null {
  if (data.website) return null // honeypot filled — silently pass

  const requiredFields: (keyof ContactFormData)[] = [
    'nom', 'prenom', 'email', 'codePostal', 'telephone', 'message',
  ]
  for (const field of requiredFields) {
    if (!(data[field] as string)?.trim()) {
      return 'Tous les champs obligatoires doivent être remplis.'
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Adresse email invalide.'
  }

  const tel = data.telephone.replace(/[\s.\-()]/g, '')
  if (!/^(\+33|0033|0)[1-9][0-9]{8}$/.test(tel)) {
    return 'Numéro de téléphone invalide.'
  }

  if (data.rgpd !== 'on') {
    return 'Vous devez accepter les conditions RGPD.'
  }

  return null
}
