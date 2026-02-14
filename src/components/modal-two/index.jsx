import React, { useState } from "react";
import DialogComponent from "./DialogComponent";
import "./modalTwo.css";
import { createPortal } from "react-dom";

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
          <h2 id="modal-title">Modal Title</h2>
          <p id="modal-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. . Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. .
          </p>
          {/* <form> */}
          {/* <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                placeholder="enter name"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                id="email"
                name="email"
              />
            </div> */}
          {/* <div> */}
          <button type="submit" className="submit-btn">
            submit
          </button>
          {/* </div> */}
          {/* </form> */}
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
