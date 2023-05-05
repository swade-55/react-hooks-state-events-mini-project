import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const [formText,setFormText] = useState('')
  const [formCategory,setFormCategory] = useState('')

  function handleText(e){
    setFormText(e.target.value)
  }
  function handleCategory(e){
    setFormCategory(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({
      id:uuid(),
      text:formText,
      category:formCategory,
    })

  }

  let categoriesUpdated = categories.filter(category=>{
    return category != 'All'
  })

  const categoryOptions = categoriesUpdated.map(categoryOption=>{
    return <option key = {categoryOption}>{categoryOption}</option>
  })
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formText} onChange={handleText}/>
      </label>
      <label>
        Category
        <select name="category" value={formCategory} onChange={handleCategory}>
          {categoryOptions}

          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
