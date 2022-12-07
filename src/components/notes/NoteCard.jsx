import React from "react";
import MarkdownView from "react-showdown";
import "./NoteCard.css";
import { ACTION } from "./utils/noteHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashCan,
    faBoxArchive,
    faThumbtack,
} from "@fortawesome/free-solid-svg-icons";

/*notes [notesObj]
/*notesObj {
    content,
    backgroundColor,
    color,
    isPinned,
    isArchived,
    isTrashed,
    ftags: [<tag Name>],
} */

export default function NoteCard(props) {
    const { note, dispatch } = props;
    console.log(note);

    return (
        <div className="note-card">
            <div className="note-card-content">
                <MarkdownView
                    markdown={note.content}
                    options={{ tables: true, emoji: true }}
                />
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

            <div className="note-card-actions">
                <button
                    type="button"
                    className={note.isArchived ? "archived-btn" : "btn"}
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_ARCHIVE, id: note.id })
                    }
                >
                    <FontAwesomeIcon icon={faBoxArchive} />
                </button>
                <button
                    type="button"
                    className={note.isTrashed ? "trashed-btn" : "btn"}
                    onClick={(event) => {
                        if (event.ctrlKey) {
                            //delete only when in trash already and on Ctrl + click on trash icon
                            dispatch({ type: ACTION.DELETE_NOTE, id: note.id });
                        } else {
                            dispatch({
                                type: ACTION.TOGGLE_TRASH,
                                id: note.id,
                            });
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button
                    type="button"
                    className={note.isPinned ? "pinned-btn" : "btn"}
                    onClick={() =>
                        dispatch({ type: ACTION.TOGGLE_PINNED, id: note.id })
                    }
                >
                    <FontAwesomeIcon icon={faThumbtack} />
                </button>
            </div>
        </div>
    );
}
