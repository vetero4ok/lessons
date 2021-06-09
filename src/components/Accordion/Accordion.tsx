import React from 'react';

type ItemType = {
    title:string
    value:any
}
export  type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    items:ItemType[]
    onClick:(collapsed:boolean)=>void
    onClicked:(value:any) =>void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} onClicked={props.onClicked}/>}
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
export type AccordionBodyType = {
    items: ItemType[]
    onClicked:(value:any) =>void

}

    function AccordionBody(props:AccordionBodyType) {
const jsxElements = props.items.map((li,index)=> <li onClick={()=>{onClicked(li.value)}} key={index}>{li.title}</li>)


        return (
            <div>
                <ul>
                    {jsxElements}
                </ul>
            </div>
        );
    }