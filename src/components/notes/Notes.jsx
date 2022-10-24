import React, {useMemo} from 'react';
import NoteCard from './NoteCard';

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
    const {notes, dispatch, filter} = props;
    //pass filtered note to notecard
    const defNotes = useMemo(() => filter(notes), [notes, filter]);
    return (
        <>
            {defNotes.map(note => <NoteCard key={note.id} note={note} dispatch={dispatch}/>)}
        </>
    );
}
