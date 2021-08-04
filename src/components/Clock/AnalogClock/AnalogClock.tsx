import React from 'react';
import s from './AnalogClock.module.css'

export type AnalogClockPropsType = {
    date: Date
}

export const AnalogClock: React.FC<AnalogClockPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };


    return (
        <div className={s.clockContainer}>
            <div className={s.hour} style={hoursStyle}/>
            <div className={s.minute} style={minutesStyle}/>
            <div className={s.second} style={secondsStyle}/>

        </div>
    );
}