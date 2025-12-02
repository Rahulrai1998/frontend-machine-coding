import React, { useState } from "react";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";
import "./styles.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: undefined,
    email: "",
    interests: [],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      hasError: () => {
        let err = {};
        if (!formData?.name || formData?.name?.length < 2)
          err.name = "Invalid Name";
        if (!formData?.age || formData?.age < 18) err.age = "Invalid Age";
        if (
          !formData?.email ||
          formData?.email?.length < 2 ||
          !formData?.email?.includes("@")
        )
          err.email = "Invalid Email";

        setErrors(err);
        return err?.name || err?.age || err?.email;
      },
    },
    {
      name: "Interests",
      component: Interests,
      hasError: () => {
        const err = {};
        if (formData.interests.length < 1) err.interests = "Select one";
        setErrors(err);
        return err.interests;
      },
    },
    {
      name: "Settings",
      component: Settings,
      hasError: () => {
        return false;
      },
    },
  ];

  const handlePrevious = () => {
    setActiveTab((tab) => tab - 1);
  };
  const handleNext = () => {
    !tabs[activeTab]?.hasError() && setActiveTab((tab) => tab + 1);
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
            onClick={() => {
              !tabs[activeTab]?.hasError() && setActiveTab(index);
            }}
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
          <ActiveTabPanel
            data={formData}
            setData={setFormData}
            errors={errors}
          />
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
