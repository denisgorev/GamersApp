import React, { useState } from "react";
import './Counter.css'

const Counter = () => {
	const [counter, setCount] = useState(0);

	return (
		<div className='counter'>
			<button className='btn btn-secondary' onClick={() => setCount((prevCount) => prevCount - 1)}>
				-
			</button>
			<h3>{counter}</h3>
			<button className='btn btn-secondary' onClick={() => setCount((prevCount) => prevCount + 1)}>
				+
			</button>
		</div>
	);
};

export default Counter;
