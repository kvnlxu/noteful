import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends Component{

  handleAddFolderButton = () => {
    this.props.history.push('/add-folder')
  }
  
  render(){
    const navFolders = this.props.folders.map(folder => {
      return (
        <li key={folder.id}>
          <Link to={'/folder/' + folder.id}>
            {folder.name}
          </Link>
        </li>
      )
    });

    return (
      <nav className='AppNav'>
        <ul className="NavList">
          {navFolders}
          <button onClick={this.handleAddFolderButton}>Add Folder</button>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);