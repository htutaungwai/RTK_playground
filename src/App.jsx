import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="w-screen h-screen bg-red-500">
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
