import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import GetStudent from './components/GetStudent';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get" element={<GetStudent />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update" element={<UpdateStudent />} />
          <Route path="/delete" element={<DeleteStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


