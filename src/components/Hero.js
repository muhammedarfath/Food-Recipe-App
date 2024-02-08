import React from 'react'

function Hero(props) {
  let oneImage = props.randomImage[0]

  return (
    <div className='hero'>
        <img src={oneImage.strMealThumb} alt="" />
        <div className="hero-content">
            <h2>Its all about good food & taste</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet molestiae ducimus ad consequuntur cum? Facere, aspernatur est.</p>
        </div>
    </div>
  )
}

export default Hero