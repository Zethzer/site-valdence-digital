import { getGoogleReviews, type GoogleReview } from '@/lib/google-places'
import SectionWrapper from '@/components/ui/SectionWrapper'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const date = new Date(review.time * 1000).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
  })
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
      <StarRating rating={review.rating} />
      <p className="font-dm-sans text-foreground/80 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
        <p className="font-dm-sans font-semibold text-sm text-foreground">{review.authorName}</p>
        <p className="font-dm-sans text-xs text-muted">{date}</p>
      </div>
    </div>
  )
}

export default async function Reviews() {
  const result = await getGoogleReviews()

  return (
    <SectionWrapper id="reviews">
      <p className="text-xs font-dm-sans tracking-[0.3em] text-teal uppercase mb-3">
        Ce qu&apos;ils en disent
      </p>
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-12">
        Avis clients
      </h2>

      {result.ok && result.reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="font-dm-sans text-muted mb-6">
            Découvrez nos avis directement sur Google.
          </p>
          <a
            href={result.placeUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-teal text-teal font-dm-sans font-semibold text-sm rounded-sm hover:bg-teal/5 transition-colors"
          >
            Voir nos avis sur Google Maps →
          </a>
        </div>
      )}
    </SectionWrapper>
  )
}
