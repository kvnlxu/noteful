import React from 'react';
import { withRouter } from 'react-router-dom';

class FormNav extends React.Component{
  static defaultProps = {
    history: {
      goBack: () => { }
    },
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
      </nav>
    );
  }
}

export default withRouter(FormNav);