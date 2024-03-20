import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, setTodos] = useState([{ tasks: "sample todo", id: uuidv4() }]); //state to  manage todo

  let [newTask, setNewTasks] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { tasks: newTask, id: uuidv4() }]);
    setNewTasks("");
  };

  let addTodo = (event) => {
    setNewTasks(event.target.value);
  };

  let deleteTodo = (id) => {
    //TODO
    //you have to change this into callBack function
    setTodos(todos.filter((todo) => todo.id != id));
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
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span> {todo.tasks}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
