'use server'

import nodemailer from 'nodemailer'
import { validateContactForm, type ContactFormData } from '@/lib/contact-validation'

export type ContactFormState = {
  success?: boolean
  error?: string
}

function extractFormData(formData: FormData): ContactFormData {
  return {
    nom: (formData.get('nom') as string) ?? '',
    prenom: (formData.get('prenom') as string) ?? '',
    entreprise: (formData.get('entreprise') as string) ?? '',
    email: (formData.get('email') as string) ?? '',
    codePostal: (formData.get('codePostal') as string) ?? '',
    telephone: (formData.get('telephone') as string) ?? '',
    message: (formData.get('message') as string) ?? '',
    website: (formData.get('website') as string) ?? '',
    rgpd: (formData.get('rgpd') as string) ?? '',
  }
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = extractFormData(formData)

  // Honeypot: silently reject without feedback
  if (data.website) return { success: true }

  const error = validateContactForm(data)
  if (error) return { error }

  const port = Number(process.env.SMTP_PORT ?? 465)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const lines = [
    `Nom : ${data.nom}`,
    `Prénom : ${data.prenom}`,
    data.entreprise ? `Entreprise : ${data.entreprise}` : null,
    `Email : ${data.email}`,
    `Code postal : ${data.codePostal}`,
    `Téléphone : ${data.telephone}`,
    '',
    'Message :',
    data.message,
  ].filter((l): l is string => l !== null)

  try {
    await transporter.sendMail({
      from: `"Valdence Digital" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: data.email,
      subject: `Nouveau contact — ${data.prenom} ${data.nom}`,
      text: lines.join('\n'),
      html: `
        <h2>Nouveau contact — Valdence Digital</h2>
        <table cellpadding="6">
          <tr><td><strong>Nom</strong></td><td>${data.nom}</td></tr>
          <tr><td><strong>Prénom</strong></td><td>${data.prenom}</td></tr>
          ${data.entreprise ? `<tr><td><strong>Entreprise</strong></td><td>${data.entreprise}</td></tr>` : ''}
          <tr><td><strong>Email</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td><strong>Code postal</strong></td><td>${data.codePostal}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${data.telephone}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })
  } catch {
    return { error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." }
  }

  return { success: true }
}
