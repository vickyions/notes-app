import React from "react";
import "./App.css";
import Navbar from './components/navbar/Navbar';
import NotesContainer from './components/notes/NotesContainer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>Hello World!</h1>
            <NotesContainer />
        </div>
    );
}

export default App;
