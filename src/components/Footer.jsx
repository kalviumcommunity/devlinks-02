import { useState } from 'react'

export default function Footer({ initialRating = 5, initialReviews = 24 }) {
  const [rating, setRating] = useState(initialRating)
  const [reviewsCount, setReviewsCount] = useState(initialReviews)
  const [hasRated, setHasRated] = useState(false)

  const handleRate = (star) => {
    if (!hasRated) {
      setReviewsCount((prev) => prev + 1)
      setHasRated(true)
    }
    setRating(star)
  }

  return (
    <footer>
      <div className="rating-bar">
        <span className="stars" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`star-btn ${star <= rating ? 'active' : ''}`}
              onClick={() => handleRate(star)}
              title={`Rate ${star} stars`}
            >
              ★
            </button>
          ))}
        </span>
        <span>
          {rating} / 5 · {reviewsCount} reviews
        </span>
      </div>
      <div className="copyright">© OpenNest · RecipeCard</div>
    </footer>
  )
}
