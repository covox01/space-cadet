import React, { Component } from "react";
import { Back, Elastic, TimelineLite} from "gsap";

class Module1Light2 extends Component {
	constructor() {
		super();
		this.state = {
			lightOn: false,
		};
		this.light = null;
		this.lightTween = null;
	}

	handleLightOn = () => {
		this.setState({
			lightOn: true,
		});
		const triggerTween = new TimelineLite();
		triggerTween
			.to([this.light, this.filter], 0.2, {
				attr: { stdDeviation: 30 },
				ease: Elastic.easeOut,
			})
			.delay(0.1)
			.to(
				[this.light, this.filter],
				0.2,
				{
					fill: "#f9e815",
					attr: { stdDeviation: 15 },
					ease: Elastic.easeOut,
				},
				"-=3"
			);
	};

	handleLightOff = () => {
		this.setState({
			lightOn: false,
		});
		const triggerTween = new TimelineLite();
		triggerTween.to([this.light, this.filter], 0.2, {
			fill: "#808080",
			attr: { stdDeviation: 0 },
			ease: Back.easeInOut,
		});
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
			<g id="am1-light-2">
				<path
					filter="url(#light2)"
					ref={path => (this.light = path)}
					id="am1-light-face-2"
					fill="gray"
					d="M478.2,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4 S489.5,428.5,478.2,428.5z"
				/>
				<defs>
					<filter id="light2" x="-1.8" y="-1.8" width="600%" height="600%">
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
export default Module1Light2;
