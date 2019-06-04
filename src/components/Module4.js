import React, { Component } from "react";
import Module4Switch1 from "../components/module4-components/Module4Switch1.js";
import Module4Switch2 from "../components/module4-components/Module4Switch2.js";
import Module4Switch3 from "../components/module4-components/Module4Switch3.js";
import Module4Monitor from "../components/module4-components/Module4Monitor.js";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap"

class Module4 extends Component {
	constructor(){
		super()
		this.state = [
			{switch1: false},
			{switch2: false},
			{switch3: false}
		]
	}

	handleModule4Switch1 = () => {
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

	handleModule4Switch2 = () => {
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

	handleModule4Switch3 = () => {
		const updateSwitchArray = [...this.state.switches];
		const switch3 = this.state.switches[2].switch3;
		if (switch3 === false) {
			const updateSwitch = { id: 3, switch3: true };
			updateSwitchArray.splice(2, 1, updateSwitch);
			this.setState({
				switches: updateSwitchArray,
			});
		} else if (switch3 === true) {
			const updateSwitch = { switch3: false };
			updateSwitchArray.splice(2, 1, updateSwitch);
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
            attr: { stdDeviation: 15 },
            ease: Back.easeOut,
			})
			.delay(0.1);
	};

	moduleBorderOff = () => {
		const borderTween = new TimelineLite();
		borderTween
			.to([this.border, this.filter], 0.2, {
				fill: "#808080",
				opacity: 1,
            attr: { stdDeviation: 0 },
            ease: Back.easeOut
			})
	};

	componentDidUpdate() {
		const updateSwitchArray = [...this.state.switches];
		let checkArray = updateSwitchArray
			.reduce((arr, obj) => [...arr, ...Object.values(obj)], [])
			.every(x => x);
		this.props.handleModule4(checkArray);
		if (checkArray === true) {
			this.moduleBorderOn();
		} else {
			this.moduleBorderOff();
		}
	}

	render() {
		return (
			<svg
				id="module4"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="294.2 0.3 372.1 560.4"
			>
				<g id="am4-bg_1_">
					<path
						fill="#3F4040"
						d="M663.7,6.1c0-1.7-1.4-3.1-3.1-3.1H300c-1.7,0-3.1,1.4-3.1,3.1v548.8c0,1.7,1.4,3.1,3.1,3.1h360.5 c1.7,0,3.1-1.4,3.1-3.1V6.1z"
					/>
					<path
						fill="gray"
						d="M666.4,6.1c0-3.2-2.6-5.8-5.8-5.8H300c-3.2,0-5.8,2.6-5.8,5.8v548.8c0,3.2,2.6,5.8,5.8,5.8h360.5 c3.2,0,5.8-2.6,5.8-5.8V6.1z M663.7,554.9c0,1.7-1.4,3.1-3.1,3.1H300c-1.7,0-3.1-1.4-3.1-3.1V6.1c0-1.7,1.4-3.1,3.1-3.1h360.5 c1.7,0,3.1,1.4,3.1,3.1V554.9z"
					/>
				</g>
				
				<polyline
					id="am4-graph-2"
					fill="none"
					stroke="gray"
					strokeWidth="3"
					strokeMiterlimit="10"
					points="323.7,139 401.3,139 547.7,139 631.6,139"
				/>
				<polyline
					id="am4-graph-1"
					fill="none"
					stroke="gray"
					strokeWidth="3"
					strokeMiterlimit="10"
					points="323.7,149.7 401.3,149.7 547.7,149.7 631.6,149.7"
				/>

				<Module4Monitor />
				<Module4Switch1 
					handleModule4Switch1={() => this.handleModule4Switch1()}/>
				<Module4Switch2 
					handleModule4Switch2={() => this.handleModule4Switc2()}/>
				<Module4Switch3 />
			</svg>
		);
	}
}
export default Module4;
