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
import RepoByTag from './views/RepoByTag';
import { FaSun, FaMoon } from 'react-icons/fa';
import Resume from './views/Resume';

const App: React.FC<IApp> = () => {


	const [checked, setChecked] = React.useState<boolean>(false)


	//Sets the theme of the site on toggle
	const handleTheme = async (checked: any) => {
		setChecked(checked)
	}

	return (
		<ThemeProvider theme={!checked ? lightTheme : darkTheme} >
			<BrowserRouter>
				<div className="row justify-content-center py-3 no-gutters">
					<SwitchButton
						offColor="#98b1c4"
						onColor="#adb6c0"
						uncheckedIcon={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "100%",
									fontSize: 15,
									color: "#FFFFFF",
									paddingRight: 2,
								}}
							>
								<FaSun />
							</div>
						}
						checkedIcon={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "100%",
									fontSize: 15,
									color: "#FFFFFF",
									paddingRight: 2
								}}
							>
								<FaMoon />
							</div>

						}
						className="react-switch"
						id="icon-switch"
						onChange={handleTheme}
						checked={checked} />
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
					<Route exact path="/resume">
						<Resume />
					</Route>
					<Route exact path="/:tag">
						<RepoByTag />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

var style2 = [
    'background: linear-gradient(#2f3640, #571402)',
    'border: 1px solid #3E0E02',
    'color: white',
    'padding: 1px 5px',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
	'font-weight: bold',
	'font-size: large'
].join(';');
console.log('%cWELCOME TO MY WEBSITE...ENJOY!', style2);

export interface IApp {

}

export default App;
