import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateTaskForm from '../src/components/CreateTaskForm/CreateTaskForm.js';
import Tasks from './components/Tasks/Tasks.js';

function App() {
  const [getMessage, setGetMessage] = useState({});

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/hello')
  //     .then((response) => {
  //       console.log('SUCCESS', response);
  //       setGetMessage(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="App">
      <div>
        <CreateTaskForm />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
