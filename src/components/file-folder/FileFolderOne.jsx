import React, { useState } from "react";
import fileFolderData from "./data/data";
import Folder from "./components/Folder";

const FileFolderOne = () => {
  const [explorer, setExplorer] = useState(fileFolderData);
  return (
    <div>
      <Folder folderData={explorer} />
    </div>
  );
};

export default FileFolderOne;
