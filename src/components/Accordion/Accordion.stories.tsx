import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { Accordion, AccordionPropsType } from './Accordion';


export default {
    title: 'Accordion ',
    component: Accordion,
} as Meta;
const callback = action('accordion mode change event fired')
const Template: Story<AccordionPropsType> = (args) =><Accordion{...args}/>
const callbacksProps = {
    onClick:callback
}
export const menuCollapsedMode = Template.bind({})
menuCollapsedMode.args = {
    ...callbacksProps,
    titleValue:'Menu',
    collapsed:true,

}
export const userCollapsedMode = Template.bind({})
menuCollapsedMode.args = {
    ...callbacksProps,
    titleValue:'user',
    collapsed:false,

}


export const ModeChanging = () => {
    let [accordionCollapsed, setAccordionCollapsed] =  useState<boolean>(false)
    return <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
}

