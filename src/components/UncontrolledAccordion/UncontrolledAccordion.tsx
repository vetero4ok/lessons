import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    function onclickCollapsed(){
       if(collapsed){
           setCollapsed(false)
       }else {
           setCollapsed(true)
       }

    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>onclickCollapsed()}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
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