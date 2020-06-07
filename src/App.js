import React from "react";
import "./App.css";

import GameChoice from './pages/GameChoise'
import MainNavigation from './shared/components/navigation/MainNavigation'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
            <MainNavigation />
            <main>
			<Switch>
				<Route path='/stat' exact={true}>
					<h1>Здесь будет статистика</h1>
				</Route>

				<Route path='/' exact={true}>
					<GameChoice />
				</Route>
				<Redirect to='/' />
			</Switch>
            </main>
		</Router>
	);
}

export default App;
