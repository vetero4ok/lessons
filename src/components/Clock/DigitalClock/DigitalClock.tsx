import React, {useEffect, useState} from 'react';
import s from './DigitalClock.module.css'

export type PropsType = {}

const zeroForDate = (num: number) => num < 10 ? '0' +num : num

export const DigitalClock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const deleteIdInterval = setInterval(() => {
                setDate(new Date())
            },
            1000)
        return () => {
            clearInterval(deleteIdInterval)
        }
    }, [])
    const hoursToString = zeroForDate(date.getHours())
    const minutesToString = zeroForDate(date.getMinutes())
    const secondsToString = zeroForDate(date.getSeconds())
    return (
        <div className={s.clock} >
            <span>{hoursToString}</span>
            :<span>{minutesToString}</span>
            :<span>{secondsToString}</span>
        </div>
    );
}