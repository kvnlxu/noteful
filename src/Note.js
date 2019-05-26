import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ApiContext from './ApiContext';
import config from './config';

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
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
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