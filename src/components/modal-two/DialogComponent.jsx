import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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

  //close modal on esc click
  function onKeyup(e) {
    if (e.key === "Escape") handleClick();
    if (e.key === "Tab") {
      //activeElement returns the current DOM element which has the focus.
      //this makes sure focus goes to close btn if current focussed element is submit
      if (document.activeElement.classList.contains("submit-btn")) {
        e.preventDefault(); //stops the prevent default of tab, i.e moving to next focussable element
        e.stopPropagation(); //prevents event bubbling
        document.getElementsByClassName("dialog-close-btn")[0].focus();
      }
    }

    // IF SHIFT+TAB: REMAINING
  }

  useEffect(() => {
    const body = document.body; //will give body elements
    const bodyChildren = [...body.children];

    document.addEventListener("keydown", onKeyup);

    //block function to make the body elements inert and un-accessible/non-interactive when modal is open.
    function addInert() {
      //will run a loop on body elements/children
      bodyChildren.forEach((node) => {
        if (!node.getAttribute("is-modal")) {
          node.setAttribute("aria-hidden", true);
          //this will make an element un-focussable and un-interactive in body.
          node.setAttribute("inert", true);
        }
      });
    }

    //function remove inert and other accessibilty related attributes.
    function removeInert() {
      bodyChildren.forEach((node) => {
        if (!node.getAttribute("is-modal")) {
          node.removeAttribute("aria-hidden");
          node.removeAttribute("inert");
        }
      });
    }
    addInert();

    // event listener cleanup on unmounting
    return () => {
      removeInert(); // all the inert attributes will be removed on modal close/unmount
      document.removeEventListener("keydown", onKeyup);
      if (dialogContainerRef.current)
        dialogContainerRef.current.removeEventListener("animationend", () => {
          onClose();
        });
    };
  }, []);

  //we need this createPotal() to bring the modal in direct child to body.
  return createPortal(
    <div
      is-modal="true" //it's a flag to differentiate b/w other body children
      className="dialogContainer"
      ref={dialogContainerRef}
      onClick={handleClickOutside}
    >
      <div className="dialog">
        {!!onClose && (
          <button
            onClick={handleClick}
            className="dialog-close-btn"
            id="submit-btn"
          >
            &times;
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default DialogComponent;

/*
Dialog-Modal Accessibilty guidlines & approaches.
1. It should cover all the screen, nothing should be interactable behind the dialog. No Scroll. No Focus. Using any like 'Tab' in the document body.
    - to achieve this, the dialog component must be at the position of direct child/offspring of body tag in DOM tree.
    without this it is like, body -> root -> app -> index -> dialog
    - we will use createPortal() to liftup our modal to body direct child level. i.e body -> dialog
2. Focus Capturing: Via tab or shift+tab focus should not leave the dialog until the dialog is closed. 
3. When we open modal the first focusable element should be get focused.

*/
