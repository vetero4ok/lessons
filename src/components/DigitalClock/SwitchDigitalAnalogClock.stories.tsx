import {Meta} from '@storybook/react';
import {DigitalClock} from './DigitalClock';
import React from 'react';
import {AnalogClock} from '../AnalogClock/AnalogClock';

export default {
    title: 'Clock/SwitchClock',
    component: DigitalClock,

} as Meta;
// const Template: Story<PropsType> = (args) => <DigitalClock/>;
// export const DigitalClockExample = Template.bind({});
// DigitalClockExample.args = {};
/** Другий варіант запису*/
export const DigitalClockExample = () => {
    return (
        <>
            <DigitalClock/>
        </>
    );
}
export const AnalogClockExample = () => {
    return (
        <>
            <AnalogClock/>
        </>
    );
}