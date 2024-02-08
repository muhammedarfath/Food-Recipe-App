import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes'
import Header from './Header'
import Loader from './Loader'



function Menu() {

  const [menu,setMenu] = useState([])
  const [category,setCategory] = useState([])
  const [hero,setHero] = useState('')
  const [loading,setLoading] = useState(true)
  const [singleCategory,setSingleCategory] = useState([])

  async function HeroItems(){
    const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
    let response = await fetch(API_URL)
    let data = await response.json();
    setHero(data.meals);
    setLoading(false)

  } 
  
  async function SingleCategories(){
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL)
    let data = await response.json();
    setSingleCategory(data.meals);

  }  

  async function MenuItems(){
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL)
    let data = await response.json();
    setMenu(data.meals)

  }  


  async function CategoryItems () {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let data = await response.json();
    setCategory(data.categories)
  }
  


  useEffect(()=>{
    MenuItems();
    CategoryItems();
    HeroItems();
    SingleCategories();
  },[])

  return (
    <div>
       <Header/>
      {
        !loading ? <Hero randomImage={hero}/> : (
         <Loader/> 
        )
      }
      {
        !loading ? <SpecialDishes specialItem={menu} /> : null
      }
      {
        !loading ? <FilteredDishes setSingleOne={setSingleCategory} singleOne={singleCategory} allCategory={category} specialItem={menu} /> : null
      }
       
       
       
    </div>
  )
}

export default Menu