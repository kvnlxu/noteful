import React from 'react';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import NavBar from './NavBar';
import NotesList from './NotesList';
import NotePage from './NotePage';
import NoteNavBar from './NoteNavBar';
import ApiContext from './ApiContext';
import config from './config';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import FormNav from './FormNav';
import NotefulError from './NotefulError';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e))
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          notesRes.json(),
          foldersRes.json(),
        ])
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [
        ...this.state.notes,
        note
      ]
    })
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    })
  }

  renderNavRoutes() {
    const folders = this.state.folders;
    const notes = this.state.notes;
    return (
      <>
        <Route exact path="/"
          render={_ =>
            <NavBar folders={folders} />
          }
        />
        <Route path="/folder/:folderId"
          render={_ =>
            <NavBar folders={folders} />
          }
        />
        <Route path="/note/:noteId"
          render={
            routeProps => {
              const note = notes.find(n => n.id === routeProps.match.params.noteId);
              const folderName = folders.find(folder => folder.id === note.folderId).name;
              return <NoteNavBar folderName={folderName} />;
            }
          }
        />
        <Route
          path='/add-folder'
          component={FormNav}
        />
        <Route
          path='/add-note'
          component={FormNav}
        />
      </>
    );
  }

  renderMainRoutes() {
    const notes = this.state.notes;

    return (
      <>
        <Route exact path="/"
          render={_ =>
            <NotesList notes={notes} />
          }
        />
        <Route path="/folder/:folderId"
          render={routeProps =>
            <NotesList notes={notes.filter(
              note => note.folderId === routeProps.match.params.folderId)}
            />
          }
        />
        <Route path="/note/:noteId"
          render={routeProps =>
            <NotePage note={notes.find(
              note => note.noteId === routeProps.match.params.NoteId)}
            />
          }
        />
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-note'
          component={AddNote}
        />
      </>
    );
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote,
      deleteNote: this.handleDeleteNote,
    }

    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <header className="App_header">
            <h1>
              <Link to="/">Noteful</Link>
            </h1>
          </header>
          <NotefulError>
            {this.renderNavRoutes()}
          </NotefulError>
          <main className='App_main'>
            <NotefulError>
              {this.renderMainRoutes()}
            </NotefulError>
          </main>
        </div>
      </ApiContext.Provider>
    );
  }

}

export default App;