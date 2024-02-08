import React, { useEffect, useState } from 'react'





function FilteredDishes(props) {
    let [filterDish,setFilterDish] = useState(props.singleOne) 
    let [activeDish,setActiveDish] = useState("Beef") 
    let [currentPage,setCurrentPage] = useState(1)
    let [itemPerPage,setItemPerPage] = useState(4)

    
    let indexOfLastDish = currentPage * itemPerPage
    let indexOfFirstDish = indexOfLastDish - itemPerPage


    
    
    function handleCategory(item){
        props.setSingleOne([])
       setActiveDish(item)
       let filteredDishe = props.specialItem.filter((meal)=>{
            return meal.strCategory === item 
       })

       setFilterDish(filteredDishe)
    }

    console.log("marked by arfat",filterDish)

  return (
    <div className='filtred-dishes'>
        <div className="container">
            <div className="text-center">
                <h2>Choose your dishes</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid sed impedit provident, recusandae quis vero deserunt itaque.</p>
            </div>

            <div className="filterd-dishes">
                <ul>
                    {
                        props.allCategory.map((items)=>{
                            return (
                                <li 
                                className={activeDish === items.strCategory ? 'active' : '' } 
                                onClick={()=>(
                                handleCategory(items.strCategory)
                            )}>{items.strCategory}</li>
                            )
                        })
                    }
                    
                </ul>
            </div>

            <div className="filtered-dishes-results">
                <ul className="flex flex-wrap gap-30">

                    {
                       filterDish.length !== 0 ? (
                        filterDish.map((item)=>{
                            return (
                                <li>
                                    <img src={item.strMealThumb} alt="" />
                                    <h2>{item.strMeal}</h2>
                                </li>
                            )
                        })
                       )
                    :
                    <div className='alert'>
                        <h2>Sorry,No items found</h2>
                        <h4>Please choose another menu</h4>
                        
                    </div>
                    }

                    {
                        props.singleOne.map((item)=>{
                            return (
                                <li>
                                    <img src={item.strMealThumb} alt="" />
                                    <h2>{item.strMeal}</h2>
                                </li>
                            )
                        })
                    }




                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default FilteredDishes