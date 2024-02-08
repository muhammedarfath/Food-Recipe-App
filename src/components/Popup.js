import React from 'react'

function Popup(props) {

  return (
    <div className='popup'>
        <div className="popup-content">
            <h2>menu discription</h2>
            <button>add to cart</button>
            <h5 className="popup-close" onClick={props.closePop}>close</h5>
        </div>

    </div>
  )
}

export default Popup