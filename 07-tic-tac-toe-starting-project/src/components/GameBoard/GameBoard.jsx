import { useState } from "react";

const initial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, currentSymbol }) {
  const [game, setGame] = useState(initial);

  function handleSelect(rowIndex, colIndex) {
    setGame((prev) => {
      const updateBoard = [...prev.map((inner) => [...inner])];
      updateBoard[rowIndex][colIndex] = currentSymbol;
      return updateBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {game.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
