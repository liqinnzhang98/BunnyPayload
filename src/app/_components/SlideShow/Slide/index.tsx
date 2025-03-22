'use client'

import React from 'react'
import Image from "next/image"
import styles from './index.module.scss'

type SlideProps = {
  image: string
  title?: string
}

const Slide = ({ image, title }: SlideProps) => {
  console.log('Slide image URL:', image); // Debug log

  return (
    <div className={styles.slide}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title || 'Slideshow Image'} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          style={{ objectFit: 'cover' }}
          priority
          quality={100}
          onError={(e) => {
            console.error('Image loading error:', e);
          }}
        />
      </div>
      {title && <p className={styles.title}>{title}</p>}
    </div>
  )
}

export default Slide