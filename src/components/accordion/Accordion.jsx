import React, { useState } from "react";
import { data } from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  if (!data || data.length === 0) return <p>Data not found!</p>;
  return (
    <section className="accord-parent" aria-label="Accordion">
      {data?.map((elm, index) => (
        <div
          className="accord-card"
          key={elm.id}
          role="region"
          aria-labelledby={`accord-title-${elm.id}`}
        >
          <button
            className="accord-title-btn"
            onClick={() => handleToggle(index)}
            id={`accord-title-${elm.id}`}
            aria-controls={`accord-content-${elm.id}`}
            aria-expanded={index === openIndex}
          >
            <div>{elm?.title}</div>
            <div>
              {openIndex === index ? <FaChevronDown /> : <FaChevronUp />}
            </div>
          </button>
          {openIndex === index && (
            <div
              className="accord-content"
              role="region"
              aria-labelledby={`accord-title-${elm.id}`}
              id={`accord-content-${elm.id}`}
            >
              {elm.content ? elm.content : "no content"}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
