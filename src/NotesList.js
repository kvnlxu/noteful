import React, { Component } from 'react';
import Note from './Note';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
    folderId: PropTypes.string,
    content: PropTypes.string
  }))
};