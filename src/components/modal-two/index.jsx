import React, { useState } from "react";
import DialogComponent from "./DialogComponent";
import "./modalTwo.css";

const Dialog = () => {
  const [show, setShow] = useState(false);

  const handleShowDialog = () => {
    setShow(true);
  };

  const handleCloseDialog = () => {
    setShow(false);
  };

  return (
    <>
      <button onClick={handleShowDialog}>open dialog</button>
      {show && (
        <DialogComponent onClose={handleCloseDialog}>
          <h2>Modal Title</h2>
          <p>
            This is a dialog. This is a dialog. This is a dialog. This is a
            dialog. This is a dialog. This is a dialog. This is a dialog.
            <br />
            This is a dialog. This is a dialog. This is a dialog. This is a
            dialog. This is a dialog. This is a dialog. This is a dialog.
            <br />
            This is a dialog. This is a dialog. This is a dialog. This is a
            dialog. This is a dialog. This is a dialog. This is a dialog.
            <br />
            This is a dialog. This is a dialog. <br />
            This is a dialog. This is a dialog. <br />
            This is a dialog. This is a dialog. <br />
            This is a dialog. This is a dialog. <br />
            This is a dialog. This is a dialog. <br />
            This is a dialog. This is a dialog. <br /> This is a dialog.
          </p>
        </DialogComponent>
      )}
    </>
  );
};

export default Dialog;

/*
Dialog: Allow interaction with rest of the application. Ex: tooltip, toast notifications.
Modal
- A type of dialog.
- Blocks the background interaction making the content inert.
- requires explicit action to close.
- ex: warning, forms etc.
*/
