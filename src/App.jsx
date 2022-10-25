import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NotesContainer from "./components/notes/NotesContainer";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Sidebar />
                <NotesContainer />
            </BrowserRouter>
        </div>
    );
}

export default App;
