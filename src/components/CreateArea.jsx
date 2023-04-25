import React from 'react';

function CreateArea() {
  return (
    <div>
      <form className="todo-form">
        <input className="todo-form_input" name="title" placeholder="Title" />
        <textarea
          className="todo-form_textarea"
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button className="todo-form_btn">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
