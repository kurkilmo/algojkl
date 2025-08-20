import { useState, useEffect } from 'react'

const MOBILE_QUERY = '(max-width: 768px)'

export default function useDevice() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(MOBILE_QUERY).matches
      : false
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)

    const handler = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)

    setIsMobile(mediaQuery.matches)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isMobile
}
