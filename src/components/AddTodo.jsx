import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
