'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from './index.module.scss'

type Category = {
  id: string
  title: string
  media: {
    url: string
  }
}

type Slideshow = {
  title: string
  categories: Category[]
}

const SlideShow = ({ slideshow }: { slideshow: Slideshow }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Only start the interval if slideshow and categories are available
    if (slideshow && slideshow.categories && slideshow.categories.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshow.categories.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [slideshow]) // Depend on slideshow, not just categories.length

  console.log(slideshow)

  if (!slideshow || !slideshow.categories || slideshow.categories.length === 0) {
    return <div>No slides available</div> // Optional: Show a message if no slides are available
  }

  return (
    <div className={styles.slideshow}>
      <AnimatePresence mode="sync">
        {slideshow.categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.slide}>
              <Image
                src={category.media.url}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SlideShow
