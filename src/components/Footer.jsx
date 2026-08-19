export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__info">
            <div className="footer__brand">
              <span className="nav__mark" aria-hidden="true" />
              SkillForge AI
            </div>
            <p className="footer__tag">Build skills with direction. Your AI-powered career co-pilot.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Twitter" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__col-title">Product</h4>
              <a href="#features" className="footer__link">Features</a>
              <a href="#how-it-works" className="footer__link">How it works</a>
              <a href="#pricing" className="footer__link">Pricing</a>
            </div>
            <div className="footer__column">
              <h4 className="footer__col-title">Resources</h4>
              <a href="#blog" className="footer__link">Blog</a>
              <a href="#documentation" className="footer__link">Documentation</a>
              <a href="#community" className="footer__link">Community</a>
            </div>
            <div className="footer__column">
              <h4 className="footer__col-title">Company</h4>
              <a href="#about" className="footer__link">About Us</a>
              <a href="#careers" className="footer__link">Careers</a>
              <a href="#privacy" className="footer__link">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {new Date().getFullYear()} SkillForge AI. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
