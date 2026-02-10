import React from "react";

const DialogComponent = ({ onClose, children }) => {
  return (
    <div className="dialogContainer">
      <div className="dialog">
        {children}
        {!!onClose && (
          <button onClick={onClose} className="dialog-close-btn">
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default DialogComponent;
