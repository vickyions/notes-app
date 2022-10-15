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

const ACTION = {
    ADD_NOTE: "addNote",
    DELETE_NOTE: "deleteNote",
    GET_NOTES: "getNotes", //will call a function which takes a query for filtering
};

function reducer(prevState, action) {
    /*action {
        type: ACTION.<keyword>,
        query: /*for returning a filtered notes array *//*
    }*/
    switch (action.type) {
        case ACTION.ADD_NOTE:
            break;
        case ACTION.DELETE_NOTE:
            break;
        case ACTION.GET_NOTES:
            //will be a filter function which takes a query also from action.query
            break;
        default:
            return prevState;
    }
}

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