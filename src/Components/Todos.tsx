import React from "react";
import Todo from "../Model/Todo-Model";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => {
  const onRemoveHandler = (todoId: string) => {
    props.onRemove(todoId);
  };
  return (
    <div>
      <ul className={classes.todos}>
        {props.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              onClick={onRemoveHandler}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
