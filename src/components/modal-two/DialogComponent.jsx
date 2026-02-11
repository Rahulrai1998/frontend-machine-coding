import React, { useEffect, useRef } from "react";

const DialogComponent = ({ onClose, children }) => {
  const dialogContainerRef = useRef(null);

  const handleClick = (e) => {
    if (dialogContainerRef.current)
      dialogContainerRef.current.classList.add("dialog-container-hide");

    dialogContainerRef.current.addEventListener(
      "animationend",
      () => {
        onClose();
      },
      { once: true }, //this will make sure to remove the eventListener automatically from the target element after runninig.
    );
  };

  //close the modal on clicking outside the modal.
  const handleClickOutside = (e) => {
    if (e.target.className === "dialogContainer") handleClick();
  };

  return (
    <div
      className="dialogContainer"
      ref={dialogContainerRef}
      onClick={handleClickOutside}
    >
      <div className="dialog">
        {children}
        {!!onClose && (
          <button onClick={handleClick} className="dialog-close-btn">
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default DialogComponent;
