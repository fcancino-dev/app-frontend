import React from 'react'
import{ Button } from '@/components/ui/button'
import Link from 'next/link'

const about = () => {
  return (
    <div>
      <h1>About</h1>
      <Button className="text-white">
        <Link href="/">Regresar</Link>
      </Button>
    </div>
  )
}

export default about