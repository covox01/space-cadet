import React, { Component } from "react";
import TweenMax from "gsap";

class Module1Switch2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
		};
		this.trigger2 = null;
		this.trigger2Tween = null;
	}

	animate = () => {
		if (!this.state.animate) {
			this.setState({
				animate: true,
			});
			this.trigger2Tween = TweenMax.to(this.trigger2, 1, { y: 140 });
		} else {
			this.setState({
				animate: false,
			});
			this.trigger2Tween = TweenMax.to(this.trigger2, 1, { y: 0 });
		}
	};

	handleClick = event => {
      this.props.handleModule1Switch2(event);
      // this.props.checkModuleComplete();
      this.animate();
	};
	render() {
		return (
			<g
				id="am1-switch-2"
				onClick={this.handleClick}
			>
				<path
					fill="#282828"
					d="M478.4,391.8L478.4,391.8c-10.9,0-19.7-8.8-19.7-19.7V127c0-10.9,8.8-19.7,19.7-19.7l0,0 c10.9,0,19.7,8.8,19.7,19.7v245C498.1,383,489.3,391.8,478.4,391.8z"
				/>
				<g id="am1-trigger-2" ref={g => (this.trigger2 = g)}>
					<path
						id="am1-trigger-face-2"
						fill="#656565"
						d="M498.4,101.7h-40.1c-5.1,0-9.2,4.1-9.2,9.2v138.8c0,5.1,4.1,9.2,9.2,9.2h40.1 c5.1,0,9.2-4.1,9.2-9.2V110.9C507.6,105.8,503.5,101.7,498.4,101.7z"
					/>
				</g>
			</g>
		);
	}
}
export default Module1Switch2;
