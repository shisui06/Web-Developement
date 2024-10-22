import React from 'react';

const Quadrant = ({ backgroundColor, children }) => {
  const quadrantStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
    width: '50%',
    height: '50%',
    fontSize: '2rem',
    color: 'white',
  };

  return <div style={quadrantStyle}>{children}</div>;
};

export default Quadrant;
