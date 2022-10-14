import React, {useState} from 'react';
//handle toggle with css
import './Switch.css';

export default function Switch(props) {
    //recieves a theme toggles from context
    //will call it for every button click
    const {options} = props;
    const [optOne, optTwo] = options;

    const [isOn, setIsOn] = useState(false);

    function onClickHandler() {
        setIsOn(prevIsOn => !prevIsOn);
    }

    return (
        <div className="switch-container" onClick={onClickHandler}>
            <div className={`switch-left ${!isOn && "active"}`} >{optOne}</div>
            <div className={`switch switch-${isOn ? "on" : "off"}`}>
                <div className="switch-circle"></div>
            </div>
            <div className={`switch-right ${isOn && "active"}`}>{optTwo}</div>
        </div>
    ); 
}
