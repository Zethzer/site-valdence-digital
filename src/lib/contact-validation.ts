import { z } from 'zod'

export const contactSchema = z.object({
  nom: z.string().trim().min(1, 'Le nom est requis'),
  prenom: z.string().trim().min(1, 'Le prénom est requis'),
  entreprise: z.string().optional().default(''),
  email: z.email('Adresse email invalide'),
  codePostal: z.string().trim().min(1, 'Le code postal est requis'),
  telephone: z
    .string()
    .trim()
    .min(1, 'Le téléphone est requis')
    .refine(
      (v) => /^(\+33|0033|0)[1-9][0-9]{8}$/.test(v.replace(/[\s.\-()]/g, '')),
      'Numéro de téléphone invalide'
    ),
  message: z.string().trim().min(20, 'Le message est requis').max(2000, 'Le message doit faire moins de 2000 caractères'),
  website: z.string().optional().default(''),
  rgpd: z.string().refine((v) => v === 'on', 'Vous devez accepter les conditions RGPD.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
