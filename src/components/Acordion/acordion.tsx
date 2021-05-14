import React from "react";

type AcordionProbsType = {
    titleValue:string
    collapsed: boolean
}

function Acordion( probs: AcordionProbsType) {
    console.log("rendering Acordion");
    if(probs.collapsed === true){
        return ( <div>
                <Acordiontitle title = {probs.titleValue}  />,
                <AcordionBody title={probs.titleValue}/>
            </div>
        );
    }
    else {
       return (<Acordiontitle title = {probs.titleValue}  />);
    }
    if (probs.collapsed === false) {
        return (<div>
                <Acordiontitle title = {probs.titleValue}  />,
                <AcordionBody title={probs.titleValue}/>
            </div>
        );
    } else {
        return (<AcordionBody title={probs.titleValue}/>);
    }

}
export default Acordion
type AcordiontitleProbsType = {
    title:string
}

function Acordiontitle( probs: AcordiontitleProbsType) {
    console.log("rendering AcordionTitle");
    return (<div>
        <h3>{probs.title}</h3>
    </div>);
}

type AcordionBodyProbsType = {
    title: string
}

function AcordionBody(probs: AcordionBodyProbsType) {
    console.log("rendering AcordionBody");
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>);
}