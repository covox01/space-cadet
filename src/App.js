import React, { Component } from "react";
import Module1 from "./components/Module1";
import Module2 from "./components/Module2";
import Module3 from "./components/Module3";
import Module4 from "./components/Module4";
import Module5 from "./components/Module5";
import Module6 from "./components/Module6";
import Module7 from "./components/Module7";
import Module8 from "./components/Module8";
import "./App.css";
import "./styles/styles.scss";

class App extends Component {
	constructor() {
		super();
		this.state = {
			module1: false,
			module2: false,
			module3: false,
			module4: false,
			module5: false,
			module6: false,
			module7: false,
			module1Hover: false,
			module1SwitchHover: false,
		};
	}





	handleModule1Switch1HoverOff;

	render() {
		return (
			<div className="super-container">
				<div className="app-container">
					<Module1 />
					<Module2 />
					<Module3 />
					<Module4 />
					<Module5 />
					<Module6 />
					<Module7 />
					<Module8 />
				</div>
			</div>
		);
	}
}

export default App;
