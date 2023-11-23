import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    
    <nav className="px-16 py-8">
      <ul className="flex flex-row space-x-8">
        <li>
          <Link to="/" className='active:text-blue-500' activeStyle={{ color: 'red' }}>Home</Link>
        </li>
        <li>
          <Link to="/get" className='active:text-blue-500' activeStyle={{ color: 'red' }}>Get Student</Link>
        </li>
        <li>
          <Link to="/add" className='active:text-blue-500' activeStyle={{ color: 'red' }}>Add Student</Link>
        </li>
        <li>
          <Link to="/update" className='active:text-blue-500' activeStyle={{ color: 'red' }}>Update Student</Link>
        </li>
        <li>
          <Link to="/delete" className='active:text-blue-500' activeStyle={{ color: 'red' }}>Delete Student</Link>
        </li>
      </ul>
      
    </nav>

  );
}

export default Navigation;