const plans = [
  { name: 'Sprout', price: 19, description: 'One small plant every month.', featured: false },
  { name: 'Bloom', price: 34, description: 'Two medium plants and a pot every month.', featured: true },
  { name: 'Jungle', price: 59, description: 'Three statement plants and priority care chat.', featured: false },
]

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Simple monthly plans</h2>
      <p className="section-intro">Pause, skip or cancel any time.</p>
      <div className="plan-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={plan.featured ? 'card plan plan-featured' : 'card plan'}>
            {plan.featured && <span className="badge">Most popular</span>}
            <h3>{plan.name}</h3>
            <p className="price">
              ${plan.price}
              <span>/month</span>
            </p>
            <p>{plan.description}</p>
            <a className="button" href="#">
              Start {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
