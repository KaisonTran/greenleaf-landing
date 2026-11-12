const features = [
  {
    icon: '🌱',
    title: 'Grown locally',
    text: 'Every plant comes from a grower within 100 miles, so it arrives fresh and stress-free.',
  },
  {
    icon: '📦',
    title: 'Plastic-free packaging',
    text: 'Recycled paper and compostable padding keep your plant safe without the waste.',
  },
  {
    icon: '💬',
    title: 'Plant care chat',
    text: 'Yellow leaves? Message our plant doctors any time and get an answer within a day.',
  },
]

export function Features() {
  return (
    <section id="features" className="features">
      <h2>Why Greenleaf?</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
