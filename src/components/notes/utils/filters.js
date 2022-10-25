
//functions of utils.js
function defaultNotes(notes) {
    //will be ran inside Notes component to filter the notes prop before rendering
    return notes
        .filter((note) => {
            return !note.isArchived && !note.isTrashed;
        })
        .sort((a, b) => {
            if (a.isPinned && b.isPinned) {
                return 0; //dont sort
            } else if (a.isPinned) {
                return -1; //sort before b
            } else if (b.isPinned) {
                return 1; //sort after b
            }
        });
}

function archivedNotes(notes) {
    //will be ran inside Notes component to filter the notes prop before rendering
    return notes
        .filter((note) => {
            return note.isArchived;
        })
        .sort((a, b) => {
            if (a.isPinned && b.isPinned) {
                return 0; //dont sort
            } else if (a.isPinned) {
                return -1; //sort before b
            } else if (b.isPinned) {
                return 1; //sort after b
            }
        });
}

function trashedNotes(notes) {
    //will be ran inside Notes component to filter the notes prop before rendering
    return notes
        .filter((note) => {
            return note.isTrashed;
        })
        .sort((a, b) => {
            if (a.isPinned && b.isPinned) {
                return 0; //dont sort
            } else if (a.isPinned) {
                return -1; //sort before b
            } else if (b.isPinned) {
                return 1; //sort after b
            }
        });
}

export {defaultNotes, archivedNotes, trashedNotes};
