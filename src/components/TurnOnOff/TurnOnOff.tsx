import React from 'react';

type propsTurnOnOffType = {
    turnOn:boolean
    callback:(turnOn:boolean)=>void

}

export function TurnOnOff(props:propsTurnOnOffType) {




    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.turnOn ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        background: props.turnOn ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        background: props.turnOn ? 'green' : 'red'
    };


    return (
        <div>

            <div>
                <div style={onStyle} onClick={() => props.callback(!props.turnOn)}>on</div>
                <div style={offStyle} onClick={() => props.callback(!props.turnOn)}> off</div>
                <div style={indicatorStyle}></div>
            </div>

        </div>
    );

}