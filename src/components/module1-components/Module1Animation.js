import React, { Component } from "react";
import { Back, Elastic, TimelineLite } from "gsap";

class Module1Animation extends Component {
	constructor() {
		const triggerTween = new TimelineLite();
		triggerTween
			.to(this.trigger, 0.5, {
				y: 140,
				fill: "#a1dbc3",
				ease: Back.easeInOut,
			})
			.to(
				this.filter,
				0.5,
				{
					attr: { stdDeviation: 15 },
					ease: Elastic.easeOut,
				},
				"-=.3"
			)
			.to(
				[this.trigger, this.filter],
				0.5,
				{
					attr: { stdDeviation: 20 },
					fill: "#a3e8ce",
					ease: Elastic.easeOut,
				},
				"-=.3"
			);
	}
}

export default Module1Animation;
