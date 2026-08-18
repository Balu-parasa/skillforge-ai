import { ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function FinalCTA() {
  const [ref, inView] = useIntersectionObserver()

  return (
    <section className={`final-cta reveal ${inView ? 'in-view' : ''}`} id="cta" ref={ref}>
      <h2 className="final-cta__title">Ready to close your skill gaps?</h2>
      <p className="final-cta__sub">Start your personalized learning path today.</p>
      
      <button className="btn btn--primary btn--lg">
        Build my roadmap
        <ArrowRight size={18} strokeWidth={2.5} />
      </button>
    </section>
  )
}
