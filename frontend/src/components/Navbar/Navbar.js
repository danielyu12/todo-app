import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <h2 className="todos-title">Todo-App</h2>
      <a href="/">Tasks</a>
      <a href="/create-task">Create a task</a>
    </div>
  );
};

export default Navbar;
