import React, { forwardRef, useEffect, useRef } from "react";

const Modal = ({ open, handleModal }) => {
  //   if (parentRef?.current) console.log(parentRef.current.target);
  const parentRef = useRef(null);
  console.log(open);

  useEffect(() => {
    const cb = (e) => {
      console.log(e.target, open);
      if (parentRef.current && !parentRef?.current.contains(e.target)) {
        handleModal();
      }
    };
    //"mousedown" event trigger before "click" evnent
    //hence, the modal is opening on button click.
    document.addEventListener("mousedown", cb);

    return () => {
      document.removeEventListener("mousedown", cb);
    };
  }, [handleModal, parentRef]);

  if (!open) return null;
  return (
    <div className="modal-container" ref={parentRef}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={handleModal}>Close</button>
    </div>
  );
};

export default Modal;
