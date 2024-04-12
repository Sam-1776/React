import Player from "./components/players/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

const initial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [turns, setTurns] = useState([]);
  /* const [activePlayer, setActivePlayer] = useState("X"); */

  const currentPlayer = deriveActivePlayer(turns);

  let game = initial;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    game[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = game[combination[0].row][combination[0].column];
    const secondSquareSymbol = game[combination[1].row][combination[1].column];
    const thirdSquareSymbol = game[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(row, col) {
    /*     setActivePlayer((current) => current === "X" ? "O" : "X")
     */
    setTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const upTurns = [
        { square: { row: row, col: col }, player: currentPlayer },
        ...prevTurns,
      ];

      return upTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={game} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
