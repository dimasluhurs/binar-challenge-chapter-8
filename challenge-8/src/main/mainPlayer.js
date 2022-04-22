import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [players, setPlayers] = useState([
    { id: uuidv4(), username: "Pathfinder", email: "pathfinder@gmail.com", win: "10", lose: "3" },
    { id: uuidv4(), username: "Kingslayer", email: "kings@gmail.com", win: "17", lose: "5" },
    { id: uuidv4(), username: "MadMaggie", email: "mad23@mail.com", win: "19", lose: "4" },
    { id: uuidv4(), username: "MrBrightside", email: "mr.brightside@mail.com", win: "7", lose: "1" },
    { id: uuidv4(), username: "Tomb", email: "tomb@mail.com", win: "3", lose: "4" },
  ]);

  const addPlayer = (username, email, win, lose) => {
    setPlayers([...players, { id: uuidv4(), username, email, win, lose }]);
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  const updatePlayer = (id, updatedPlayer) => {
    setPlayers(players.map((player) => (player.id === id ? updatedPlayer : player)));
  };

  return <PlayerContext.Provider value={{ players, addPlayer, deletePlayer, updatePlayer }}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;
