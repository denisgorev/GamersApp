import React, { useState } from "react";

import GamerList from "../components/GamerList";
import Gamer from "../components/Gamer";

const Game = (props) => {

    console.log(props.gameType)
	const gamerList = [
		{ value: "Денис", displayedValue: "Денис" },
		{ value: "Настя", displayedValue: "Настя" },
		{ value: "Евгения Алексеевна", displayedValue: "Евгения Алексеевна" },
		{ value: "Андрей", displayedValue: "Андрей" },
    ];
    
    const def = { value: "", displayedValue: "Выбери игрока" };


    const [gamers, setGamer] = useState([]);
    


	const delGamer = (id) => {
		setGamer((prevValue) => {
			return prevValue.filter((value, index) => {
				return index !== id;
			});
		});
	};
	const addGamer = (newGamer) => {
		setGamer((prevValue) => {
			return [...prevValue, newGamer];
		});
	};
	return (
		<div>
            
            <h1>Выбрана игра: {props.gameType}</h1>
			<Gamer onAdd={addGamer} gamerList={gamerList} defaultItem={def} />
			{gamers.map((gamer, i) => {
				return <GamerList key={i} id={i} gamer={gamer} onDel={delGamer} />;
			})}
		</div>
	);
};

export default Game;
