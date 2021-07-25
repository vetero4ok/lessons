import React, {useState} from 'react';
import './App.css';


import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledTurnOnOff} from './components/UncontrolledTurnOnOff/UncontrolledTurnOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {TurnOnOff} from './components/TurnOnOff/TurnOnOff';
import {Select} from './components/Select/Select';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [turnOn, setTurnOn] = useState<boolean>(false)
    const onChange = () => {
    }
    const onClicked=()=>{}
    const mas = [{title: 'ivan', value: '1'}, {title: 'petro', value: '2'}, {title: 'stepan', value: '3'}]
    return (

        <div className={'App'}>
            {/*<input/>*/}
            {/*<input checked={true} value={"yo"} type={"password"}/>*/}


            <Accordion titleValue={'User'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}
                       onClicked={onClicked}
                       items={mas}
            />
            {/*<Select/>*/}

            {/*< UncontrolledAccordion titleValue = {"Toggle menu"}/>*/}

            {/*<Rating value = {ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating onChange={ onChange}/>*/}

            {/*<TurnOnOff*/}
            {/*    turnOn={turnOn}*/}
            {/*    callback={setTurnOn}/>*/}
            {/*<UncontrolledTurnOnOff  />*/}


        </div>
    );
}

export default App;


