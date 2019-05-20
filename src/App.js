import React from 'react';
import {Component} from 'react';
import DummyStore from './dummy-store';
import { Link, Route } from 'react-router-dom';
import NavBar from './NavBar';
import NotesList from './NotesList';
import NotePage from './NotePage';
import NoteNavBar from './NoteNavBar';
import './App.css';

class App extends Component {
  state = {
    notes: DummyStore.notes,
    folders: DummyStore.folders,
  };

  renderNavRoutes(){
    const folders = this.state.folders;
    const notes = this.state.notes;
    return (
      <>
        <Route exact path="/" 
          render={_ => 
            <NavBar folders={folders}/>
          }
        />
        <Route path="/folder/:folderId"
          render = {_ =>
            <NavBar folders={folders}/>
          }
        />
        <Route path="/note/:noteId"
          render = {routeProps => {
              const note = notes.find(n => n.id === routeProps.match.params.noteId);
              const folderName = folders.find(folder => folder.id === note.folderId).name;
              return <NoteNavBar folderName={folderName}/>;
            }
          }
        />
      </>
    );
  }

  renderMainRoutes(){
    const notes = this.state.notes;

    return (
      <>
        <Route exact path="/" 
          render={_ => 
            <NotesList notes={notes}/>
          }
        />
        <Route path="/folder/:folderId"
          render = {routeProps =>
            <NotesList notes={notes.filter(
              note => note.folderId === routeProps.match.params.folderId)}
            />
          }
        />
        <Route path="/note/:noteId"
          render = {routeProps =>
            <NotePage note={notes.find(
              note => note.noteId === routeProps.match.params.NoteId)}
            />
          }
        />
      </>
    );
  }

  render() {
    return(
      <div className='App'>
        <header className="App_header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        {this.renderNavRoutes()}
        <main className='App_main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    );
  }

}

export default App;