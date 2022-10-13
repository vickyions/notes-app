import React from 'react';
import Search from '../search/Search';
import Layouts from '../layouts/Layouts';
import Switch from '../switch/Switch';
//import switchTheme from //somewher which will change the global theme value;

export default function Navbar() {
    
    //temperary change with global switchTheme function
    function switchTheme(isOn) {console.log(isOn)};

    return (
        <nav className="nav light">
            <h1>Notes</h1>
            <Search />
            <Layouts />
            <Switch options={["Light", "Dark"]} toggleFunction={switchTheme}/>
        </nav>
    );
}
