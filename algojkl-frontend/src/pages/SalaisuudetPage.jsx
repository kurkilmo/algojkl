import React from 'react'
import starterDesktop from '../images/Page_starters/21.jpg'
import starterMobile from '../images/mobiili/21.png'
import useDevice from '../hooks/useDevice'

const SalaisuudetPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />
      <div></div>
    </div>
  )
}

export default SalaisuudetPage
