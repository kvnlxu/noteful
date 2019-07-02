import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ApiContext from './ApiContext';
import config from './config';
import PropTypes from 'prop-types';

export default class Note extends React.Component{
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.note.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => res.text())
      .then(() => {
        this.context.deleteNote(noteId)
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render(){
    return (
      <div className="Note">
        <Link to={'/note/' + this.props.note.id}>
          <h2>{this.props.note.name}</h2>
        </Link>
        <p>Modified {format(this.props.note.modified, 'Do MMM YYYY')}</p>
        <button onClick={this.handleClickDelete}>Delete Note</button>
      </div>
    );
  }
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
    folderId: PropTypes.string,
    content: PropTypes.string
  }).isRequired
}