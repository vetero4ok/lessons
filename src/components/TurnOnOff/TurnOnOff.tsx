import React, {useState} from 'react';



export function TurnOnOff() {

    const [on, setOn] = useState<boolean>(false)


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        background: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    };


    return (
        <div>

            <div>
                <div style={onStyle} onClick={() => setOn(true)}>on</div>
                <div style={offStyle} onClick={() => setOn(false)}> off</div>
                <div style={indicatorStyle}></div>
            </div>

        </div>
    );

}