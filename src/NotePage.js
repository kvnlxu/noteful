import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';
import { withRouter } from 'react-router-dom';

class NotePage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    return (
      <div className="NotePage">
        <Note note={this.props.note} onDeleteNote={this.handleDeleteNote}/>
        <p>{this.props.note.content}</p>
      </div>
    )
  }
}

export default withRouter(NotePage)

NotePage.propType = {
  note: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
    folderId: PropTypes.string,
    content: PropTypes.string
  })
}