import React from 'react'
import starter from '../images/Page_starters/14.jpg'
import JasenEdut from '../components/jedut'

const JasenEdutPage = () => {
  return (
    <div>
      <img src={starter} alt="starter_image_rules" className="starter" />
      <div> 
        <JasenEdut/> 
      </div>
    </div>
  )
}

export default JasenEdutPage
