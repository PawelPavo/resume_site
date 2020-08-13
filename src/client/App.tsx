import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { lightTheme, darkTheme } from './utils/theme';
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import SwitchButton from "react-switch";
import NavigationBar from './components/Navigation';
import Bio from './views/Bio';


const App: React.FC<IApp> = () => {

	const [checked, setChecked] = React.useState<boolean>(false)

	const handleTheme = async (checked: any) => {
		setChecked(checked)
	}
	
	return (
		<ThemeProvider theme={!checked ? lightTheme : darkTheme}>
			<BrowserRouter>
				<div className="row justify-content-center py-3">
					<SwitchButton onChange={handleTheme} checked={checked} />
				</div>
				<NavigationBar />
					<Switch>
						<Route exact path="/">
							<Home theme={checked} />
						</Route>
						<Route exact path="/about">
							<Bio />
						</Route>
						<Route exact path="/projects">
							<Projects />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export interface IApp { }

export default App;
