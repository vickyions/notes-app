import React, { useEffect, useReducer } from "react";

const NOTES_STR_KEY = "notes.app";
/*notesObj {
    content,
    backgroundColor,
    Color,
    isPinned,
    isArchived,
    isDeleted,
    tags: [],
} */

const action = {};

function reducer(state, action) {}

export default function Notes() {
    //create a reducer which will always return a filtered notes
    const [notes, dispatch] = useReducer(
        reducer,
        (() => {
            JSON.parse(localStorage.getItem(NOTES_STR_KEY));
        }) || []
    );

    useEffect(() => {
        localStorage.setItem(NOTES_STR_KEY, JSON.stringify(notes));
    }, [notes]);

    return (
        <div className="notes-container">
            <NewNote />
            {notes.map(() => {})}
        </div>
    );
}
