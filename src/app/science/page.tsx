'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ScienceRedirectPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#science')
  }, [router])
  return null
}
