import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
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
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => alert("coming soon")}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
