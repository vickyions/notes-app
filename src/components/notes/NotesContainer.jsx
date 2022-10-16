import React, { useEffect, useReducer } from "react";
import Notes from "Notes";

const NOTES_STR_KEY = "notes.app";
/*notes [notesObj]
/*notesObj {
    content,
    backgroundColor,
    color,
    isPinned,
    isArchived,
    isDeleted,
    ftags: [<tag Name>],
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

    //will have routes for archive and trash

    return (
        <>
            <Notes notes={notes} dispatch={dispatch} filter={defaultNotes}/> 
        {/*will include routes with Notes having different filtering functions from utils js*/}
            {/*app utils will have the functions will import in Notes and run it on the notes here I am passing as a filter function for testing*/}
        </>
    );
}

//functions of utils.js
function defaultNotes(notes) {
    //will be ran inside Notes component to filter the notes prop before rendering
    return notes.filter((note) => {!note.isArchived && !note.isDeleted}).sort((a,b) => {
        if (a.isPinned && b.isPinned){
            return 0; //dont sort
        } else if (a.isPinned) {
            return -1; //sort before b
        } else if (b.isPinned) {
            return 1; //sort after b
        }
    });
}
