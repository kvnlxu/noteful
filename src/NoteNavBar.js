import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoteNavBar extends React.Component{
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    folderName: PropTypes.string
  }

  render(){
    return (
      <nav className='AppNav'>
        <button 
          className='BackButton'
          onClick={() => this.props.history.goBack()}
        >
          Go Back
        </button>
        <h2 className='DirectoryName'>{this.props.folderName}</h2>
      </nav>
    );
  }
}

export default withRouter(NoteNavBar);

NoteNavBar.propTypes = {
  folderName: PropTypes.string
}