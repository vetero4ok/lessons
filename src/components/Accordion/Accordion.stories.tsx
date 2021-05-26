import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion ',
    component: Accordion,
} as Meta;

const callback = action('accordion mode change event fired')
export const menuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onClick={callback}/>
export const userCollapsedMode = () => <Accordion titleValue={'user'} collapsed={false} onClick={callback}/>


export const ModeChanging = () => {
    let [accordionCollapsed, setAccordionCollapsed] =  useState<boolean>(false)
    return <Accordion titleValue={'user'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
}

