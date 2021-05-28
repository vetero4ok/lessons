import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:(collapsed:boolean)=>void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}


    type AccordionTitlePropsType = {
        title: string
        collapsed:boolean
        onClick:(collapsed:boolean)=>void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {

    return (
            <div>
                <h3 onClick={()=>props.onClick(!props.collapsed)}>{props.title}</h3>
            </div>
        );
    }

    function AccordionBody() {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }