import Player from "./components/players/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";
import Log from "./components/Log/Log";

function App() {
  const [] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((current) => current === "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} currentSymbol={activePlayer}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
