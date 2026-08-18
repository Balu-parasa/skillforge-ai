import { useCountUp } from '../hooks/useCountUp'

const RADIUS = 80
const ARC_LENGTH = Math.PI * RADIUS // length of a semicircle

export default function ReadinessGauge({ value, label = 'Career readiness' }) {
  const animatedValue = useCountUp(value, 800)
  const offset = ARC_LENGTH * (1 - value / 100)

  return (
    <div className="gauge">
      <svg viewBox="0 0 200 110" className="gauge__svg" role="img" aria-label={`${label}: ${value} percent`}>
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          className="gauge__track"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          className="gauge__fill"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={ARC_LENGTH}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="gauge__readout">
        <span className="gauge__value">{animatedValue}%</span>
        <span className="gauge__label">{label}</span>
      </div>
    </div>
  )
}
