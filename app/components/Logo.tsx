import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <>
    <Image src={'/logo.png'} alt='issue tracker' width={150} height={100}></Image>
    </>
  )
}

export default Logo