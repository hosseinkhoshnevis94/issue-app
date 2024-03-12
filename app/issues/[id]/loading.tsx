import Spinner from '@/app/components/Spinner'
import React from 'react'

const LoadingIssueDetailsPage = () => {
  return (
    <div className="container mx-auto mt-10 w-[100%] flex justify-center align-middle h-[70vh]">
    <Spinner></Spinner>
  </div>
  )
}

export default LoadingIssueDetailsPage