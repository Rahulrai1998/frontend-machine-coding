import React, { useEffect, useRef } from "react";

const DialogComponent = ({ onClose, children }) => {
  const dialogContainerRef = useRef(null);

  const handleClick = (e) => {
    if (dialogContainerRef.current) {
      dialogContainerRef.current.classList.add("dialog-container-hide");
      dialogContainerRef.current.addEventListener(
        "animationend",
        () => {
          onClose();
        },
        { once: true }, //this will make sure to remove the eventListener automatically from the target element after runninig.
      );
    }
  };

  //close the modal on clicking outside the modal.
  const handleClickOutside = (e) => {
    if (e.target.className === "dialogContainer") handleClick();
  };

  useEffect(() => {
    //close modal on esc click
    function onKeyup(e) {
      console.log(e + " " + e.code);
      if (e.code === "Escape") handleClick();
    }
    document.addEventListener("keyup", onKeyup);

    // event listener cleanup on unmounting
    return () => {
      document.removeEventListener("keyup", onKeyup);
      if (dialogContainerRef.current)
        dialogContainerRef.current.removeEventListener("animationend", () => {
          onClose();
        });
    };
  }, [dialogContainerRef]);

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
