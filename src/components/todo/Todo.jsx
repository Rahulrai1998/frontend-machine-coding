import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  const [inputData, setInputData] = useState("");

  const handleAdd = (text) => {
    setTodoData((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100), text },
    ]);
    setInputData("");
  };
  const handleDelete = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id != id));
  };
  return (
    <section role="application" className="todo-parent" aria-label="Todo">
      <AddTodo
        inputData={inputData}
        setInputData={setInputData}
        handleAdd={handleAdd}
      />
      <TodoList todoData={todoData} handleDelete={handleDelete} />
    </section>
  );
};

export default Todo;
