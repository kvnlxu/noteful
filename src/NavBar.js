import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const navFolders = props.folders.map(folder => {
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
        <button>Add Folder</button>
      </ul>
    </nav>
  );
}

export default NavBar;