import React from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import {Accordion} from './components/Acсordion/Accordion';



function App() {
    console.log("rendering App");
    return (

        <div>
            {/*<input/>*/}
            {/*<input checked={true} value={"yo"} type={"password"}/>*/}
            {/*<PageTitle title = {"This APP components"} />*/}
            {/*<PageTitle title = {"My friends"} />*/}


            <Accordion titleValue = {"Menu"} collapsed = {false}/>
            <Accordion titleValue  = {"Finger party"} collapsed = {false}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}

export default App;


// type PageTitleProbsType = {
//     title: string
// }
// function PageTitle(probs: PageTitleProbsType)
// {
//     console.log("rendering Apptitle");
//     return (
//         <h1> {probs.title }</h1>
//     );
// }

