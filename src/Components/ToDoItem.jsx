import React from "react";

function ToDoItem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <span onClick={toggleTask}>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>

    </li>
  );
}

export default ToDoItem;
