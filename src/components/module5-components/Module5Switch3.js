import React, { Component, Fragment } from "react";
import { Back, Elastic, TimelineLite } from "gsap";

class Module5Switch3 extends Component {
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
				<g id="am5-switch-3">
					<path
						fill="#303030"
						d="M795.7,219.6h-43c-2.8,0-5-2.2-5-5V84c0-2.8,2.2-5,5-5h43c2.8,0,5,2.2,5,5v130.6 C800.7,217.4,798.5,219.6,795.7,219.6z"
					/>
					<path
						fill="gray"
						d="M747.7,214.7v-62.1c0-2.7,2.2-5,5-5h43.1c2.7,0,5,2.2,5,5v62.1c0,2.7-2.2,5-5,5h-43.1 C749.9,219.6,747.7,217.4,747.7,214.7z"
						id="am5-trigger-1_1_"
					/>
				</g>
			</Fragment>
		);
	}
}

export default Module5Switch3;
