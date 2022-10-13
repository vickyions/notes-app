import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    const [searchTerm, setSearchTerm] = React.useState(null);

    function onChangeHandler(e) {
        setSearchTerm(e.target.value);
        /*call a filter function to the note container*/
        /*use useReducer of note and for action note return check for existing searchTerm*/
    }

    return (
        <div className="search light">
            <label htmlFor="quick-search-bar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
            <input
                id="quick-search-bar"
                type="text"
                placeholder="Quick Search"
                value={searchTerm}
                name="searchTerm"
                onChange={onChangeHandler}
            />
        </div>
    );
}
