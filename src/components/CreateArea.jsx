import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [input, setInput] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });

    e.preventDefault();
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    e.preventDefault();
  }

  function heandleInput() {
    setInput(true);
    console.log(input);
  }

  return (
    <div>
      <form className="create-note">
        {input && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={heandleInput}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={input === true ? 3 : 1}
        />

        <Zoom in={input}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
