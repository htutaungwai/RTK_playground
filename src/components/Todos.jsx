import React from "react";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return <h1 key={todo.id}>{todo.text}</h1>;
      })}
    </div>
  );
};

export default Todos;
