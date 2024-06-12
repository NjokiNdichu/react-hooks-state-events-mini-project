import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button className="delete" onClick={onDeleteTask}>X</button>
    </div>
  );
}

export default Task;