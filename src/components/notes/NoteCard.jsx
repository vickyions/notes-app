import React from "react";

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
    const {note, dispatch} = props;

    return (
        <div className="note-card">
            <h1>{note.content}</h1>
        </div>
    );
}
