import React from 'react'


function Card(props) {

    function popupHandler () {
        props.popupStatus(true)
    }
  return (
    <li>
        <a onClick={popupHandler}>
            <img src={props.Items.strMealThumb} alt="" className='br-10' />
            <h5>{props.Items.strMeal}</h5>
        </a>

    </li>
  )
}

export default Card