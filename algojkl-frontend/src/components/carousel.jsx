import React, { useState, useEffect } from 'react'

import ryhma from '../images/ryhma.png'
import logo from '../images/algo.jpg'
import algo from '../images/algo12.jpg'
import mobile1 from '../images/mobiili/algo_etu_mobiili.png'
import mobile2 from '../images/mobiili/kaste_m.png'
import mobile3 from '../images/mobiili/ryhma_m.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [photos, setPhotos] = useState([logo, ryhma, algo])

  useEffect(() => {
    const updatePhotos = () => {
      if (window.innerWidth < 768) {
        setPhotos([mobile1, mobile2, mobile3])
      } else {
        setPhotos([logo, ryhma, algo])
      }
    }

    updatePhotos()
    window.addEventListener('resize', updatePhotos)

    return () => window.removeEventListener('resize', updatePhotos)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div className="carousel-slide" key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Carousel
