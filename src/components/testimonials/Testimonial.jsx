import React from 'react'
import './Testimonial.css'

import AVTR1 from '../../assets/avatar1.jpg'

const ans ="sourabh";

function Testimonial() {
  return (
   <section id='testimonials'>
    <h5>Reviews from client</h5>
    <h2>Testimonials</h2>

    <div className="container testimonials__container">
      <article className="testimonial">
        <div className="client__avatar">
          <img src={AVTR1} alt="" />
        </div>
        <h5 className="client__name">
        ERENT WEOSDF
        </h5>
        <small className="client__review">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Itaque impedit maxime, in deleniti ipsum adipisci porro numquam 
           consequuntur, reprehenderit suscipit delectus. Nemo asperiores 
           accusantium quas eum aspernatur laudantium et nostrum quis 
           laboriosam! Cupiditate, impedit veniam!
           {ans}

        </small>

      </article>
    </div>

   </section>
  )
}

export default Testimonial