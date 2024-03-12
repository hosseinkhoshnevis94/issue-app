import React, { PropsWithChildren } from 'react'

const ErrorMessage = ({children}:PropsWithChildren) => {
    if(!children) return null
  return (
    <span className='text-red-600'>{children}</span>
  )
}

export default ErrorMessage