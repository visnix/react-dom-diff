import React from 'react';
import createReactComponentNode from './create-react-component-node';

const Root = createReactComponentNode('R');
const A = createReactComponentNode('A');
const B = createReactComponentNode('B');
const C = createReactComponentNode('C');
const D = createReactComponentNode('D');

function Shape(props) {
  const { shape } = props;
  const shape1 = () => {
    return (
      <Root>
        <A>
          <B />
          <C />
        </A>
        <D />
      </Root>
    );
  };
  
  const shape2 = () => {
    return (
      <Root>
        <A>
          <B />
        </A>
        <D>
          <C />
        </D>
      </Root>
    );
  };
  
  const shape3 = () => {
    return (
      <Root>
        <A>
          <B>
            <C />
          </B>
        </A>
        <D />
      </Root>
    );
  };
  
  const shape4 = () => {
    return (
      <Root>
        <A>
          <B />
          <D>
            <C />
          </D>
        </A>
      </Root>
    );
  };

  const shape5 = () => {
    return (
      <Root>
        <A>
          <B key="B" />
          <C key="C" />
        </A>
      </Root>
    );
  };

  const shape6 = () => {
    return (
      <Root>
        <A>
          <C key="C" />
          <B key="B" />
        </A>
      </Root>
    );
  };
  
  const shapeCollections = {
    shape1,
    shape2,
    shape3,
    shape4,
    shape5,
    shape6,
  }


  if(shapeCollections[shape]) {
    return shapeCollections[shape]()
  }

  return null;

}

export default Shape;
