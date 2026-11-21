import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const STEPS = [
  {
    n: '01',
    title: 'Choose your goal',
    body: 'Tell SkillForge the role you\'re working toward ?" from full stack to AI engineering.',
  },
  {
    n: '02',
    title: 'Understand your gaps',
    body: 'See which skills need attention, measured against what that role actually requires.',
  },
  {
    n: '03',
    title: 'Build with direction',
    body: 'Follow a practical roadmap of skills and projects, one recommendation at a time.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section className={`how reveal ${inView ? 'in-view' : ''}`} id="how-it-works" ref={ref}>
      <p className="eyebrow">How it works</p>
      <h2 className="section-title">Three steps, in order.</h2>

      <ol className={`how__list ${inView ? 'how__list--in-view' : ''}`}>
        
      </ol>
    </section>
  )
}
