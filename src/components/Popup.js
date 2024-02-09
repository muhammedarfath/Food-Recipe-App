import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext'

function Popup({currentItem,closePop}) {
  const allItems = useContext(AllMenuContext)


  let Detail = allItems.filter((item)=>{
    return item.strMeal === currentItem
  }).map((item)=>{
    return (
      <div className="popup-content-data">
        <div className="popup-header">
          <img src={item.strMealThumb} alt="" />
          <h5 className="popup-header-category">{item.strCategory}</h5>
        </div>
        <h2>{item.strMeal}</h2>
        <ul className='dish-ingredients flex'>
          <li>{item.strIngredient1}</li>
          <li>{item.strIngredient2}</li>
          <li>{item.strIngredient3}</li>
          <li>{item.strIngredient4}</li>
        </ul>
      </div>
    )

  })
  



  return (
    <div className='popup'>
        <div className="popup-content">
            {Detail}
            <button>add to cart</button>
            <h5 className="popup-close" onClick={closePop}>close</h5>
        </div>

    </div>
  )
}

export default Popup