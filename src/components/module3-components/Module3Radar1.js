import React, { Component, Fragment} from  "react"
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax, Power3 } from "gsap"
import MorphSVGPlugin from "../../MorphSVGPlugin.js"


class Module3Radar1 extends Component{
    constructor(){
        super()
        this.state = {
            switch: true
        }
    } 
    render(){
        return(
            <Fragment>
                <circle
					fill="#282828"
					cx="568.9"
					cy="288.2"
					r="154.4"
					id="am3-radar-face"
				/>
				<path
					fill="gray"
					d="M568.9,500.5c-117,0-212.2-95.2-212.2-212.2S451.9,76,568.9,76s212.2,95.2,212.2,212.2 S686,500.5,568.9,500.5z M568.9,79.7c-115,0-208.5,93.5-208.5,208.5S454,496.7,568.9,496.7s208.5-93.5,208.5-208.5 S683.9,79.7,568.9,79.7z"
					id="am3-outer-ring"
				/>
				<path
					id="am3-radar-inner-ring"
					fill="gray"
					d="M778,285.4H661.2c-1.5-49.7-42.2-89.4-92.2-89.4c-50,0-90.7,39.9-92.2,89.4H359.9	v5.6h116.9c1.5,49.7,42.2,89.4,92.2,89.4c50,0,90.7-39.9,92.2-89.4H778V285.4z M568.9,201.6c46.9,0,85.1,37.3,86.6,83.8H482.3	C483.8,238.9,522.1,201.6,568.9,201.6z M568.9,375c-46.9,0-85.1-37.3-86.6-83.8h173.2C654.1,337.5,615.8,375,568.9,375z"
				/>
				<circle id="am3-radar-light" fill="gray" cx="782.5" cy="289" r="17.5" />
            </Fragment>
        )
    }
}

export default Module3Radar1;