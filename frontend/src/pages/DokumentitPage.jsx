import React from 'react'
import starter from '../images/Page_starters/11.jpg'
import PytKirja from '../components/pytKirjaFetch'

const Documents = () => {
  return (
    <div>
      <img src={starter} alt="starter_img_documents" className="starter" />
      <div>
        <PytKirja />
      </div>
    </div>
  )
}

export default Documents
