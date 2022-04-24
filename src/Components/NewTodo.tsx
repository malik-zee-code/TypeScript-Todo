import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    let enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);

    enteredText = "";
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="text">Add Todo</label>
      <input type="text" id="text" ref={textRef} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
