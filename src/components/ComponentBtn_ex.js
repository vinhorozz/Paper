import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonExample = () => {
  return (
    <div className="container mt-5">
      <h2>Bootstrap Buttons</h2>
      <button className="btn btn-primary mb-2" style={{ marginRight: '10px' }}>Primary Button</button>
      <button className="btn btn-secondary mb-2" style={{ marginRight: '10px' }}>Secondary Button</button>
      <button className="btn btn-success mb-2" style={{ marginRight: '10px' }}>Success Button</button>
      <button className="btn btn-danger mb-2" style={{ marginRight: '10px' }}>Danger Button</button>
      <button className="btn btn-warning mb-2" style={{ marginRight: '10px' }}>Warning Button</button>
      <button className="btn btn-info mb-2" style={{ marginRight: '10px' }}>Info Button</button>
      <button className="btn btn-light mb-2" style={{ marginRight: '10px' }}>Light Button</button>
      <button className="btn btn-dark mb-2"style={{ marginRight: '10px' }}>Dark Button</button>
    </div>
  );
};

export default ButtonExample;
