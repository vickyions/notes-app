import React, { useEffect, useReducer } from "react";

const NOTES_STR_KEY = "notes.app";
/*notes [notesObj]
/*notesObj {
    content,
    backgroundColor,
    Color,
    isPinned,
    isArchived,
    isDeleted,
    tags: [],
} */

const ACTION = {
    ADD_NOTE: "addNote",
    DELETE_NOTE: "deleteNote",
    ADD_TAG: "addTag",
    DELETE_TAG: "deleteTag",
    TOGGLE_ARCHIVE: "togglearchive",
    TOGGLE_TRASH: "tpggleTrash",
    TOGGLE_PINNED: "togglePinned",
};

function reducer(prevState, action) {
    /*action {
        type: ACTION.<keyword>,
        tag: <tag Name>,
    }*/
    switch (action.type) {
        case ACTION.ADD_NOTE:
            break;
        case ACTION.DELETE_NOTE:
            break;
        case ACTION.ADD_TAG:
            break;
        case ACTION.DELETE_TAG:
            break;
        case ACTION.TOGGLE_ARCHIVE:
            break;
        case ACTION.TOGGLE_TRASH:
            break;
        case ACTION.TOGGLE_PINNED:
            break;
        default:
            return prevState;
    }
}

//write several function to filter notes will be used to map around
//write in a utils js

export default function NotesContainer() {
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
