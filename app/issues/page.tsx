import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div>
      <button className=' btn btn-neutral'> <Link href={'./issues/new'}>New</Link></button>
    </div>
  )
}

export default IssuesPage