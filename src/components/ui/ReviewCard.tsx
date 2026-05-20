'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import type { GoogleReview } from '@/lib/google-places'

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

const COLLAPSED_HEIGHT = 160

export default function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setOverflows(contentRef.current.scrollHeight > COLLAPSED_HEIGHT)
    }
  }, [])

  const date = new Date(review.time * 1000).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
  })

  const paragraphs = review.text.split('\n\n')

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
      <StarRating rating={review.rating} />

      <div className="flex-1">
        <div
          ref={contentRef}
          style={{ maxHeight: expanded ? undefined : COLLAPSED_HEIGHT }}
          className="font-dm-sans text-foreground/80 text-base leading-relaxed space-y-2 overflow-hidden"
        >
          {paragraphs.map((paragraph, i, arr) => (
            <p key={i} className="whitespace-pre-line">
              {i === 0 && '“'}{paragraph}{i === arr.length - 1 && '”'}
            </p>
          ))}
        </div>

        {overflows && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 font-dm-sans text-sm text-teal hover:underline focus:outline-none"
          >
            {expanded ? 'Voir moins' : 'Voir plus…'}
          </button>
        )}
      </div>

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
