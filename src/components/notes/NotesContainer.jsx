import React from "react";
import { Routes, Route } from "react-router-dom";
import Notes from "./Notes";
import InputNote from "./InputNote";
import useNotes from "./utils/noteHook";
import { defaultNotes, archivedNotes, trashedNotes } from "./utils/filters";
import "./NotesContainer.css";

export default function NotesContainer() {
    const [notes, dispatch] = useNotes();
    //will have routes for archive and trash

    return (
        <div className="notes-container">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <InputNote dispatch={dispatch} />
                            <Notes
                                notes={notes}
                                dispatch={dispatch}
                                filter={defaultNotes}
                            />
                        </>
                    }
                />
                <Route
                    path="/archive"
                    element={
                        <Notes
                            notes={notes}
                            dispatch={dispatch}
                            filter={archivedNotes}
                        />
                    }
                />
                <Route
                    path="/trash"
                    element={
                        <Notes
                            notes={notes}
                            dispatch={dispatch}
                            filter={trashedNotes}
                        />
                    }
                />
            </Routes>
            {/*will include routes with Notes having different filtering functions from utils js*/}
            {/*app utils will have the functions will import in Notes and run it on the notes here I am passing as a filter function for testing*/}
        </div>
    );
}
