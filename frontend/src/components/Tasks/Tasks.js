import React, { useEffect, useState } from 'react';
import Task from '../Task/Task.js';
import './Tasks.css';
import axios from 'axios';

const Tasks = () => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/update')
      .then((res) => {
        setState({ taskList: res.data.todos.filter((word) => word !== '') });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [state, setState] = useState({
    taskList: [],
  });

  return (
    <div className="items">
      {state.taskList.length === 0 ? (
        <h1 className="no-tasks">No Tasks Yet</h1>
      ) : (
        state.taskList.map((task) => <Task task={task} />)
      )}
    </div>
  );
};

export default Tasks;
