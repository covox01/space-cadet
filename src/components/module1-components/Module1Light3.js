import React, { Component } from "react";
import { Back, Elastic, TimelineLite } from "gsap";
import logo from "../../assets/pngs/switch3Light.png";

class Module1Light3 extends Component {
	constructor() {
		super();
		this.state = {
			lightOn: false,
		};
	}

	handleLightOn = () => {
		this.setState({
			lightOn: true,
      });
      const triggerTween = new TimelineLite()
      triggerTween
         .to([this.light, this.filter], 0.2, {
            attr: { stdDeviation: 30 },
            ease: Elastic.easeOut,
         }).delay(.2)
         .to([this.light, this.filter], 0.2, {
            fill: "#f9e815",
            attr: { stdDeviation: 15 },
            ease: Elastic.easeOut,
         }, "-=3");
	};

	handleLightOff = () => {
		this.setState({
			lightOn: false,
      })
      const triggerTween = new TimelineLite();
      triggerTween
         .to([this.light, this.filter], 0.2, {
            fill: "#808080",
            attr: { stdDeviation: 0 },
            ease: Back.easeInOut
		   })
	};

	// Detects if Module Switch is true and will fire the function to animate accordingly
	componentDidUpdate(prevProps, prevState) {
		if (this.state.lightOn === false && this.props.switchComplete === true) {
			this.handleLightOn();
		} else if (
			this.state.lightOn === true &&
			this.props.switchComplete === false
		) {
			this.handleLightOff();
		}
	}

	render() {
		return (
			<g id="am1-light-3">
				<path
					filter="url(#light3)"
					ref={path => (this.light = path)}
					id="am1-light-face-3"
					fill="gray"
					d="M681.2,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4 c11.2,0,20.4-9.2,20.4-20.4S692.5,428.5,681.2,428.5z"
				/>
				<defs>
					<filter id="light3" x="-1.8" y="-1.8" width="600%" height="600%">
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
		);
	}
}
export default Module1Light3;
