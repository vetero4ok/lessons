import React from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion, UncontrolledAccordionPropsType,} from './UncontrolledAccordion';


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as Meta;
export const Template: Story<UncontrolledAccordionPropsType> = (args)=>
    <UncontrolledAccordion {...args}/>

export const ChangingTitle = Template.bind({})
ChangingTitle.args = {
    titleValue:'Toggle menu',

}