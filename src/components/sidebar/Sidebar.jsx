import React from "react";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <ul>
            <li>
                <Link to="/">Root</Link>
            </li>
            <li>
                <Link to="/archive">Archive</Link>
            </li>
            <li>
                <Link to="/trash">Trash</Link>
            </li>
        </ul>
    );
}
