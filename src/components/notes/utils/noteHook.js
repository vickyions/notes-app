import { useEffect, useReducer } from "react";
import { nanoid } from "nanoid";

const NOTES_STR_KEY = "notes.app";
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

class NoteCls {
    constructor(
        content = "",
        backgroundColor = "white",
        color = "black",
        tags = [],
        isArr = [false, false, false]
    ) {
        this.id = nanoid();
        this.content = content;

        this.backgroundColor = backgroundColor;
        this.color = color;

        this.tags = tags;

        //isArr : [pinned, archived, trashed] : bool
        this.isPinned = isArr[0];
        this.isArchived = isArr[1];
        this.isTrashed = isArr[2];
    }
}

const ACTION = {
    ADD_NOTE: "addNote",
    DELETE_NOTE: "deleteNote",
    ADD_TAG: "addTag",
    DELETE_TAG: "deleteTag",
    TOGGLE_ARCHIVE: "togglearchive",
    TOGGLE_TRASH: "toggleTrash",
    TOGGLE_PINNED: "togglePinned",
};

function reducer(prevNotes, action) {
    /*action {
        type: ACTION.<keyword>,
        tag: <tag Name>, //do something to make this multiple tags at a time it will be array TODO
        note: <noteObj>
        noteContent: <noteContent> //recieved from the input, while add new note generate nanoid and also assign noteTemplate
        id: <note.id>
    }*/
    switch (action.type) {
        case ACTION.ADD_NOTE:
            return [
                ...prevNotes,
                { ...new NoteCls(), content: action.noteContent },
            ];
        case ACTION.DELETE_NOTE:
            //will delete when in trash and Ctrl + click on trash icon
            return prevNotes.filter((note) => {
                if (note.isTrashed) {
                    return note.id !== action.id;
                } else {
                    return true;
                }
            });
        case ACTION.ADD_TAG:
            return prevNotes.map((note) => {
                return note.id !== action.id
                    ? note
                    : { ...note, tags: [...note.tags, action.tag] };
            });
        case ACTION.DELETE_TAG:
            //implement some dropdown for tag add and delete in notecard
            return prevNotes.map((note) => {
                return note.id !== action.id
                    ? note
                    : {
                          ...note,
                          tags: note.tags.filter((tag) => tag !== action.tags),
                      };
            });
        case ACTION.TOGGLE_ARCHIVE:
            return prevNotes.map((note) => {
                return note.id !== action.id
                    ? note
                    : note.isTrashed
                    ? {
                          ...note,
                          isTrashed: !note.isTrashed,
                          isArchived: !note.isArchived,
                      }
                    : { ...note, isArchived: !note.isArchived };
            });
        case ACTION.TOGGLE_TRASH:
            return prevNotes.map((note) => {
                return note.id !== action.id
                    ? note
                    : note.isArchived
                    ? {
                          ...note,
                          isArchived: !note.isArchived,
                          isTrashed: !note.isTrashed,
                      }
                    : { ...note, isTrashed: !note.isTrashed };
            });
        case ACTION.TOGGLE_PINNED:
            return prevNotes.map((note) => {
                return note.id !== action.id
                    ? note
                    : { ...note, isPinned: !note.isPinned };
            });
        //when possible implement that pinned moves to the top as right now its just get filtered to top
        //but I want latest pinned to be the 0 idx note in array
        default:
            return prevNotes;
    }
}

export default function useNotes() {
    const [notes, dispatch] = useReducer(
        reducer,
        JSON.parse(localStorage.getItem(NOTES_STR_KEY)) || []
    );

    useEffect(() => {
        localStorage.setItem(NOTES_STR_KEY, JSON.stringify(notes));
    }, [notes]);

    return [notes, dispatch];
}

export { ACTION, NoteCls };
