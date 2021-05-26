import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {TurnOnOff} from './TurnOnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'TurnOnOff ',
    component: TurnOnOff,
} as Meta;

const callback = action('on or off clicked')
export const onMode = () => <TurnOnOff turnOn={true}  callback={callback}/>
export const offMode = () => <TurnOnOff turnOn={false}  callback={callback}/>

export const ModeChanging= () => {
    const [on, setOn] = useState<boolean>(false)
    return <TurnOnOff turnOn={on} callback={setOn}/>
}

