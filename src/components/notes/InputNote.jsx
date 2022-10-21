import React, { useState } from "react";
import { ACTION } from "./NotesContainer";

/*notes [notesObj]
/*notesObj {
 * id: nanoid,
    content,
    backgroundColor,
    color,
    isPinned,
    isArchived,
    isTrashed,
    tags: [<tag Name>],
} */

export default function InputNote(props) {
    const [noteContent, setNoteContent] = useState("");

    const { dispatch } = props;

    return (
        <div className="input-note-container">
            <input
                type="text"
                placeholder="Input note"
                value={noteContent}
                onChange={(event) => setNoteContent(event.target.value)}
            />
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: ACTION.ADD_NOTE,
                        noteContent: noteContent,
                    })
                }
            >Add Note</button>
        </div>
    );
}
