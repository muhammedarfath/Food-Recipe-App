import React,{useContext, useState} from 'react'
import Card from './Card'
import Popup from './Popup'
import {AllMenuContext} from './AllMenuContext'

function SpecialDishes() {
    const specialItem = useContext(AllMenuContext)
    console.log("vaddaaaaaa",specialItem)

   const [showPopup,setPopup]=useState(false)
   const [currentItem,setCurrentItem]=useState('')
   let limit = 8

   function popuphandler(item){
    setCurrentItem(item)
    setPopup(!showPopup)
    }

  return (
    <section className="special-dishes">
       {showPopup &&  <Popup closePop={popuphandler} currentItem={currentItem}/>}
        <div className="container">
            <div className="special-dishes-content text-center">
                <h2>Our Special Dishes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur itaque minima reiciendis a qui mollitia dolorum voluptatum doloremque?</p>
            </div>
            <div className="special-dishes-list">
                <ul className='flex flex-wrap gap-30'>
                    {
                        specialItem.map((item,index)=>{
                            if (index < limit){
                                return(
                                    <Card Items={item} popupStatus={popuphandler}/>

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