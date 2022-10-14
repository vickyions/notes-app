import React, {useState} from 'react';
//handle toggle with css
import './Switch.css';

export default function Switch(props) {
    //takes a function and toggles between them should also recieve a togglefunction which will be called to perform a specific action
    const {options, toggleFunction} = props;
    const [optOne, optTwo] = options;

    const [isOn, setIsOn] = useState(false);

    function onClickHandler() {
        setIsOn(prevIsOn => !prevIsOn);
        toggleFunction(isOn);
    }

    return (
        <div className="switch-container" onClick={() => {onClickHandler}}>
            <div className="switch-left" >{optOne}</div>
            <div className={`switch switch-${isOn ? "on" : "off"}`}>
                <div className="switch-circle"></div>
            </div>
            <div className="switch-right">{optTwo}</div>
        </div>
    ); 
}
