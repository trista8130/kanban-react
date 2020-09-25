import React from "react";
import Card from "../Card";
import FormServices from "../../services/form";

export default function Column({ columns, handleMoveCard }) {
  const handleAddCard = async (index) => {
    const formId = columns[index]._id;
    const text = window.prompt();
    if (text) {
      await FormServices.createCard({ formId, text });
      window.location.reload();
    }
  };

  return (
    <div className="container">
      {columns &&
        columns.map((colValue, index) => (
          <div className="column">
            <div className="header" style={{ backgroundColor: colValue.color }}>
              {colValue.title}
            </div>
            <div className="list">
              <Card
                cards={colValue.cards}
                index={index}
                handleMoveCard={handleMoveCard}
                removeFormId={colValue._id}
              />
            </div>
            <div className="footer">
              <button onClick={() => handleAddCard(index)}>+ Add a card</button>
            </div>
          </div>
        ))}
    </div>
  );
}
