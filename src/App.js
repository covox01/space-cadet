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
		};
	}

	handleModule1 = checkArray => {
		if (this.state.module1 === false && checkArray === true) {
			this.setState({
				module1: checkArray,
			});
		} else if (this.state.module1 === true && checkArray === false) {
			this.setState({
				module1: checkArray,
			});
		}
	};

	handleModule2 = checkArray => {
		if (this.state.module2 === false && checkArray === true) {
			this.setState({
				module2: checkArray,
			});
		} else if (this.state.module2 === true && checkArray === false) {
			this.setState({
				module2: checkArray,
			});
		}
	};

	handleModule3 = checkSwitch => {
		if (this.state.module3 === false && checkSwitch === true) {
			this.setState({
				module3: checkSwitch,
			});
		} else if (this.state.module3 === true && checkSwitch === false) {
			this.setState({
				module3: checkSwitch,
			});
		}
	};

	handleModule4 = checkArray => {
		if (this.state.module4 === false && checkArray === true) {
			this.setState({
				module4: checkArray,
			});
		} else if (this.state.module4 === true && checkArray === false) {
			this.setState({
				module4: checkArray,
			});
		}
	};

	handleModule5 = checkArray => {
		if (this.state.module5 === false && checkArray === true) {
			this.setState({
				module5: checkArray,
			});
		} else if (this.state.module5 === true && checkArray === false) {
			this.setState({
				module5: checkArray,
			});
		}
	};

	handleModule6 = checkArray => {
		if (this.state.module6 === false && checkArray === true) {
			this.setState({
				module6: checkArray,
			});
		} else if (this.state.module6 === true && checkArray === false) {
			this.setState({
				module6: checkArray,
			});
		}
	};

	render() {
		return (
			<div className="super-container">
				<div className="app-container">
					<Module1
						className="class-module1"
						handleModule1={checkArray => this.handleModule1(checkArray)}
					/>
					<Module2
						className="class-module2"
						handleModule2={checkArray => this.handleModule2(checkArray)}
					/>
					<Module3 
						className="class-module3"
						handleModule3={checkSwitch => this.handleModule3(checkSwitch)}/>
					<Module4 
						className="class-module4"
						handleModule4={checkArray => this.handleModule4(checkArray)}/>
					<Module5
						className="class-module5"
						handleModule5={checkArray => this.handleModule5(checkArray)}
					/>
					<Module6
						className="class-module6"
						handleModule6={checkArray => this.handleModule6(checkArray)}
					/>
					<Module7 
						className="class-module7"
					/>
					<Module8 
						className="class-module8"
					/>
				</div>
			</div>
		);
	}
}

export default App;
