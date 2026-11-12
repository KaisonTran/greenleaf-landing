const reviews = [
  { quote: 'My fiddle leaf fig arrived in perfect shape and is already putting out new leaves.', name: 'Priya S.' },
  { quote: 'The care chat saved my monstera. Fast, friendly and actually helpful.', name: 'Daniel M.' },
]

export function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <h2>Loved by plant parents</h2>
      <div className="review-grid">
        {reviews.map((review) => (
          <figure key={review.name} className="card review">
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>{review.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
