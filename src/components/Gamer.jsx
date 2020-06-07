import React, { useState } from "react";

import "./Gamer.css";

const Gamer = (props) => {
	console.log(props.defaultItem);

	const [gamer, setGamer] = useState(false);

	const addHandler = (event) => {
		setGamer(event.target.value);
	};

	const addGamerHandler = (event) => {
		event.preventDefault();
		props.onAdd(gamer);
	};
	console.log(props.gameDefault);
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12 col-md-12 col-lg-12'>
					<form>
						<div className='gamer-div'>
							<label>
								<select onChange={addHandler}>
									<option defaultValue={props.defaultItem.value}>
										{props.defaultItem.displayedValue}
									</option>
									{props.gamerList.map((gamer, index) => {
										return <option value={gamer.value}>{gamer.displayedValue}</option>;
									})}
								</select>
								<button
									className='btn btn-secondary'
									type='submit'
									value='Отправить'
									onClick={addGamerHandler}
								>
									Выбрать
								</button>
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Gamer;
