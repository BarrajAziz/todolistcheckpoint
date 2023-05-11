import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "./actions/todoactions";

function App() {
  const [task, setTask] = useState("");
  const [filter, setfilter] = useState("all");
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        type="text"
        placeholder="add task...."
        onchange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(task))}>Add task</button>
      <button onClick={() => setfilter("all")}>all</button>
      <button onClick={() => setfilter("done")}>done</button>
      <button onClick={() => setfilter("undone")}>undone</button>
      { filter === "all" ? todos.map((el) =>
      <div>
        <h2>{el.titlel}</h2>
        <button onClick={() => dispatch(deleteTodo(el.id))}>Delete</button>
        <button onClick={() => dispatch(completeTodo(el.id))}>
          {el.complete ? "done" : "undone"}
        </button>
      </div>
      ) : filter ==="done" ? todos.filtre(el=>el.complete===true) .map((el) =>
      <div>
        <h2>{el.titlel}</h2>
        <button onClick={() => dispatch(deleteTodo(el.id))}>Delete</button>
        <button onClick={() => dispatch(completeTodo(el.id))}>
          {el.complete ? "done" : "undone"}
        </button>
      </div>
      ) : filter ==="undone" ? todos.filtre(el=>el.complete===false) .map((el) =>
      <div>
        <h2>{el.titlel}</h2>
        <button onClick={() => dispatch(deleteTodo(el.id))}>Delete</button>
        <button onClick={() => dispatch(completeTodo(el.id))}>
          {el.complete ? "done" : "undone"}
        </button>
      </div>
      ) : null  }
    </div>
  );
}

export default App;
