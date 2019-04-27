import React, { Component } from "react";
import TweenMax from "gsap";

class Module1Switch1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
		};
		this.trigger1 = null;
		this.trigger1Tween = null;
	}

	animate = () => {
		if (!this.state.animate) {
			this.setState({
				animate: true,
			});
			this.trigger1Tween = TweenMax.to(this.trigger1, 1, { y: 140 });
		} else {
			this.setState({
				animate: false,
			});
			this.trigger1Tween = TweenMax.to(this.trigger1, 1, { y: 0 });
		}
	};

	handleClick = event => {
      this.props.handleModule1Switch1(event);
      // this.props.checkModuleComplete();
		this.animate();
	};


	render() {
		return (
			<g id="am1-switch-1" onClick={this.handleClick}>
				<path
					fill="#282828"
					d="M275.4,391.8L275.4,391.8c-10.9,  0-19.7-8.8-19.7-19.7V127c0-10.9,8.8-19.7,19.7-19.7l0,0 c10.9,0,19.7,8.8,19.7,19.7v245C295.2,383,286.4,391.8,275.4,391.8z"
				/>
				<g id="am1-trigger-1" ref={g => (this.trigger1 = g)}>
					<path
						rotate="90"
						id="am1-trigger-face-1"
						fill="#656565"
						d="M295.6,101.7h-40.3c-5.1,0-9.2,4.1-9.2,9.2v138.8c0,5.1,4.1,9.2,9.2,9.2h40.3 c5.1,0,9.2-4.1,9.2-9.2V110.9C304.8,105.8,300.7,101.7,295.6,101.7z"
					/>
				</g>
			</g>
		);
	}
}
export default Module1Switch1;
