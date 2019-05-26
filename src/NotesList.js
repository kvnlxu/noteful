import React, { Component } from 'react';
import Note from './Note';
import { withRouter } from 'react-router-dom';

class NotesList extends Component {

  handleAddNoteButton = () => {
    this.props.history.push('/add-note')
  }

  render() {
    const renderedNotesList = this.props.notes.map(note => {
      return (
        <li key={note.id}>
          <Note note={note} />
        </li>
      )
    });

    return (
      <ul className="NotesList">
        {renderedNotesList}
        <button onClick={this.handleAddNoteButton}>Add note</button>
      </ul>
    )
  }
}

export default withRouter(NotesList);