import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {propsUncontrolledTurnOnOffType, UncontrolledTurnOnOff} from './UncontrolledTurnOnOff';


export default {
    title: 'UncontrolledTurnOnOff ',
    component: UncontrolledTurnOnOff,
} as Meta;

const Template: Story<propsUncontrolledTurnOnOffType> = (args) => <UncontrolledTurnOnOff {...args}/>
const callback = action('on or off clicked')
export const onMode = Template.bind({})
onMode.args = {
    onChange:callback,
    defaultValue:true

}


