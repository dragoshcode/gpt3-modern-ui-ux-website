import React from 'react'
import './possibility.scss'
import '../../scss/_utils.scss'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='possibility grid' id='possibility'>
      <div className="possibility__image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility__content flex-col">
        <h2 className='gradient-text'>The possibilities are beyond your imagination</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <button>Request Early Access to Get Started</button>
      </div>
    </div>
  )
}

export default Possibility