import React from 'react'


function Card(props) {
  const {
    Items,
    popupStatus
  } = props


  return (
    <li>
        <a onClick={()=>popupStatus(Items.strMeal)}>
            <img src={Items.strMealThumb} alt="" className='br-10' />
            <h5>{Items.strMeal}</h5>
        </a>

    </li>
  )
}

export default Card