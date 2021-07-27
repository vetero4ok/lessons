import React from 'react';
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from '../AnalogClock/AnalogClock';
export type SwitchDigitalAnalogClockType = {
    viewDigitalMod:boolean
}
export const SwitchDigitalAnalogClock:React.FC<SwitchDigitalAnalogClockType> = (props) => {

    return(
        <>
            { props.viewDigitalMod
                ? <DigitalClock/>
                : <AnalogClock/>
            }
        </>
    );
}