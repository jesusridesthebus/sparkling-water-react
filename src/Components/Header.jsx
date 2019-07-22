import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Sparkling Water</h1>
      <p>Vegan, organic, gluten-free!</p>
      
      <Link to="/">Home</Link> | <Link to="/newSparkling">Create New Sparkling Water</Link>
    </div>
  );
}

export default Header;