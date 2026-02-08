import React, { useEffect, useState, useRef } from "react";
import Modal from "./components/Modal";

const ModalOne = () => {
  const [open, setOpen] = useState(false);
  const modalParentRef = useRef(null);

  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      <div className="modal-wrapper">
        <Modal open={open} handleModal={() => setOpen(false)} />
      </div>
    </>
  );
};

export default ModalOne;
