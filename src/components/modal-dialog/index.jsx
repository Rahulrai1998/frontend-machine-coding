import React, { useState } from "react";
import Modal from "./components/Modal";

const ModalContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} disabled={open && true}>
        open
      </button>
      <Modal open={open} handleModal={() => setOpen(false)} />
    </>
  );
};

export default ModalContainer;
