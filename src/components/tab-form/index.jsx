import React, { useState } from "react";
import { tabs } from "./tabsConfig";
import "./styles.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: undefined,
    email: "",
    interests: [],
    theme: "",
  });

  const handlePrevious = () => {
    setActiveTab((tab) => tab - 1);
  };
  const handleNext = () => {
    setActiveTab((tab) => tab + 1);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
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
            aria-controls={`tabpanel-${index}`}
            className="tab-btn"
            onClick={() => setActiveTab(index)}
          >
            {tab?.name}
          </button>
        ))}
      </div>
      <form
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="form">
          <ActiveTabPanel data={formData} setData={setFormData} />
        </div>
        {activeTab > 0 && (
          <button type="submit" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button type="submit" onClick={handleNext}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default TabForm;
