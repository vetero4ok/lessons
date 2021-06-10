import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { Accordion, AccordionPropsType } from './Accordion';


export default {
    title: 'Accordion ',
    component: Accordion,

} as Meta;
const callback = action('accordion mode change event fired')
const callback1 = action('CLicked on items li')
const Template: Story<AccordionPropsType> = (args) =><Accordion{...args}/>
const callbacksProps = {
    onClick:callback,
    onClicked:callback1
}
export const menuCollapsedMode = Template.bind({})
menuCollapsedMode.args = {
    ...callbacksProps,
    titleValue:'Menu',
    collapsed:true,
    items:[{title:"ivan",value:'1'},{title:"petro",value:'2'},{title:"stepan",value:'3'}],


}
export const userCollapsedMode = Template.bind({})
menuCollapsedMode.args = {
    ...callbacksProps,
    titleValue:'user',
    collapsed:false,
    items: [{title:"ivan",value:'1'},{title:"petro",value:'2'},{title:"stepan",value:'3'}]

}


// export const ModeChanging = () => {
//     let [accordionCollapsed, setAccordionCollapsed] =  useState<boolean>(false)
//     return <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
// }

