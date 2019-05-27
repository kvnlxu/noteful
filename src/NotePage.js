import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';

function NotePage(props){
  return (
    <div className="NotePage">
      <Note note={props.note}/>
      <p>{props.note.content}</p>
    </div>
  );
}

export default NotePage;

NotePage.propType = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
    folderId: PropTypes.string,
    content: PropTypes.string
  })
}