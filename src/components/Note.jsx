import React from 'react';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="note_btn">DELETE</button>
    </div>
  );
}

export default Note;
