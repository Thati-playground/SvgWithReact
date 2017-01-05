import React from 'react';

export default class Task extends React.Component {
    prepareCords() {
        let coords = {
            x: this.props.x,
            y: this.props.y,
            width: this.props.width,
            height: this.props.height,
            fill: this.props.fill
        }
        return coords;
    }
    render() {
        let coords = this.prepareCords();
        return(
        <rect {...coords}/>
        )
    }
}