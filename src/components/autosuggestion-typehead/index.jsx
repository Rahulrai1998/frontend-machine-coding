import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const AutoSuggestions = () => {
  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [showResultsCard, setShowResultsCard] = useState(false);
  const [cache, setCache] = useState({});
  
  const fetchData = async () => {
    try {
      if (cache[input]) {
        setRecipe(cache[input]);
        console.log("Inside Cache", input);
        return;
      }
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const data = await res.json();
      setRecipe(data?.recipes);
      setCache((prev) => ({ ...prev, [input]: data?.recipes }));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [input]);

  const handleChange = (e) => {
    setInput(e?.target?.value);
  };

  const handleClick = (name) => {
    setInput(name);
    setShowResultsCard(false);
  };
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h1>AutoSuggestions</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
        style={{ width: "100%", padding: "8px 1px" }}
        onFocus={() => setShowResultsCard(true)}
        // onBlur={() => {
        //   !resultRef?.current && setShowResultsCard(false);
        // }}
      />
      {showResultsCard && (
        <div className="suggestion-card">
          {recipe?.map((elm) => (
            <div
              key={elm?.id}
              style={{ padding: "5px", textAlign: "left", cursor: "pointer" }}
              onClick={() => handleClick(elm?.name)}
            >
              {elm?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestions;
