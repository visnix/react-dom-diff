import React, { Component, useEffect } from 'react';
import './create-react-component-node.css'

function createReactClassComponentNode(name) {
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

    // shouldComponentUpdate(nextProps, nextState) {
    //   if(this.props.testProps !== nextProps.testProps) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    
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

function createReactFunctionComponentNode(name) {
  function ReactComponentNode(props) {
    console.log(name + '---> is created.');
  
    useEffect(() => {
      console.log(name + '--->1 is updated.');
      return () => {
        console.log(name + '--->1 will unmount.');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])
  
    return (
      <div className={'node ' + name} data-name={name}>
        {props.children}
      </div>
    )
  }

  return ReactComponentNode

}

export default createReactClassComponentNode;
// export default createReactFunctionComponentNode;

