import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="px-16 py-8 flex justify-center">
      <ul className="flex flex-row space-x-8">
        <li>
          <Link to="/" className='active:text-blue-500'>Home</Link>
        </li>
        <li>
          <Link to="/get" className='active:text-blue-500'>Get Students</Link>
        </li>
        <li>
          <Link to="/add" className='active:text-blue-500'>Add Student</Link>
        </li>
        <li>
          <Link to="/update" className='active:text-blue-500'>Update Student</Link>
        </li>
        <li>
          <Link to="/delete" className='active:text-blue-500'>Delete Student</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;