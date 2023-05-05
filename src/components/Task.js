import React from "react";

function Task({task,text,category,handleDelete}) {
  // const task = {
  //   text: text,
  //   category: category
  // }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>{handleDelete(task)}} className="delete">X</button>
    </div>
  );
}

export default Task;
