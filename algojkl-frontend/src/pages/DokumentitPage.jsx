import React from 'react'
import useDevice from '../hooks/useDevice'

import starterDesktop from '../images/Page_starters/11.jpg'
import starterMobile from '../images/mobiili/13.png'
import PytKirja from '../components/pytKirjaFetch'

const Documents = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop

  return (
    <div>
      <img src={starterImage} alt="starter_img_documents" className="starter" />
      <div>
        <PytKirja />
      </div>
    </div>
  )
}

export default Documents
