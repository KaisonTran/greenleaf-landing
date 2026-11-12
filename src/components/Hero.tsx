export function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="eyebrow">Free delivery over $40</span>
        <h1>Healthy houseplants, delivered to your door</h1>
        <p>
          Hand-picked plants from local growers, potted and ready to thrive. Every order comes with care
          instructions and a 30-day happiness guarantee.
        </p>
        <div className="hero-actions">
          <a className="button" href="#pricing">
            Choose a plan
          </a>
          <a className="button button-ghost" href="#features">
            How it works
          </a>
        </div>
      </div>
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80"
        alt="Potted plants on a sunny shelf"
      />
    </section>
  )
}
