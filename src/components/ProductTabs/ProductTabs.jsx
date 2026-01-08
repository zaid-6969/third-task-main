import React, { useState } from "react";

const ProductTabs = ({ description }) => {
  const [tab, setTab] = useState("description");

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button onClick={() => setTab("description")}>Description</button>
        <button onClick={() => setTab("info")}>Additional information</button>
        <button onClick={() => setTab("preview")}>Preview</button>
      </div>

      <div className="tab-content">
        {tab === "description" && <p>{description}</p>}
        {tab === "info" && <p>Material: Cotton, Wood, Fabric</p>}
        {tab === "preview" && <p>Preview images coming soon...</p>}
      </div>
    </div>
  );
};

export default ProductTabs;
