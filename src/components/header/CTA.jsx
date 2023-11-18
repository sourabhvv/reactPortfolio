import React from 'react'
import CV from '../../assets/cv.pdf';
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Dounload CV</a>
        <a href="/about" className='btn'>lets talk</a>
    </div>
  )
} 

export default CTA

