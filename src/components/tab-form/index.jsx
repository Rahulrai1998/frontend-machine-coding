import React, { useState } from "react";
import { tabs } from "./tabsConfig";
import "./styles.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    interests: [],
    theme: "",
  });

  console.log({...formData});

  const handleSubmit = () => {
    console.log(formData);
  };

  const ActiveTabPanel = tabs[activeTab]?.component;
  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <div role="tablist" aria-label="List of tabs">
        {tabs?.map((tab, index) => (
          <button
            role="tab"
            key={index}
            id={`tab-${index}`}
            className="tab-btn"
            onClick={() => setActiveTab(index)}
          >
            {tab?.name}
          </button>
        ))}
      </div>
      <form className="form" aria-labelledby={`tabpanel-${activeTab}`}>
        <ActiveTabPanel data={formData} setData={setFormData} />
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TabForm;
