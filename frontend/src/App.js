import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTaskPage from './pages/CreateTaskPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
