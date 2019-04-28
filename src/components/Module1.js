import React, { Component, Fragment } from "react";
import Module1Switch1 from "./module1-components/Module1Switch1";
import Module1Switch2 from "./module1-components/Module1Switch2";
import Module1Switch3 from "./module1-components/Module1Switch3";
import Module1Light1 from "./module1-components/Module1Light1";
import Module1Light2 from "./module1-components/Module1Light2";
import Module1Light3 from "./module1-components/Module1Light3";
import TweenMax from "gsap";
import Module2 from "./Module2";

class Module1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switch1CompletedSequences: 0,
			switch2CompletedSequences: 0,
			switch3CompletedSequences: 0,
			switches: [
				{
               switch1: false,
				},
				{ 
               switch2: false 
            },
				{ 
               switch3: false 
            },
			],
			moduleComplete: false,
		};
   }
   
	handleModule1Switch1 = event => {
      event.preventDefault();
      const updateSwitchArray = [...this.state.switches];
		let completedSequenceSwitch1 = this.state.switch1CompletedSequences;
		if (completedSequenceSwitch1 === 1) {
         const updateSwitch = { switch1: true };
         updateSwitchArray.splice(0, 1, updateSwitch)
			this.setState({
				switch1CompletedSequences: 2,
				switches: updateSwitchArray
			});
		} else if (completedSequenceSwitch1 < 2) {
			for (let i = 0; completedSequenceSwitch1 < 3; i++) {
				completedSequenceSwitch1 += 1;
				break;
			}
			this.setState({
				switch1CompletedSequences: completedSequenceSwitch1,
			});
		} else {
         const updateSwitch = { switch1: false };
         updateSwitchArray.splice(0, 1, updateSwitch)
			this.setState({
				switch1CompletedSequences: 1,
				switches: updateSwitchArray
			});  
		}
   };
   

	handleModule1Switch2 = event => {
      event.preventDefault();
      const updateSwitchArray = [...this.state.switches]
		let completedSequenceSwitch2 = this.state.switch2CompletedSequences;
		if (completedSequenceSwitch2 === 1) {
         const updateSwitch = {switch2: true}
         updateSwitchArray.splice(1, 1, updateSwitch)
			this.setState({
				switch2CompletedSequences: 2,
				switches: updateSwitchArray
			});
		} else if (completedSequenceSwitch2 < 2) {
			for (let i = 0; completedSequenceSwitch2 < 3; i++) {
				completedSequenceSwitch2 += 1;
				console.log(completedSequenceSwitch2);
				break;
			}
			this.setState({
				switch2CompletedSequences: completedSequenceSwitch2,
			});
		} else {
         const updateSwitch = { switch2: false };
         updateSwitchArray.splice(1, 1, updateSwitch)
			this.setState({
				switch2CompletedSequences: 1,
            switches: updateSwitchArray
         })
		}
	};

	handleModule1Switch3 = event => {
      event.preventDefault();
      const updateSwitchArray = [...this.state.switches];
		let completedSequenceSwitch3 = this.state.switch3CompletedSequences;
		if (completedSequenceSwitch3 === 1) {
         const updateSwitch = {switch3: true}
         updateSwitchArray.splice(2, 1, updateSwitch)
			this.setState({
				switch3CompletedSequences: 2,
				switches: updateSwitchArray
			});
			this.checkModuleComplete();
		} else if (completedSequenceSwitch3 < 2) {
			for (let i = 0; completedSequenceSwitch3 < 3; i++) {
				completedSequenceSwitch3 += 1;
				console.log(completedSequenceSwitch3);
				break;
			}
			this.setState({
				switch3CompletedSequences: completedSequenceSwitch3,
			});
		} else {
         const updateSwitch = {switch3: false}
         updateSwitchArray.splice(2, 1, updateSwitch)
			this.setState({
            switch3CompletedSequences: 1,
            switches: updateSwitchArray
			});
		}
	};

	checkModuleComplete = () => {
		let switch1 = this.state.completedSwitch1;
		let switch2 = this.state.completedSwitch2;
		let switch3 = this.state.completedSwitch3;
		console.log("check module");
		if (switch1 === true && switch2 === true && switch3 === true) {
			this.setState({
				moduleComplete: true,
			});
			console.log("yesss");
		}
	};

	render() {
		return (
			// <Fragment>
			<svg
				id="module1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="89.6 0 780.8 560"
				// onMouseOver={this.props.module1Hover}
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
						id="am1-bg-outline"
						fill="gray"
						d="M858.2,0H101.8C95,0,89.6,5.4,89.6,12.2v535.7c0,6.7,5.4,12.2,12.2,12.2h272.9h0.7 h482.8c6.7,0,12.2-5.4,12.2-12.2V12.2C870.4,   5.4,865,0,858.2,0z M864.8,547.8c0,3.6-3,6.6-6.6,6.6H101.8c-3.6,0-6.6-3-6.6-6.6V12.2 c0-3.6,3-6.6,6.6-6.6h756.5c3.6,0,6.6,3,6.6,6.6V547.8z"
					/>
				</g>
				<Module1Switch1
					handleModule1Switch1={this.handleModule1Switch1}
					checkModuleComplete={this.checkModuleComplete}
				/>
				<Module1Switch2
					handleModule1Switch2={this.handleModule1Switch2}
					checkModuleComplete={this.checkModuleComplete}
				/>
				<Module1Switch3
					handleModule1Switch3={this.handleModule1Switch3}
					checkModuleComplete={this.checkModuleComplete}
				/>
				<Module1Light1 handleModule1Light1={this.handleModule1Light1} />
				<Module1Light2 handleModule1Light2={this.handleModule1Light2} />
				<Module1Light3 handleModule1Light3={this.handleModule1Light3} />
			</svg>
			// <Module2 />
			// </Fragment>
		);
	}
}

export default Module1;
