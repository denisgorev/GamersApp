import React, { useState } from "react";

import GamerList from "../components/GamerList";
import Gamer from '../components/Gamer'

const Game = () => {
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
			<Gamer onAdd={addGamer} />
			{gamers.map((gamer, i) => {
				return <GamerList key={i} id={i} gamer={gamer} onDel={delGamer} />;
			})}
		</div>
	);
};

export default Game;
