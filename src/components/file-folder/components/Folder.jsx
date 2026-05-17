import React, { useState } from "react";

const Folder = ({ folderData }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const { id, name, isFolder, items } = folderData;

  const handleCreateNew = (e, isFolder) => {
    e.stopPropagation();

    setExpanded(true);
    console.log(isFolder);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleSaveNew = (e) => {
    // 1.b
    if (e.keyCode === 13 && e.target.value) {
      console.log(e.target.value);
      setShowInput((obj) => ({ ...obj, visible: false }));
    }
  };

  if (!isFolder) return <div>📄{name}</div>;
  return (
    <div style={{ textAlign: "start", paddingLeft: "1rem", cursor: "pointer" }}>
      <div style={{ display: "flex" }} onClick={() => setExpanded(!expanded)}>
        <div>
          {" "}
          {expanded ? "-📂" : "+📁"}
          {name}
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <button onClick={(e) => handleCreateNew(e, true)}>Folder+</button>
          <button onClick={(e) => handleCreateNew(e, false)}>File+</button>
        </div>
      </div>

      {showInput.visible && (
        <div style={{ paddingLeft: "0.5rem" }}>
          <span>{showInput.isFolder ? "+📁" : "📄"}</span>
          <input
            type="text"
            autoFocus //no explicit click in input to enter.
            onBlur={() => setShowInput((obj) => ({ ...obj, visible: false }))}
            onKeyDown={handleSaveNew} //1.a
          />
          {/* <button onClick={handleSaveNew}>save</button> */}
        </div>
      )}

      <div
        style={{ display: expanded ? "block" : "none", paddingLeft: "0.5rem" }}
      >
        {items?.map((item) => {
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

/* 
1.
a. onKeyDown: immediately triggers on any key press.
b. e.keyCode === 13: check for enter key press. 

*/
