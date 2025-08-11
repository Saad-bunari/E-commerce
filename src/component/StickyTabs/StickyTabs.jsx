import React, { useState } from "react";
import "./StickyTabs.scss";

const StickyTabs = () => {
  const [activeTab, setActiveTab] = useState("Features");

  const tabs = ["Features", "Basic", "Professional", "International", "Compare Plans"];

  return (
    <div className="sticky-tabs">
      <div className="logo">W.</div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StickyTabs;
