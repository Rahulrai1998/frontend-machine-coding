import React, { useState } from "react";

const Folder = ({ folderData }) => {
  const { id, name, isFolder, items } = folderData;
  const [expanded, setExpanded] = useState(false);
  if (!isFolder) return <div>📄{name}</div>;
  return (
    <div style={{ textAlign: "start", paddingLeft: "1rem" }}>
      <div onClick={() => setExpanded(!expanded)}>
        {expanded ? "-📂" : "+📁"}
        {name}
      </div>{" "}
      <div style={{ display: expanded ? "block" : "none", paddingLeft: "0.5rem" }}>
        {items?.map((item) => {
          console.log(item.name);
          return (
            <div key={item.id}>
              <Folder folderData={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
