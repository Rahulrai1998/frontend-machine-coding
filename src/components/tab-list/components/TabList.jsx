import React, { useRef, useState } from "react";
import { tabData } from "../constants";

const TabList = ({ defaulValue = 0 }) => {
  const [selected, setSelected] = useState(defaulValue);
  const tabRefs = useRef([]);

  const handleChange = (index) => {
    setSelected(index);
  };

  const focusTab = (index) => {
    if (tabRefs.current[index]) tabRefs.current[index].focus();
  };

  const handleKeyDown = (event, index) => {
    let newIndex = index;
    switch (event.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabData.length;
        focusTab(newIndex);
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + tabData.length) % tabData.length;
        focusTab(newIndex);
        break;
      case "Enter":
      case " ":
        setSelected(index);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div role="tablist" aria-label="Tabs">
        {tabData.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls={`tabpanel-${index}`}
            onClick={() => handleChange(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ border: index === selected ? "red solid 1px" : null }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`tab-${tabData[selected].id}`}
        id={`tabpanel-${selected}`}
      >
        {tabData[selected].component}
      </div>
    </>
  );
};

export default TabList;
