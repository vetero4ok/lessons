import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {propsTurnOnOffType, TurnOnOff} from './TurnOnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'TurnOnOff ',
    component: TurnOnOff,
} as Meta;

const Template: Story<propsTurnOnOffType> = (args) =><TurnOnOff {...args}/>
const callback = action('on or off clicked')
export  const onOffMode = Template.bind({})
onOffMode.args = {
    turnOn: true,
    callback:x=>x
}

// export const onMode1 = () => <TurnOnOff turnOn={true}  callback={callback}/>
// export const offMode = () => <TurnOnOff turnOn={false}  callback={callback}/>

export const ModeChanging= () => {
    const [on, setOn] = useState<boolean>(false)
    return <TurnOnOff turnOn={on} callback={setOn}/>
}

