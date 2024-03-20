import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTask, setNewTasks] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos, //used callback
        { task: newTask, id: uuidv4() },
      ];
    });

    setNewTasks("");
  };

  let addTodo = (event) => {
    setNewTasks(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos)=>prevTodos.filter((prevTask) => prevTask.id != id));
  };

  // let deleteTodo = (id) => {
  //   let copyTodo = todos.filter((task) => task.id != id);
  //   setTodos(copyTodo);
  // };

  let upperCaseAll = () =>{
    setTodos((prevTodos)=>{
      return prevTodos.map((todo)=>{
        return {
       ...todo,
          task: todo.task.toUpperCase()
        }
      })
    })
  }

  let toUpperCase=(id)=>{
    
    setTodos((prevTodos)=>{
      return prevTodos.map((task)=>{
        if(task.id ==id){
          return {
         ...task,
            task: task.task.toUpperCase()
          }
        }

        else{
          return task; 
        }

      } 
      )
    
    })
  }
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
        {todos.map((task) => {
          return (
            <li key={task.id}>
              <span> {task.task}</span>
              <button onClick={() => deleteTodo(task.id)}>Delete</button>
              <button onClick={() => toUpperCase(task.id)}>Upper Case</button>
            </li>
          );
        })}
      </ul>

      <div>
        <button onClick={upperCaseAll}>UpperCaseAll</button>
      </div>
    </div>
  );
};

export default TodoList;
