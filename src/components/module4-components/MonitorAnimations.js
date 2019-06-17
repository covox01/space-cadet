import React, { Component, Fragment} from "react"

class MonitorAnimations extends Component {
    render() {
        return(
            <Fragment>
                <path
                    ref={path => (this.graph1Start = path)}
                    id="am4-graph-1-start"
                    fill="none"
                    stroke="gray"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="29.5,140.8 107.1,140.8 253.5,140.8 337.4,140.8"
                />
                <path
                    ref={path => (this.graph1Mid = path)}
                    id="am4-graph-1-mid"
                    fill="none"
                    stroke="gray"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="M29.5,140.8c0,0,22.1-47.4,81.8-47.4s83.4,87,150.8,87c44.5,0,75.3-39.6,75.3-39.6"
                />
                <path
                    ref={path => this.graph1End = path}
                    id="am4-graph-1-end"
                    fill="none"
                    stroke="gray"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="M29.5,140.8c0,0,18.7,39.6,77.6,39.6s93.9-87,150.9-87s79.4,47.4,79.4,47.4"
                />
            </Fragment>
        )
    } 
}

export default MonitorAnimations;