import "./App.css";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Model/Todo-Model";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    setTodo((prevTodo) => {
      return prevTodo.concat(new Todo(text));
    });
  };

  const onRemoveHandler = (todoId: string) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };
  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos onRemove={onRemoveHandler} items={todo} />
    </div>
  );
}

export default App;
