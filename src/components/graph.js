import React from 'react';
import Axis from './axis';
import GraphBody from './graph_body';
import Task from './task';
import Start from './start';
import Stop from './stop';

export default class Graph extends React.Component {
    static defaultProps = { width: 800, height: 600 };
  render() {
    
    var indents = this.props.elements.map(function (i) {
        switch (i.type) {
            case 'Task':
                return (
                    <Task {...i}/>
                );
                break;
            case 'Start':
                return (
                    <Start {...i}/>
                );
                break;
            case 'Stop':
                return (
                    <Stop {...i}/>
                );
                break;
        }
    });

    return (
      <svg width={this.props.width} height={this.props.height}>
        {indents}
      </svg>
    )
  }
}