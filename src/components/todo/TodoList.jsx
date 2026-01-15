import React from "react";

const TodoList = ({ todoData, handleDelete }) => {
  console.log(todoData);
  if (todoData.length === 0) return <p>Todo List Clear...</p>;
  return (
    <div>
      {todoData?.map((todo) => {
        return (
          <p key={todo?.id}>
            {todo?.text} <button>update</button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default TodoList;
