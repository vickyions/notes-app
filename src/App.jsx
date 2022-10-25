import React from "react";
import { BrowserRouter } from "react-router-dom";
import Split from "react-split";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NotesContainer from "./components/notes/NotesContainer";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Split
                    direction="horizontal"
                    minSize={[100,500]}
                    maxSize={[200, Infinity]}
                    gutterAlign="center"
                    expandToMin={true}
                    className="split"
                >
                <Sidebar />
                <NotesContainer />
                </Split>
            </BrowserRouter>
        </div>
    );
}

export default App;
