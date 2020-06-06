import React from "react";
import "./GamerList.css";
import Counter from "./Counter";

const GamerList = (props) => {
	console.log(props.gamer);
	const delHandler = () => {
		props.onDel(props.id);
	};
	return (
		<div class='container'>
			<ul className='list-group'>
				<div class='row'>
					<div class='col-sm-12 col-md-12 col-lg-12'>
						<li className='list-group-item' key={props.i}>
							<h2>{props.gamer}</h2>
							<Counter />
							<button className='btn btn-secondary del' onClick={delHandler}>
								Удалить
							</button>
						</li>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default GamerList;
