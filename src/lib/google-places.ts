export type GoogleReview = {
  authorName: string
  rating: number
  text: string
  time: number
  profilePhotoUrl: string
}

export type ReviewsResult =
  | { ok: true; reviews: GoogleReview[]; placeUrl: string }
  | { ok: false; placeUrl: string }

type RawReview = {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
}

export function transformReview(raw: RawReview): GoogleReview {
  return {
    authorName: raw.author_name,
    rating: raw.rating,
    text: raw.text,
    time: raw.time,
    profilePhotoUrl: raw.profile_photo_url ?? '',
  }
}

export async function getGoogleReviews(): Promise<ReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  const placeUrl = placeId
    ? `https://www.google.com/maps/place/?q=place_id:${placeId}`
    : 'https://www.google.com/maps'

  if (!apiKey || !placeId) return { ok: false, placeUrl }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=fr&key=${apiKey}`,
      { next: { revalidate: 86400 } } as RequestInit
    )
    if (!res.ok) return { ok: false, placeUrl }

    const data = await res.json()
    const reviews = (data.result?.reviews ?? []).map(transformReview)
    return { ok: true, reviews, placeUrl }
  } catch {
    return { ok: false, placeUrl }
  }
}
