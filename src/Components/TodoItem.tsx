import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{
  title: string;
  onClick: (id: string) => void;
  id: string;
}> = (props) => {
  const onRemoveHandler = () => {
    props.onClick(props.id);
  };
  return (
    <li className={classes.item} onClick={onRemoveHandler}>
      {props.title}
    </li>
  );
};

export default TodoItem;
