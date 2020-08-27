import React, { Component } from 'react';
import './create-react-component-node.css'

export default function createReactComponentNode(name) {
  class ReactComponentNode extends Component {
    constructor(props) {
      super(props);
      console.log(name + ' is created.');
    }
    componentDidMount() {
      console.log(name + ' did mount.');
    }
    
    componentWillUnmount() {
      console.log(name + ' will unmount.');
    }
    
    componentDidUpdate() {
      console.log(name + ' is updated.');
    }
    
    render() {
      return (
        <div className={'node ' + name} data-name={name}>
          {this.props.children}
        </div>
      );
    }
  }
  return ReactComponentNode
}