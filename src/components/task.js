import React from 'react';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                isToggleOn: false,
                isContextOn: false,
                fill: 'white'
            };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.contextMenu = this.contextMenu.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log(this.state);
    }
    contextMenu(e) {
        e.preventDefault();
        this.setState( prevState => ({
            isContextOn: !prevState.isContextOn
        }));
    }
    drag(e) {
    }
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
            <g onClick={this.handleClick} onContextMenu={this.contextMenu}>
                <rect {...coords}/>
                <text x="0" y="35" fill="white" font-family="Verdana" font-size="35">{this.state.isToggleOn ? 'ON' : 'OFF'}</text>
                <text x="40" y="35" fill="yellow" font-family="Verdana" font-size="35">{this.state.isContextOn ? 'ON' : 'OFF'}</text>
            </g>
        )
    }
}