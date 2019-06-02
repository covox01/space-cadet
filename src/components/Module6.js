import React, { Component, Fragment } from "react";
import Module6Switch1 from "./module6-components/Module6Switch1"
import Module6Switch2 from "./module6-components/Module6Switch2"

class Module6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switches: [{ switch1: false }, { switch2: false }, { switch3: false }],
		};
	}

	handleModule6Switch1 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch1 = this.state.switches[0].switch1;
		if (switch1 === false) {
			const updateSwitch = { id: 1, switch1: true };
			updateSwitchArray.splice(0, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch1 === true) {
			const updateSwitch = { switch1: false };
			updateSwitchArray.splice(0, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	handleModule6Switch2 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch2 = this.state.switches[1].switch2;
		if (switch2 === false) {
			const updateSwitch = { id: 2, switch2: true };
			updateSwitchArray.splice(1, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch2 === true) {
			const updateSwitch = { switch2: false };
			updateSwitchArray.splice(1, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	render() {
		return (
			<Fragment>
				<svg
					id="module6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="226.1 -0.5 506.3 559.3"
				>
					<g id="am6-bg">
						<path
							id="am6-bg-face"
							fill="#303030"
							d="M726.9,16.8c0-6.6-5.3-11.9-11.9-11.9H243.5c-6.6,0-11.9,5.3-11.9,11.9v524.5 c0,6.6,5.3,11.9,11.9,11.9H715c6.6,0,11.9-5.3,11.9-11.9V16.8z"
						/>
						<path
							id="am6-bg-outline"
							fill="#666"
							d="M732.4,16.8c0-9.5-7.9-17.4-17.4-17.4H243.5c-9.7,0-17.4,7.9-17.4,17.4v524.5 c0,9.5,7.9,17.4,17.4,17.4H715c9.5,0,17.4-7.9,17.4-17.4V16.8z M726.9,541.4c0,6.6-5.3,11.9-11.9,11.9H243.5 c-6.6,0-11.9-5.3-11.9-11.9V16.8c0-6.6,5.3-11.9,11.9-11.9H715c6.6,0,11.9,5.3,11.9,11.9V541.4z"
						/>
					</g>
					<Module6Switch1
						handleModule6Switch1={() => this.handleModule6Switch1()}
					/>
					<Module6Switch2
						handleModule6Switch2={() => this.handleModule6Switch2()}
					/>
				</svg>
			</Fragment>
		);
	}
}

export default Module6;
