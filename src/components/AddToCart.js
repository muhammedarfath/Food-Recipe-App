import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

function AddToCart({CartIems}) {
  const cartPackage = useContext(StateContext)
  console.log("marked by arfath",cartPackage)

  return (
    <div className='add-to-cart-wrapper'>
        <div className="add-to-cart-item">
          <h2>CART</h2>
        {
            cartPackage.cartItems.map((item)=>{
            return(
                <div>
                    <img src={item.img} alt="" />
                    <h6>{item.title}</h6>
                </div>
            )
            })

            }

        </div>

       
    </div>
  )
}

export default AddToCart