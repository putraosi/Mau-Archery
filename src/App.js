import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./Modal";

const dataDummy = [1, 2, 3];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "n") {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="container">
      <h1>Daftar Antrian</h1>

      <div className="counter">
        {dataDummy.map((item, index) => (
          <div key={index} className="container_item" onClick={()=> alert('Coming Soon')}>
            <p>{`Pos ${index + 1}`}</p>
            <div>
              <p>{"1"}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="wrapper">
          <p className="title">Antrian Berikutnya</p>
          <p className="number">4</p>
        </div>

        <div className="wrapper">
          <p className="title">Total Antrian</p>
          <p className="number">20</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
