'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MissionRedirectPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#mission')
  }, [router])
  return null
}
