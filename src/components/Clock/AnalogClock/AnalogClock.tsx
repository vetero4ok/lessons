import React, {useEffect, useState} from 'react';
import s from './AnalogClock.module.css'

export type AnalogClockPropsType = {}

export const AnalogClock: React.FC<AnalogClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    let d = date; //object of date()
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    const secondsStyle = {
        transform: `rotate(${sec * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${min * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hr * 30}deg)`
    };
    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())

        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])


    return (
        <div className={s.clockContainer}>
            <div className={s.hour} style = {hoursStyle} ></div>
            <div className={s.minute} style = {minutesStyle}></div>
            <div className={s.second} style={secondsStyle}></div>

        </div>
    );
}