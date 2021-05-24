import React, {useState} from 'react';
import './App.css';


import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import { UncontrolledTurnOnOff } from './components/UncontrolledTurnOnOff/UncontrolledTurnOnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Uncontrolledrating/UncontrolledRating';
import {TurnOnOff} from './components/TurnOnOff/TurnOnOff';



function App() {

let [ratingValue, setRatingValue] =  useState<RatingValueType>(0)
let [accordionCollapsed, setAccordionCollapsed] =  useState<boolean>(false)
let [turnOn, setTurnOn] = useState<boolean>(false)
    return (

        <div className={'App'}>
            {/*<input/>*/}
            {/*<input checked={true} value={"yo"} type={"password"}/>*/}



            <Accordion titleValue = {"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            < UncontrolledAccordion titleValue = {"Toggle menu"}/>

            <Rating value = {ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating />

            <TurnOnOff/>
            <UncontrolledTurnOnOff
            turnOn={turnOn}
            callback={setTurnOn}
            />


        </div>
    );
}

export default App;


