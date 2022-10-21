import React from "react";
import "./NoteCard.css";
import { ACTION } from "./NotesContainer";

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

export default function NoteCard(props) {
    const { note, dispatch } = props;

    return (
        <div className="note-card">
            <h1>{note.content}</h1>
            <p>{JSON.stringify(note)}</p>
            <div className="note-card-actions">
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_ARCHIVE, id: note.id })
                    }
                >
                    Archive
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_TRASH, id: note.id })
                    }
                >
                    Trash
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_PINNED, id: note.id })
                    }
                >
                    Pin
                </button>
            </div>
        </div>
    );
}
