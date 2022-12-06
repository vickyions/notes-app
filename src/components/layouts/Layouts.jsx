import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faGripLines } from "@fortawesome/free-solid-svg-icons";
import "./Layouts.css";

export default function Layouts() {
    
    function toggleLayouts(layout, event) {
        switch (layout) {
            case "grid-layouts":
                //handle changing the class of note container
                break;
            case "list-layouts":
                break;
        }

        /*TODO*/

    }

    return (
        <div className="layouts light">
            <div className="grid-layout" onClick={(e) => toggleLayouts("gird-layout", e)}>
                <FontAwesomeIcon icon={faGrip} />
            </div>
            <div className="list-layout" onClick={(e) => toggleLayouts("list-layout", e)}>
                <FontAwesomeIcon icon={faGripLines} />
            </div>
        </div>
    );
}
