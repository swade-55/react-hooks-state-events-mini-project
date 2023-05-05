import React from "react";

function CategoryFilter({selectedCategory,categories,setSelectedCategory}) {
  const buttonArray = categories.map(category=>{
    const nameClass = selectedCategory===category ? 'selected' : null
    return <button className={nameClass} onClick={()=>{setSelectedCategory(category)}} key={category}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonArray}
    </div>
  );
}

export default CategoryFilter;
