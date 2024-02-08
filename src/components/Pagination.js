import React from 'react'

function Pagination(props) {

    function handlePaginator(item){
        props.setCurrentPage(item)
    }

    let numberOfPages = [];
    for (let i = 1; i <= Math.ceil(props.filterDishes.length / props.itemsPerPage); i++){
        numberOfPages.push(i);
    }
  return (
    <section>
        <ul className='pagination flex'>
            {
                numberOfPages.map((item)=>{
                     return(
                        <li onClick={()=>handlePaginator(item)}>{item}</li>
                     )
                })
            }
            
        </ul>
    </section>

  )
}

export default Pagination