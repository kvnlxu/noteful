import React from 'react';
import { Link } from 'react-router-dom';

function Note(props){
  return (
    <div className="Note">
      <Link to={'/note/' + props.note.id}>
        <h2>{props.note.name}</h2>
      </Link>
      <p>{props.note.modified}</p>
      <button>Delete Note</button>
    </div>
  );
}

export default Note;