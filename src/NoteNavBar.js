import React from 'react';
import { Link } from 'react-router-dom';

function NoteNavBar(props) {
  return (
    <nav className='AppNav'>
      <button>Go Back</button>
      <h2>{props.folderName}</h2>
    </nav>
  );
}

export default NoteNavBar;