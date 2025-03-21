'use client'

import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

type SlideProps = {
  image: string
  title?: string
}

const Slide = ({ image, title }: SlideProps) => {
  return (
    <div className={styles.slide}>
      <Image src={image} alt={title || 'Slideshow Image'} layout="fill" objectFit="cover" />
      {title && <p className={styles.title}>{title}</p>}
    </div>
  )
}

export default Slide