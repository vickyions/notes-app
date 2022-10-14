import React, { useReducer } from "react";

export default function Notes() {
    //create a reducer which will always return a filtered notes
    const [notes] = useReducer(reducer, {});

    return (
        <div className="notes-container">
            <NewNote />
            {notes.map(() => {})}
        </div>
    );
}
