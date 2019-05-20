import React from 'react';
import Note from './Note';

function NotesList(props) {
  const renderedNotesList = props.notes.map(note => {
    return (
      <li key={note.id}>
        <Note note={note} />
      </li>
    )
  });

  return (
    <ul className="NotesList">
      {renderedNotesList}
      <button>Add note</button>
    </ul>
  )
}

export default NotesList;