import React from 'react';
import ApiContext from './ApiContext';
import { withRouter } from 'react-router-dom';

class NoteNavBar extends React.Component{
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

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