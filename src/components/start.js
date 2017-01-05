import React from 'react';

export default class Start extends React.Component {
    prepareCords() {
        let coords = {
            cx: this.props.cx,
            cy: this.props.cy,
            r: this.props.r,
            fill: this.props.fill
        }
        return coords;
    }
    render() {
        let coords = this.prepareCords();
        return(
            <circle {...coords}/>
        )
    }
}