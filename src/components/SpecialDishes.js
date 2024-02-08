import React from 'react'

function SpecialDishes(props) {
   let limit = 8

  return (
    <section className="special-dishes">
        <div className="container">
            <div className="special-dishes-content text-center">
                <h2>Our Special Dishes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur itaque minima reiciendis a qui mollitia dolorum voluptatum doloremque?</p>
            </div>
            <div className="special-dishes-list">
                <ul className='flex flex-wrap gap-30'>
                    {
                        props.specialItem.map((item,index)=>{
                            if (index < limit){
                                return(
                                <li>
                                    <img src={item.strMealThumb} alt="" className='br-10' />
                                    <h5>{item.strMeal}</h5>
                                </li>
                                )
                            } 
                        })
                    }

                </ul>
            </div>
        </div>
    </section>
  )
}

export default SpecialDishes