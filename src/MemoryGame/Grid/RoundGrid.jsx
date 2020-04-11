import React, {Component} from 'react';

import './Grid.css'

export default class RoundGrid extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {
            col,
            row,
            isActive,
            cellId,
            onMouseDown,
          } = this.props;
          const extraClassName =  isActive
            ? 'node-active'
            : '';
          
          //rendering individual node elements
          return (
              <div id={`round-node-${row}-${col}`} className={`round-node ${extraClassName}`} onMouseDown = {() => onMouseDown(row,col)}>
                <div className='node-num'>{cellId}</div>
              </div>             
          );
    }
}