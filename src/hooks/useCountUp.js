import { useState, useEffect } from 'react'

export function useCountUp(endValue, duration = 800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime = null
    let animationFrame

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setValue(Math.floor(ease * endValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [endValue, duration])

  return value
}
