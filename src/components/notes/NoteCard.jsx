import React from "react";

export default function NoteCard(props) {
    const {notes, dispatch,filter} = props;

    return (
        <div className="note-card">
            <h1>{notes.content}</h1>
            <p>{notes.isPinned}</p>
            <p>{notes.tags}</p>
        </div>
    );
}