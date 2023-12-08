import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={() => onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Tambah Antrian</p>

        <span>Nama:</span>
        <input
          type={"text"}
          value={name}
          placeholder="Masukan nama..."
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={() => {
            onSubmit(name);
            setName("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
