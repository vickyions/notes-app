import React from 'react';
import NoteCard from 'NoteCard';

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
    const defNotes = filter(notes);
    defNotes = [
        {content:"1232"}, {content:214}, {content:"31jskad"}
    ];

    return (
        <>
            {defNotes.map(note => <NoteCard note={note} dispatch={dispatch}/>)}
        </>
    );
}
