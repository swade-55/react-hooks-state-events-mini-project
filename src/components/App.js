import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category,setCategory] = useState('All')
  const [tasks,setTasks] = useState(TASKS)

  const tasksToDisplay = tasks.filter(task=>{
    return task.category === category || category === 'All'
  })

  function onTaskFormSubmit(newTask){
    setTasks([...tasks,newTask])
  }



  console.log('Category',category)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={category} setSelectedCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories = {CATEGORIES} />
      <TaskList setTasks={setTasks} tasks = {tasksToDisplay} />
    </div>
  );
}

export default App;
