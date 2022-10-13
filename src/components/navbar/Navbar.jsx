import React from 'react';
import Search from '../search/Search';
import Layouts from '../layouts/Layouts';
//import SwitchTheme from '../switch/SwitchTheme';

export default function Navbar() {
    
    return (
        <nav className="nav light">
            <h1>Notes</h1>
            <Search />
            <Layouts />
            {/*<SwitchTheme />*/}
        </nav>
    );
}
