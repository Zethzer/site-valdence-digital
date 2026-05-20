import { getGoogleReviews } from '@/lib/google-places'
import { staticReviews } from '@/data/reviews'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ReviewCard from '@/components/ui/ReviewCard'

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
