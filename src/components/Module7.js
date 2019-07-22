import React, { Component } from "react";
import Module7Switch1 from "./module7-components/Module7Switch1"
import Module7Switch2 from "./module7-components/Module7Switch2"

class Module7 extends Component {
	render() {
		return (
			<svg
				id="module7"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 559 306"
			>
				<g id="am7-bg">
					<path
						id="am7-bg-face"
						fill="#303030"
						d="M556,10.3c0-4-3.3-7.3-7.3-7.3H10.3C6.3,3,3,6.3,3,10.3v285.5c0,4,3.3,7.3,7.3,7.3h538.5 c4,0,7.3-3.3,7.3-7.3V10.3z"
					/>
					<path
						id="am7-bg-outline"
						fill="gray"
						d="M559,10.3C559,4.6,554.4,0,548.7,0H10.3C4.6,0,0,4.6,0,10.3v285.5 c0,5.7,4.6,10.3,10.3,10.3h538.5c5.7,0,10.3-4.6,10.3-10.3V10.3z M556,295.7c0,4-3.3,7.3-7.3,7.3H10.3c-4,0-7.3-3.3-7.3-7.3V10.3 C3,6.3,6.3,3,10.3,3h538.5c4,0,7.3,3.3,7.3,7.3V295.7z"
					/>
				</g>
				<path
					id="am7-trigger-house"
					fill="#282828"
					d="M156,265.9c70,2.1,202.9-21.3,242.5-27.6c39.6-6.3,110.1-21.9,110.1-82.9v0	c0-61-46.1-88.6-107.1-88.6L156,45C95,45,45.5,94.4,45.5,155.4v0C45.5,216.4,105,268.7,156,265.9z"
				/>
				<Module7Switch1 />
				<Module7Switch2 />
			</svg>
		);
	}
}

export default Module7;
