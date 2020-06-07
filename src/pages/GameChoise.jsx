import React, { useState } from "react";
import Gamer from "../components/Gamer";
import Game from '../pages/Game'

const GameChoice = () => {
    const [gamers, setGamer] = useState([]);
    const [gameState, setGameState] = useState(0)

	const addGamer = (newGamer) => {
        setGamer(newGamer);
        setGameState(1);
        
    };
    
    console.log(gamers)

	const gamerList = [
		{ value: "Дурак", displayedValue: "Дурак" },
		{ value: "Катан", displayedValue: "Катан" },
	];
	const def = { value: "", displayedValue: "Во что играем?" };
	return gameState===0?(<Gamer onAdd={addGamer} gamerList={gamerList} defaultItem={def} />):<Game gameType={gamers}/>;
};

export default GameChoice;
