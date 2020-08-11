import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import NavigationBar from './components/Navigation';
import Projects from './views/Projects';
import Contact from './views/Contact';


const App: React.FC<IApp> = () => {
	return (
		<BrowserRouter>
			<NavigationBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export interface IApp {

}

export default App;
