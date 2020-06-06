import React, { useState } from "react";

import "./Gamer.css";

const Gamer = (props) => {
	const [click, setClickState] = useState(false);
	const [gamer, setGamer] = useState(false);
	const handleClick = () => {
		setClickState(true);
	};

	const addHandler = (event) => {
		setGamer(event.target.value);
	};

	const addGamerHandler = (event) => {
		event.preventDefault();
		props.onAdd(gamer);
	};
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12 col-md-12 col-lg-12'>
					<form>
						<div className='gamer-div'>
							{!click && (
								<>
									<button className='btn btn-secondary' onClick={handleClick}>
										+
									</button>{" "}
									<span>Тапни для начала</span>
								</>
							)}
							{click && (
								<label>
									<select onChange={addHandler}>
										<option defaultValue=''>Выбери игрока</option>
										<option value='Денис'>Денис</option>
										<option value='Настя'>Настя</option>
										<option value='Евгения Алексеевна'>Евгения Алексеевна</option>
										<option value='Андрей'>Андрей</option>
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
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Gamer;
