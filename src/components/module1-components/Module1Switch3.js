import React, { Component, Fragment } from "react";
import Module1Light3 from "./Module1Light3"
import TweenMax from "gsap";

class Module1Switch3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
			completedSequence: 0,
			switchComplete: false,
		};
		this.trigger3 = null;
		this.trigger3Tween = null;
	}

	handleSwitch3 = () => {
		if (this.state.completedSequence === 0) {
			this.setState({
				completedSequence: 1,
			});
		} else if (this.state.completedSequence === 1) {
			this.setState({
				completedSequence: 2,
				switchComplete: true,
			});
			this.props.handleModule1Switch3();
		} else {
			this.setState({
				completedSequence: 1,
				switchComplete: false,
			});
			this.props.handleModule1Switch3();
		}
	};

	animate = () => {
		if (!this.state.animate) {
			this.setState({
				animate: true,
			});
			this.trigger3Tween = TweenMax.to(this.trigger3, 1, { y: 140 });
		} else {
			this.setState({
				animate: false,
			});
			this.trigger3Tween = TweenMax.to(this.trigger3, 1, { y: 0 });
		}
	};

	handleClick = () => {
		this.handleSwitch3();
		this.animate();
   };
   
	render() {
		return (
			<Fragment>
				<g id="am1-switch-3" onClick={() => this.handleClick()}>
					<path
						fill="#282828"
						d="M681.2,391.8L681.2,391.8c-10.9,0-19.7-8.8-19.7-19.7V127c0-10.9,8.8-19.7,19.7-19.7l0,0 c10.9,0,19.7,8.8,19.7,19.7v245C700.9,383,692.1,391.8,681.2,391.8z"
					/>
					<g id="am1-trigger-3" ref={g => (this.trigger3 = g)}>
						<path
							id="am1-trigger-face-3"
							fill="#656565"
							d="M701.3,101.7h-40.1c-5.1,0-9.2,4.1-9.2,9.2v138.8c0,5.1,4.1,9.2,9.2,9.2h40.1 c5.1,0,9.2-4.1,9.2-9.2V110.9C710.5,105.8,706.3,101.7,701.3,101.7z"
						/>
					</g>
				</g>
				<Module1Light3 switchComplete={this.state.switchComplete} />
			</Fragment>
		);
	}
}
export default Module1Switch3;
