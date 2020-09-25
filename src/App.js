import React, { useState, useEffect } from "react";
import "./App.css";
import FormServices from "./services/form";
import Column from "./components/Column";

function App() {
  const [columns, setColumns] = useState("");

  useEffect(() => {
    const getColumnsData = async () => {
      const data = await FormServices.fetchAll();
      setColumns([...data.data.data]);
    };
    getColumnsData();
  }, []);

  const handleMoveCard = async (index, moveIndex, cardIndex, text) => {
    const formId = columns[moveIndex]._id;
    const removeFormId = columns[index]._id;
    await FormServices.createCard({ formId, text });
    await FormServices.removeCard({
      removeFormId,
      cardIndex,
    });
    const data = await FormServices.fetchAll();
    setColumns([...data.data.data]);
  };

  return (
    <div className="App">
      <Column columns={columns} handleMoveCard={handleMoveCard} />
    </div>
  );
}

export default App;
