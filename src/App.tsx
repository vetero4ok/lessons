import React from 'react';
import './App.css';


import {Rating} from "./components/Rating/Rating";
import {Accordion} from './components/Accordion/Accordion';
import { TurnOnOff } from './components/TurnOnOff/TurnOnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Uncontrolledrating/Rating';



function App() {


    return (

        <div className={'App'}>
            {/*<input/>*/}
            {/*<input checked={true} value={"yo"} type={"password"}/>*/}
            {/*<PageTitle title = {"This APP components"} />*/}
            {/*<PageTitle title = {"My friends"} />*/}


            <Accordion titleValue = {"Menu"} collapsed={true}/>
            < UncontrolledAccordion titleValue = {"Toggle menu"}/>
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
            <UncontrolledRating />
            <TurnOnOff/>
            <TurnOnOff/>


        </div>
    );
}

export default App;


