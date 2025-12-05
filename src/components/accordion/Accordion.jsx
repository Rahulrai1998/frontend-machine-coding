import React, { useState } from "react";
import { data } from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  if(!data || data.length === 0) return <p>Data not found!</p>
  return (
    <div className="accord-parent">
      {data?.map((elm, index) => (
        <div className="accord-card" key={elm.id}>
          <button
            className="accord-title-btn"
            onClick={() => handleToggle(index)}
          >
            <div>{elm?.title}</div>
            <div>
              {openIndex === index ? <FaChevronDown /> : <FaChevronUp />}
            </div>
          </button>
          {openIndex === index && (
            <div className="accord-content">
              {elm.content ? elm.content : "no content"}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
