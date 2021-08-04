import React from 'react';
import s from './DigitalClock.module.css'

export type PropsType = {
    date: Date
}


export const DigitalClock: React.FC<PropsType> = ({date}) => {

    const zeroForDate = (num: number) => num < 10 ? '0' + num : num
    const hoursToString = zeroForDate(date.getHours())
    const minutesToString = zeroForDate(date.getMinutes())
    const secondsToString = zeroForDate(date.getSeconds())
    return (
        <div className={s.clock}>
            <span>{hoursToString}</span>
            :<span>{minutesToString}</span>
            :<span>{secondsToString}</span>
        </div>
    );
}