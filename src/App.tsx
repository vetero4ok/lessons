import React from 'react';
import './App.css';
import Acordion from "./components/Acordion/acordion";
import {Rating} from "./components/Rating/Rating";

//import {log} from "util";

function App() {
    console.log("rendering App");
    return (

        <div>
            <input/>
            <input checked={true} value={"yo"} type={"password"}/>
            <PageTitle title = {"This APP components"} />
            <PageTitle title = {"My friends"} />

            <Rating value = {5}/>
            <Acordion titleValue = {"Menu"} collapsed = {true}/>
            <Acordion titleValue  = {"Finger party"} collapsed = {true}/>

            <Rating value = {2}/>
        </div>
    );
}

export default App;

/*function Hello() {

    alert(' Hello piston ');
}

Hello();*/

type PageTitleProbsType = {
    title: string
}
function PageTitle(probs: PageTitleProbsType)
{
    console.log("rendering Apptitle");
    return (
        <h1> {probs.title }</h1>
    );
}

