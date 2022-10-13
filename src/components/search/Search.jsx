import React from "react";

export default function Search() {
    const [searchTerm, setSearchTerm] = React.useState(null);

    return (
        <div className="search light">
            <label for="quick-search-bar"><i></i></label>
            <input
                id="quick-search-bar"
                type="text"
                placeholder="Quick Search"
                value={searchTerm}
                name="searchTerm"
                onChange={() => {
                    /*setsearchTErm*/
                    /*call a filter function to the note container*/
                    /*use useReducer of note and for action note return check for existing searchTerm*/
                }}
            />
        </div>
    );
}
