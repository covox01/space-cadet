import React, { Component, Fragment } from "react";
import { Back, TimelineLite, TimelineMax, Elastic, TweenMax } from "gsap"

class Module4Monitor extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: false,
            completedSequence: 0,
            switchComplete: false
        };
        this.triggerTween = new TimelineLite();
    }

    render() {
        return(
            <g id="am4-monitor">
               <path
               fill="#212121"
               d="M635.1,39.5c0-2.5-2-4.5-4.5-4.5H325.5c-2.5,0-4.5,2-4.5,4.5v200.8c0,2.5,2,4.5,4.5,4.5h305.2 c2.5,0,4.5-2,4.5-4.5V39.5z"
               />
               <path
                  fill="gray"
                  d="M637.8,39.5c0-3.9-3.2-7.1-7.1-7.1H325.5c-3.9,0-7.1,3.2-7.1,7.1v200.8c0,3.9,3.2,7.1,7.1,7.1h305.2 c3.9,0,7.1-3.2,7.1-7.1V39.5z M635.1,240.3c0,2.5-2,4.5-4.5,4.5H325.5c-2.5,0-4.5-2-4.5-4.5V39.5c0-2.5,2-4.5,4.5-4.5h305.2 c2.5,0,4.5,2,4.5,4.5V240.3z"
               />
            </g>
        )
    }
}

export default Module4Monitor;