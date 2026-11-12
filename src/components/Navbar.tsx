const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
]

export function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="#">
        <img src="/leaf.svg" alt="" width={24} height={24} />
        Greenleaf
      </a>
      <nav>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="button button-small" href="#pricing">
        Get started
      </a>
    </header>
  )
}
