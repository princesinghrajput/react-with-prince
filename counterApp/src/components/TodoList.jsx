import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, setTodos] = useState([
    { tasks: "sample todo", id: uuidv4(), isMark: false },
  ]); //state to  manage todo

  let [newTask, setNewTasks] = useState("");

  let addNewTask = () => {
    if (newTask.trimEnd() != "")
      //handled empty value in input not add in task
      setTodos([...todos, { tasks: newTask, id: uuidv4(), isMark: false }]);
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

  //to convert all tasks into upperCase
  let markAllDone = () => {
    setTodos(
      todos.map((prevTodo) => {
        return {
          ...prevTodo, //spread operator
          isMark: true, //
        };
      })
    );
  };

  //convert it into callback
  let markAsDone = (id) => {
    setTodos(() => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isMark: true,
          };
        } else {
          return todo;
        }
      });
    });
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
              <span style={todo.isMark ? {textDecorationLine:"line-through"}: {}}>{todo.tasks}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
            </li>
          );
        })}
      </ul>
      <button onClick={markAllDone}>Mark All as Done</button>
    </div>
  );
};

export default TodoList;
