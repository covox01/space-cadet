import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite } from "gsap";

class Module5Switch2 extends Component {
	constructor() {
		super();
		this.state = {
			animate: false,
			completedSequence: 0,
			switchComplete: false,
		};
	}

	render() {
		return (
			<Fragment>
				<g id="am5-switch-2">
					<circle fill="#282828" cx="430" cy="149.3" r="70.5" />
					<path
						id="am5-trigger-2"
						fill="#4D4D4D"
						d="M430,109.3c-22.1,0-40,17.9-40,40s17.9,40,40,40c22.1,0,40-17.9,40-40 S452.1,109.3,430,109.3z"
					/>
				</g>
			</Fragment>
		);
	}
}

export default Module5Switch2;
