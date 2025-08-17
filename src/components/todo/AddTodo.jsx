import React, { useState } from "react";

const AddTodo = ({ inputData, setInputData, handleAdd }) => {
  return (
    <div className="add-todo">
      <input
        placeholder="Add something..."
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={() => handleAdd(inputData)}>Add</button>
    </div>
  );
};

export default AddTodo;
