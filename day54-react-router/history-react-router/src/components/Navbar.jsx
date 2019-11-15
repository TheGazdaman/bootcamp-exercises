import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar"><h1>Navbar</h1>
    <ul>
      <Link to='/users'>Users</Link>
      <Link to='/companies'>Companies</Link>
      <Link to='/contact'>Contact</Link>
    </ul>
    </div>
    </>
  );
}

export default Navbar