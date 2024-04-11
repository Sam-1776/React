import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function SetBoolean() {
    setIsEdit((editing) => !editing);
  }

  function handleChange(ev) {
    setPlayerName(ev.target.value);
  }

  let player = <span className="player-name">{playerName}</span>;
  let btn = "Edit";

  if (isEdit) {
    player = <input type="text" required value={playerName} onChange={handleChange}/>;
    btn = "Save";
  }


  return (
    <li>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={SetBoolean}>{btn}</button>
    </li>
  );
}
