import React from "react";
import "./NoteCard.css";
import { ACTION } from "./utils/noteHook"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan, faBoxArchive, faThumbtack} from "@fortawesome/free-solid-svg-icons";

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
            <div className="note-card-main">
                <h1>{note.content}</h1>
            </div>
            
            {/*TODO for now keeping tags feature on hold whether to add a global tag list 
            and assign from the list or individulally allow to create tag and then count
            {note.tags.length > 0 &&<div className="tags-container">
                <div className="tags-capsules">
                    {note.tags.map((tag) => {
                        <div key=className="tag-capsule">{tag}</div>
                    })}
                </div>
            </div>
            }
            */}

            <p>{JSON.stringify(note)}</p>
            <div className="note-card-actions">
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_ARCHIVE, id: note.id })
                    }
                >
                    <FontAwesomeIcon icon={faBoxArchive}/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_TRASH, id: note.id })
                    }
                >
                <FontAwesomeIcon icon={faTrashCan}/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_PINNED, id: note.id })
                    }
                >
                    <FontAwesomeIcon icon={faThumbtack}/>
                </button>
            </div>
        </div>
    );
}
