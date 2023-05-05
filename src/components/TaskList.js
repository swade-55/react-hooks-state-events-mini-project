import React,{useState} from "react";
import Task from './Task'
function TaskList({tasks,setTasks}) {
  
  console.log(tasks)
  function handleDelete(deletedTask){
    console.log(deletedTask)
    const filteredTask = tasks.filter(task=>{
      return task!=deletedTask
    })
    setTasks(filteredTask)

  }
  return (
    <div className="tasks">
      <ul className='Items'>
        {tasks.map(task=>(
          <Task key = {task.text} task={task} handleDelete={handleDelete}text={task.text} category={task.category}/>
        ))}
      </ul>
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
