import React from "react";
import "./GamerList.css";
import Counter from "./Counter";

const GamerList = (props) => {

	const delHandler = () => {
		props.onDel(props.id);
	};
	return (
		<div className='container'>
			<ul className='list-group'>
				<div className='row'>
					<div className='col-sm-12 col-md-12 col-lg-12'>
						<li className='list-group-item list' key={props.i}>
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
