import React, { useMemo } from 'react';
import NoteCard from './NoteCard';
import './Notes.css';

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

export default function Notes(props) {
    const { notes, dispatch, filter } = props;
    //pass filtered note to notecard
    const defNotes = useMemo(() => filter(notes), [notes, filter]);
    return (
        <>
            <div className="notes-card-container">
                {defNotes.map((note) => (
                    <NoteCard key={note.id} note={note} dispatch={dispatch} />
                ))}
            </div>
        </>
    );
}
