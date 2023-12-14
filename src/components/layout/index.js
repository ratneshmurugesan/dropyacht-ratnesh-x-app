import React, { useRef, useState } from "react";
import Card from "../card";

const initialCards = [
  {
    id: "1",
    isShown: false,
    value: "a",
    order: 0,
  },
  {
    id: "2",
    isShown: false,
    value: "b",
    order: 0,
  },
  {
    id: "3",
    isShown: false,
    value: "c",
    order: 0,
  },
  {
    id: "4",
    isShown: false,
    value: "c",
    order: 0,
  },
  {
    id: "5",
    isShown: false,
    value: "d",
    order: 0,
  },
  {
    id: "6",
    isShown: false,
    value: "e",
    order: 0,
  },
  {
    id: "7",
    isShown: false,
    value: "f",
    order: 0,
  },
  {
    id: "8",
    isShown: false,
    value: "g",
    order: 0,
  },
  {
    id: "3",
    isShown: false,
    value: "h",
    order: 0,
  },
  {
    id: "10",
    isShown: false,
    value: "i",
    order: 0,
  },
  {
    id: "11",
    isShown: false,
    value: "j",
    order: 0,
  },
  {
    id: "12",
    isShown: false,
    value: "k",
    order: 0,
  },
  {
    id: "13",
    isShown: false,
    value: "l",
    order: 0,
  },
  {
    id: "14",
    isShown: false,
    value: "m",
    order: 0,
  },
  {
    id: "15",
    isShown: false,
    value: "n",
    order: 0,
  },
  {
    id: "16",
    isShown: false,
    value: "o",
    order: 0,
  },
];

export default function Layout() {
  const [cards, setCards] = useState(initialCards);

  //   const resetTimeoutRef = useRef(null);

  const flipCard = (id) => {
    const flippedCards = cards.map((card) => {
      console.log({ card });
      if (card.id === id && !card.isShown) {
        return {
          ...card,
          isShown: true,
          order: 1,
        };
      } else if (card.id === id && card.isShown) {
        return {
          ...card,
          isShown: false,
          order: 0,
        };
      }
      return card;
    });
    const matchedCards = flippedCards.filter((card) => card.isShown);
    const areCardsMatched = matchedCards.every(
      (card) => matchedCards[0].value === card.value
    );

    console.log({ matchedCards, areCardsMatched });
    setCards(flippedCards);
  };

  console.log({ cards });

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: 800,
      }}
    >
      {cards.map((item, index) => {
        // console.log({ item });
        const cardProps = {
          ...item,
          flipCard,
        };
        return (
          <Card key={index} {...cardProps}>
            {item.id}
          </Card>
        );
      })}
    </div>
  );
}
