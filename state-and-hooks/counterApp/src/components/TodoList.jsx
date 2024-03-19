import { useState } from "react";

const TodoList = () => {
  let [todos, setTodos] = useState(["Task-1"]);
  let [newTask, setNewTasks] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTask])
    setNewTasks("")
  };

  let addTodo = (event) => {
    setNewTasks(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <h1 className="mb-10">Todo App</h1>
      <input
        placeholder="add a new task"
        value={newTask}
        onChange={addTodo}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h3>Tasks ToDo</h3>
      <ul>
        {todos.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
