import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar"><h1></h1>
    <ul>
      <Link to='/users'>Users</Link>
      <Link to='/companies'>Companies</Link>
      <Link to='/contact'>Contact</Link>
    </ul>
    </div>
    </>
  );
}

export default Sidebar