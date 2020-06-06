import React from "react";
import "./App.css";
import Game from "./pages/Game";
import MainNavigation from './shared/components/navigation/MainNavigation'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
            <MainNavigation />
            <main>
			<Switch>
				<Route path='/game' exact={true}>
					<Game />
				</Route>

				<Route path='/' exact={true}>
					<h1>game page</h1>
				</Route>
				<Redirect to='/game' />
			</Switch>
            </main>
		</Router>
	);
}

export default App;
