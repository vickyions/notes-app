import React from 'react';
import './Navbar.css';
import Search from '../search/Search';
import Layouts from '../layouts/Layouts';
import Switch from '../switch/Switch';
//import switchTheme from //somewher which will change the global theme value;

export default function Navbar() {
    
    return (
        <nav className="nav light">
            <h1>Notes</h1>
            <Search />
            <Layouts />
            <Switch options={["Light", "Dark"]} />
        </nav>
    );
}
