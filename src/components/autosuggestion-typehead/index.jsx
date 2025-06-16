import React from "react";
import AutoComplete from "./components/AutoCompleteInput";

const AutoSuggestions = () => {
  // 'https://dummyjson.com/recipes/search?q=Margherita'
  return (
    <div>
      <h1>AutoSuggestions</h1>
      <AutoComplete />
    </div>
  );
};

export default AutoSuggestions;
