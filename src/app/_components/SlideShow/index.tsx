'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slide from './Slide'
import styles from './index.module.scss'
import classes from './index.module.scss'

const fetchSlideshow = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/slideshow`);
      const data = await response.json();
      console.log('Slideshow data:', data); // Debug log
      return data;
    } catch (error) {
      console.error('Error fetching slideshow:', error);
      return null;
    }
  };
  
  const SlideShow = () => {
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      fetchSlideshow().then((slideshow) => {
        if (slideshow?.active && slideshow?.categories) {
          console.log('Setting categories:', slideshow.categories); // Debug log
          setCategories(slideshow.categories);
        }
      });
    }, []);

    useEffect(() => {
      if (categories.length > 0) {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
      }
    }, [categories.length]);

  return (
    <section className={classes.container}>
      <div className={styles.slideshow}>
        <AnimatePresence mode="wait">
          {categories.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={styles.slideWrapper}
            >
              <Slide 
                image={categories[currentIndex].media.url} 
                title={categories[currentIndex].title} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SlideShow