import { useState } from "react";



export default function GameBoard({ onSelectSquare, board }) {
 /*  const [game, setGame] = useState(initial);

  function handleSelect(rowIndex, colIndex) {
    setGame((prev) => {
      const updateBoard = [...prev.map((inner) => [...inner])];
      updateBoard[rowIndex][colIndex] = currentSymbol;
      return updateBoard;
    });

    onSelectSquare();
  } */

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
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
