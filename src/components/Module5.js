import React, { Component } from "react";
import Module5Switch1 from "./module5-components/Module5Switch1";
import Module5Switch2 from "./module5-components/Module5Switch2";
import Module5Switch3 from "./module5-components/Module5Switch3";
import Module5Switch4 from "./module5-components/Module5Switch4";
import { Back, Elastic, TimelineLite } from "gsap";

class Module5 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switches: [
				{ switch1: false },
				{ switch2: false },
				{ switch3: false },
				{ switch4: false },
			],
		};
	}

	handleModule5Switch1 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch1 = this.state.switches[0].switch1;
		if (!switch1) {
			const updateSwitch = { id: 1, switch1: true };
			updateSwitchArray.splice(0, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch1) {
			const updateSwitch = { switch1: false };
			updateSwitchArray.splice(0, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	handleModule5Switch2 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch2 = this.state.switches[1].switch2;
		if (!switch2) {
			const updateSwitch = { id: 2, switch2: true };
			updateSwitchArray.splice(1, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch2) {
			const updateSwitch = { switch2: false };
			updateSwitchArray.splice(1, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	handleModule5Switch3 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch3 = this.state.switches[2].switch3;
		if (!switch3) {
			const updateSwitch = { id: 3, switch3: true };
			updateSwitchArray.splice(2, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch3) {
			const updateSwitch = { switch3: false };
			updateSwitchArray.splice(2, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	handleModule5Switch4 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch4 = this.state.switches[3].switch4;
		if (!switch4) {
			const updateSwitch = { id: 4, switch4: true };
			updateSwitchArray.splice(3, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch4) {
			const updateSwitch = { switch4: false };
			updateSwitchArray.splice(3, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		}
	};

	moduleBorderOn = () => {
		const borderTween = new TimelineLite();
		borderTween
			.to([this.border, this.filter], 0.2, {
				fill: "#0bf7a2",
				opacity: 0.8,
				attr: { stdDeviation: 15 },
				ease: Back.easeOut,
			})
			.delay(0.1);
	};

	moduleBorderOff = () => {
		const borderTween = new TimelineLite();
		borderTween.to([this.border, this.filter], 0.2, {
			fill: "#808080",
			opacity: 1,
			attr: { stdDeviation: 0 },
			ease: Back.easeOut,
		});
	};

	componentDidUpdate() {
		const updateSwitchArray = [...this.state.switches];
		let checkArray = updateSwitchArray
			.reduce((arr, obj) => [...arr, ...Object.values(obj)], [])
			.every(x => x);
		this.props.handleModule5(checkArray);
		if (checkArray === true) {
			this.moduleBorderOn();
		} else {
			this.moduleBorderOff();
		}
	}

	render() {
		return (
			<svg
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 860 299"
			>
				<g id="am5-bg">
					<path
						fill="#303030"
						d="M6.8,3C4.9,3,3,4.2,3,6.1v286c0,1.9,1.9,3.9,3.8,3.9h283.1L289,3H6.8z"
					/>
					<path
						fill="#3F4040"
						d="M845,296c6.8,0,12-5.9,12-12.6V14.9C857,8.1,851.7,3,845,3H288l0,293.3L845,296z"
					/>
					<path
                  ref={path => (this.border = path)}
						id="am5-bg-outline"
						fill="gray"
						d="M845,0H286H6.8C3.2,0,0,2.5,0,6.1v286c0,3.6,3.2,6.9,6.8,6.9H288h557 c8.4,0,15-7.2,15-15.6V14.9C860,6.5,853.4,0,845,0z M857,283.4c0,6.8-5.3,12.6-12,12.6H6.8c-1.9,0-3.8-1.9-3.8-3.9V6.1 C3,4.2,4.9,3,6.8,3H845c6.8,0,12,5.1,12,11.9V283.4z"
					/>
				</g>

				<Module5Switch1 handleModule5Switch1={this.handleModule5Switch1} />
				<Module5Switch2 handleModule5Switch2={this.handleModule5Switch2} />
				<Module5Switch3 handleModule5Switch3={this.handleModule5Switch3} />
				<Module5Switch4 handleModule5Switch4={this.handleModule5Switch4} />
			</svg>
		);
	}
}

export default Module5;
