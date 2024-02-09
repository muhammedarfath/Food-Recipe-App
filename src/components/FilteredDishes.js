import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import {AllMenuContext} from './AllMenuContext'




function FilteredDishes(props) {

  const specialItem = useContext(AllMenuContext)


  let [filterDish, setFilterDish] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemPerPage, setItemPerPage] = useState(4);

  let indexOfLastDish = currentPage * itemPerPage;
  let indexOfFirstDish = indexOfLastDish - itemPerPage;

  let showThesDishesNow = filterDish.slice(indexOfFirstDish, indexOfLastDish);

  function handleCategory(item) {
    props.setSingleOne([]);
    setActiveDish(item);
    let filteredDishe = specialItem.filter((meal) => {
      return meal.strCategory === item;
    });

    setFilterDish(filteredDishe);
  }
  let maximum = 8
  return (
    <div className="filtred-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aliquid sed impedit provident, recusandae quis vero deserunt itaque.
          </p>
        </div>

        <div className="filterd-dishes">
          <ul>
            {props.allCategory.map((items) => {
              return (
                <li
                  className={activeDish === items.strCategory ? "active" : ""}
                  onClick={() => handleCategory(items.strCategory)}
                >
                  {items.strCategory}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {props.singleOne !=0 || filterDish.length !== 0 ? (
              showThesDishesNow.map((item) => {
                return (
                  <Card Items={item}/>

                );
              })
            ) : (
              <div className="alert">
                <h2>Sorry,No items found</h2>
                <h4>Please choose another menu</h4>
              </div>
            )}
          

            {props.singleOne.map((item,index) => {
              if (index < maximum) {
                return (
                  <li>
                    <img src={item.strMealThumb} alt="" />
                    <h2>{item.strMeal}</h2>
                  </li>
                );
              }

            })}
          </ul>
        </div>

        <Pagination
          setCurrentPage={setCurrentPage}
          filterDishes={filterDish}
          itemsPerPage={itemPerPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
