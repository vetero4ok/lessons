import React from 'react';
import {Meta, Story} from '@storybook/react';
import {SwitchDigitalAnalogClock,  SwitchDigitalAnalogClockType} from './SwitchDigitalAnalogClock';
import {DigitalClock} from './DigitalClock';
import { AnalogClock } from '../AnalogClock/AnalogClock';

export default {
    title: 'Clock/Clocks',
    component: SwitchDigitalAnalogClock,

} as Meta;
 const Template: Story<SwitchDigitalAnalogClockType> = (args) =>
     <SwitchDigitalAnalogClock {...args}/>;
export const switchDigitalAnalogClock = Template.bind({});
switchDigitalAnalogClock.args = {
    viewMode:true
};


/** Другий варіант запису*/


export const DigitalClockExample = () => {
    return (
        <>
            <DigitalClock date={new Date()}/>
        </>
    );
}
export const AnalogClockExample = () => {
    return (
        <>
            <AnalogClock date={new Date()} />
        </>
    );
}