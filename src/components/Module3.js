import React, { Component } from "react";
import Module3Switch1 from "./module3-components/Module3Switch1"
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax, Power3 } from "gsap"

class Module3 extends Component {
	constructor(props){
		super(props)
		this.state = {
			switch: false
		}
	}

	handleModule3Switch1 = () => {
      const updateSwitch = this.state.switch;
      const switch1 = updateSwitch;
      if (!switch1) {
         this.setState({
            switch: true
         })
      } 
	}

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
      // const updateSwitch = [...this.state.switch]
      let checkSwitch = this.state.switch
		this.props.handleModule3(checkSwitch)
		// if (this.state.switch === true) {
		// 	this.moduleBorderOn();
		// } else {
		// 	this.moduleBorderOn();
		// }
	}
	render() {
		return (
			<svg
				id="module3"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="86.6 0 786.8 560"
			>
				<g id="am3-bg">
					<path
						fill="#3F4040"
						d="M861.3,5.6H289.1l0.4,548.8h571.8c3.5,0,6.5-3,6.5-6.5V12.1C867.8,8.6,864.8,5.6,861.3,5.6z"
					/>
					<path
						fill="gray"
						d="M861.3,0H285.4H98.7C92,0,86.6,5.4,86.6,12.1v535.7c0,6.7,5.4,12.1,12.1,12.1h191.3h1.3h569.9 c6.7,0,12.1-5.4,12.1-12.1V12.1C873.4,5.4,868,0,861.3,0z M98.7,554.4c-3.5,0-6.5-3-6.5-6.5V12.1c0-3.5,3-6.5,6.5-6.5h186.7l0,0 h575.9c3.5,0,6.5,3,6.5,6.5v535.7c0,3.5-3,6.5-6.5,6.5H98.7z"
					/>
				</g>
				{/* <Module3Radar1 /> */}
            <Module3Switch1 
               handleModule3Switch1={this.handleModule3Switch1}/>
			</svg>
		);
	}
}

export default Module3;
