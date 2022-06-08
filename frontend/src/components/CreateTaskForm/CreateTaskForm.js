import axios from 'axios';
import React, { useState } from 'react';
import '../CreateTaskForm/CreateTaskForm.css';

const CreateTaskForm = () => {
  const [state, setState] = useState({
    createTask: '',
  });

  const handleFieldChange = (event) => {
    const value = event.target.value;
    setState({
      createTask: value,
    });
    // console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.createTask === '') {
      alert('Enter a Task');
    } else {
      var formData = new FormData();
      formData.append('type', 'create');
      formData.append('message', state.createTask);
      axios
        .post('http://localhost:5000/update', {
          type: 'create',
          message: state.createTask,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      window.location.reload();
    }
  };

  return (
    <div classname="create-task">
      <h1 className="create-task-label">What do you need to do?</h1>
      <form className="create-task-form" onSubmit={handleSubmit}>
        <input
          className="create-task-input"
          type="text"
          id="createTask"
          name="createTask"
          autofocus="true"
          value={state.input}
          onChange={handleFieldChange}
          placeholder="Type here..."
        />
        <input type="submit" value="Submit" className="create-task-submit" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
