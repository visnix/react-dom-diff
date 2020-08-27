import React, { useState, useEffect } from 'react';
import Shape from './Shape';
import shapesImage from './shapes.png';

export default function App() {

  const shapesList = [
    'shape1',
    'shape2',
    'shape3',
    'shape4',
    'shape5',
    'shape6',
    'clear'
  ]
  const [shape, updateShape] = useState(null);

  useEffect(() => () => console.log('======================'), [shape]);

  return (
    <div>
      {
        shapesList.map((item, index) => 
          <button
            key={item}
            onClick={() => {updateShape(item);}}
          >
            {item}
          </button>
        )
      }
      <Shape shape={shape} />
      <img src={shapesImage} alt="shapes"/>
    </div>
  )
}