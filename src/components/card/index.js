import React from "react";

export default function Card({ id, isShown, flipCard }) {
  if (!isShown)
    return (
      <div
        id={id}
        style={{
          display: "flex",
          gap: "4",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 200,
          padding: 40,
          border: "1px solid black",
        }}
        onClick={() => flipCard(id)}
      >
        -
      </div>
    );
  return (
    <div
      id={id}
      style={{
        display: "flex",
        gap: "4",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 200,
        padding: 40,
        border: "1px solid black",
      }}
      onClick={() => flipCard(id)}
    >
      {id}
    </div>
  );
}
