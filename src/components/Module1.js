import React, { Component, Fragment } from "react";
import Module1Switch1 from "./module1-components/Module1Switch1";
import Module1Switch2 from "./module1-components/Module1Switch2";
import Module1Switch3 from "./module1-components/Module1Switch3";
import { Back, Elastic, TimelineLite } from "gsap";
import { timingSafeEqual } from "crypto";

class Module1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switches: [
				{
					switch1: false,
				},
				{
					switch2: false,
				},
				{
					switch3: false,
				},
			],
		};
	}

	handleModule1Switch1 = () => {
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

	handleModule1Switch2 = () => {
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

	handleModule1Switch3 = () => {
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
				opacity: 0.8,
            attr: { stdDeviation: 15 },
            ease: Back.easeOut
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
		this.props.handleModule1(checkArray);
		if (checkArray === true) {
			this.moduleBorderOn();
		} else {
			this.moduleBorderOff();
		}
	}

	render() {
		return (
			<svg
				id="module1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="89.6 0 780.8 560"
			>
				<g id="am1-bg">
					<path
						fill="#303030"
						d="M374.6,5.6H101.8c-3.6,0-6.6,3-6.6,6.6v535.7c0,3.6,3,6.6,6.6,6.6h272.9h2.8V5.6H374.6z"
					/>
					<path
						fill="#3F4040"
						d="M858.2,5.6H375.6h-0.7v548.8h0.7h482.8c3.6,0,6.6-3,6.6-6.6V12.2C864.8,8.6,862,5.6,858.2,5.6z"
					/>
					<path
						ref={path => (this.border = path)}
						id="am1-bg-outline"
						filter="url(#border1)"
						fill="gray"
						d="M858.2,0H101.8C95,0,89.6,5.4,89.6,12.2v535.7c0,6.7,5.4,12.2,12.2,12.2h272.9h0.7 h482.8c6.7,0,12.2-5.4,12.2-12.2V12.2C870.4,   5.4,865,0,858.2,0z M864.8,547.8c0,3.6-3,6.6-6.6,6.6H101.8c-3.6,0-6.6-3-6.6-6.6V12.2 c0-3.6,3-6.6,6.6-6.6h756.5c3.6,0,6.6,3,6.6,6.6V547.8z"
					/>
					<defs>
						<filter id="border1" x="-.5" y="-.5" width="200%" height="200%">
							<feOffset in="SourceGraphic" dx="0" dy="0" />
							<feGaussianBlur
								ref={filter => (this.filter = filter)}
								result="blurOut"
								in="offOut"
								stdDeviation="0"
							/>
							<feBlend
								in="SourceGraphic"
								in2="blurOut"
								mode="normal"
								opacity="0"
							/>
						</filter>
					</defs>
				</g>
				<Module1Switch1
					handleModule1Switch1={() => this.handleModule1Switch1()}
					handleTestSwitch={this.handleTestSwitch}
					checkModuleComplete={this.checkModuleComplete}
				/>
				<Module1Switch2
					handleModule1Switch2={() => this.handleModule1Switch2()}
					checkModuleComplete={this.checkModuleComplete}
				/>
				<Module1Switch3
					handleModule1Switch3={() => this.handleModule1Switch3()}
					checkModuleComplete={this.checkModuleComplete}
				/>
			</svg>
		);
	}
}

export default Module1;
