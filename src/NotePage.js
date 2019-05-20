import React from 'react';
import Note from './Note';

function NotePage(props){
  return (
    <div className="NotePage">
      <Note note={props.note}/>
      <p>{props.note.content}</p>
    </div>
  );
}

export default NotePage;