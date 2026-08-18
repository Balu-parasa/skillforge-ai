export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="nav__mark" aria-hidden="true" />
        SkillForge AI
      </div>
      <p className="footer__tag">Build skills with direction.</p>
      <nav className="footer__links" aria-label="Footer">
        <a href="#product">Product</a>
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
      </nav>
    </footer>
  )
}
