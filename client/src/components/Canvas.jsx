import React from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss'

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  });


  return (
    <canvas className='canvas1' ref={canvas} height={height} width={width} >
      
    </canvas>
  );
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Canvas;