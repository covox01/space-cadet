import React, { Component } from "react";
import Module2Switch1 from "./module2-Components/Module2Switch1";
import Module2Switch2 from "./module2-Components/Module2Switch2";
import { Back, Elastic, TimelineLite } from "gsap";

class Module2 extends Component {
	constructor() {
		super();
		this.state = {
			switches: [{ switch1: false }, { switch2: false }],
		};
	}

	handleModule2Switch1 = () => {
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

	handleModule2Switch2 = () => {
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
		this.props.handleModule2(checkArray);
		if (checkArray === true) {
			this.moduleBorderOn();
		} else {
			this.moduleBorderOff();
		}
	}

	render() {
		return (
			<svg
				id="module2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="89.6 0 780.8 560"
			>
				<g id="am2-bg">
					<path
						id="am2-bg-face-2"
						fill="#303030"
						d="M95.2,282.8v265c0,3.6,3,6.6,6.6,6.6h756.5c3.6,0,6.6-3,6.6-6.6v-265H95.2z"
					/>
					<path
						id="am2-bg-face-1"
						fill="#3F4040"
						d="M864.8,12.2c0-3.6-3-6.6-6.6-6.6H101.8c-3.6,0-6.6,3-6.6,6.6v271.6h769.6V12.2z"
					/>
					<path
                  ref={path => (this.border = path)}
						id="am2-bg-outline"
						fill="gray"
						d="M858.2,0H101.8C95,0,89.6,5.4,89.6,12.2v535.7c0,6.7,5.4,12.2,12.2,12.2h756.5 c6.7,0,12.2-5.4,12.2-12.2V12.2C870.4,5.4,865,0,858.2,0z M864.8,547.8c0,3.6-3,6.6-6.6,6.6H101.8c-3.6,0-6.6-3-6.6-6.6V283.7V12.2 c0-3.6,3-6.6,6.6-6.6h756.5c3.6,0,6.6,3,6.6,6.6v271.6l0,0V547.8z"
					/>
				</g>
            <Module2Switch1 
               handleModule2Switch1={this.handleModule2Switch1}
            />
				<Module2Switch2 handleModule2Switch2={this.handleModule2Switch2} />
			</svg>
		);
	}
}

export default Module2;
