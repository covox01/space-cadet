import React, { Component } from "react";
import TweenMax from "gsap"
// import ".styles/style.scss"

class Module1Light1 extends Component {
	constructor() {
		super();
		this.state = {
			lightOn: false,
		};
		this.light = null;
		this.lightTween = null;
	}

	handleLight = () => {
		if (this.state.lightOn === true) {
			this.lightTween = TweenMax.to(this.light, 1, {
				fill: {r:249, g:232, b: 21}
			});
		} else if (this.state.lightOn === false) {
         this.lightTween = TweenMax.to(this.light, 1, { fill: 808080})
      }
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.lightOn === false &&
			this.props.switchComplete === true
		) {
			this.setState({
				lightOn: true,
			});
			this.handleLight();
		} else if (
			this.state.lightOn === true &&
			this.props.switchComplete === false
		) {
			this.setState({
				lightOn: false,
         });
         this.handleLight();
		}
	}

	render() {
		return (
			<g id="am1-light-1" switchComplete={this.props.switchComplete}>
				<path
					ref={g => (this.light = g)}
					id="am1-light-face-1"
					fill="gray"
					d="M275.4,428.5c-11.2,0-20.4,9.2-20.4,20.4s9.2,20.4,20.4,20.4s20.4-9.2,20.4-20.4 S286.6,428.5,275.4,428.5z"
					pointerEvents="none"
				/>
			</g>
		);
	}
}
export default Module1Light1;
