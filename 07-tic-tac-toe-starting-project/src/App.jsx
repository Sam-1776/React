import { useState } from "react";

import Player from "./components/players/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveBoard(turns) {
  let game = [...initial.map((array) => [...array])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    game[row][col] = player;
  }

  return game;
}

function deriveWinner(game, player) {
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
      winner = player[firstSquareSymbol];
    }
  }

  return winner;
}

const initial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [player, setPlayer] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [turns, setTurns] = useState([]);


  const currentPlayer = deriveActivePlayer(turns);
  const game = deriveBoard(turns);

  const winner = deriveWinner(game, player);
  const hasDraw = turns.length === 9 && !winner;

  function handleSelectSquare(row, col) {
    setTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const upTurns = [
        { square: { row: row, col: col }, player: currentPlayer },
        ...prevTurns,
      ];

      return upTurns;
    });
  }

  function handleNamePlayer(symbol, newName) {
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }

  function restartGame() {
    setTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
            onChangeName={handleNamePlayer}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName={handleNamePlayer}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={restartGame} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={game} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
