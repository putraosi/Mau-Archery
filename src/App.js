import { clone } from "lodash";
import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./Modal";


const defaultPost = {
  queue: 0,
  name: "",
};

function App() {
  const [isView, setIsView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataPos, setDataPos] = useState([]);
  const [dataQueue, setDataQueue] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const newData = [];
    for (let i = 0; i < 3; i++) {
      newData.push(defaultPost);
    }

    setDataPos(newData);
  }, []);

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

  const onSetPos = (postion) => {
    const cloneDataPos = clone(dataPos);

    if (dataQueue && dataQueue.length && dataQueue[0].queue) {
      cloneDataPos[postion] = dataQueue[0];

      setDataPos(cloneDataPos);
      setDataQueue((prev) => prev.slice(1));
    }
    setIsView((prev) => !prev);
  };

  const onAddPos = (name) => {
    let postion = currentPosition;
    const cloneData = clone(dataQueue);

    postion++;
    cloneData.push({
      queue: postion,
      name,
    });

    setDataQueue(cloneData);
    setCurrentPosition(postion);
  };

  return (
    <div className="container">
      <h1>Daftar Antrian</h1>

      <div className="counter">
        {dataPos.map((item, index) => (
          <div
            key={index}
            className="container_item"
            onClick={() => onSetPos(index)}
          >
            <p>{`Pos ${index + 1}`}</p>
            <div>
              <p>{item?.queue || 0}</p>
              <p className={"name"}>{item?.name || " "}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="wrapper">
          <p className="title">Antrian Berikutnya</p>
          <p className="number">
            {(dataQueue && dataQueue.length && dataQueue[0]?.queue) || "Kosong"}
          </p>
        </div>

        <div className="wrapper">
          <p className="title">Total Antrian</p>
          <p className="number">
            {(dataQueue && dataQueue.length) || "Kosong"}
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(name) => {
          setIsModalOpen(false);
          onAddPos(name);
        }}
      />

      {isView && <div style={{ display: "none" }} />}
    </div>
  );
}

export default App;
