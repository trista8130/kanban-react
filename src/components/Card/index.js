import React from "react";
import FormServices from "../../services/form";

export default function Card({ cards, index, removeFormId, handleMoveCard }) {
  const handleRemoveCard = async (cardIndex) => {
    await FormServices.removeCard({ removeFormId, cardIndex });
    window.location.reload();
  };

  return (
    <div>
      {cards &&
        cards.map((cardValue, i) => (
          <div className="card">
            {index !== 0 && (
              <div className="prve">
                <button
                  onClick={() =>
                    handleMoveCard(index, index - 1, i, cardValue.text)
                  }
                >
                  Prve
                </button>
              </div>
            )}
            <div className="content">{cardValue.text}</div>
            <div className="delete">
              <button onClick={() => handleRemoveCard(i)}>x</button>
            </div>
            {index !== 3 && (
              <div className="next">
                <button
                  onClick={() =>
                    handleMoveCard(index, index + 1, i, cardValue.text)
                  }
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
