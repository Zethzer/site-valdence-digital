import Image from 'next/image'
import { getGoogleReviews, type GoogleReview } from '@/lib/google-places'
import { staticReviews } from '@/data/reviews'
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
      <p className="font-dm-sans text-foreground/80 text-base leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
        {review.profilePhotoUrl && (
          <Image
            src={review.profilePhotoUrl}
            alt={review.authorName}
            width={36}
            height={36}
            className="rounded-full shrink-0"
          />
        )}
        <div className="flex-1 flex items-center justify-between">
          <p className="font-dm-sans font-semibold text-base text-foreground">{review.authorName}</p>
          <p className="font-dm-sans text-sm text-muted">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default async function Reviews() {
  const result = await getGoogleReviews()

  return (
    <SectionWrapper id="reviews" className="bg-teal/5 rounded-2xl">
      <p className="text-sm font-dm-sans tracking-[0.3em] text-teal uppercase mb-3">
        Ce qu&apos;ils en disent
      </p>
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-12">
        Avis clients
      </h2>

      {(() => {
        const reviews = result.ok && result.reviews.length > 0 ? result.reviews : staticReviews
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={`${review.authorName}-${review.time}`} review={review} />
            ))}
          </div>
        )
      })()}
    </SectionWrapper>
  )
}
