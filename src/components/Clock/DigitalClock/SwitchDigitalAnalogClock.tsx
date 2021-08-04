import React, {useEffect, useState} from 'react';
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from '../AnalogClock/AnalogClock';

export type SwitchDigitalAnalogClockType = {
    viewMode: boolean
}
export const SwitchDigitalAnalogClock: React.FC<SwitchDigitalAnalogClockType> = ({viewMode}) => {
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
    return (
        <>
            { viewMode
                ? <DigitalClock date={date}/>
                : <AnalogClock date={date}/>
            }
        </>
    );
}