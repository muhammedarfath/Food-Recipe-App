import React,{useState} from 'react'
import Card from './Card'
import Popup from './Popup'

function SpecialDishes(props) {

   const [showPopup,setPopup]=useState(false)
   let limit = 8

   function closePopup(){
    setPopup(false)
    }




  return (
    <section className="special-dishes">
       {showPopup &&  <Popup closePop={closePopup} />}
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
                                    <Card Items={item} popupStatus={setPopup}/>

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