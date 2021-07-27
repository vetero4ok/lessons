import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect demo'
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    // useEffect(() => {
    //     console.log('UseEffect')
    //     // document.title= counter.toString();
    //     // //api.getUsers().then('')
    //     // setInterval()
    //     // indexedDB
    //     // document.getElementById()
    //     // document.title =  ' user'
    // })
    /** Пи першому рендері спочатку рендериться ціла сторінка, пробігає через UseEffect,
     * але не спрацьовує і коли реакт вже щось показа пользователю, він пробігає другий раз
     * і виконує хук UseEffect*/
    useEffect(() => {
        console.log('UseEffect every time render')
        document.title= counter.toString();

    })
    useEffect(() => {
        console.log('UseEffect only first render (componentDidMount)')
        document.title= counter.toString();

    }, [])
    useEffect(() => {
        console.log('UseEffect first render and every counter changed')
        document.title= counter.toString();

    }, [counter])
    return (
        <>
            hello {counter}
            <button onClick={() => {setCounter(counter + 1)}}> counter+ </button>
            <button onClick={() => {setFake(fake + 1)}}>fake+ </button>

        </>
    );


}
export const SetTimeoutExample1 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('UseEffect')
        setTimeout(()=>{
            console.log('SetTimeout')
            document.title =  counter.toString()
        }, 1000)
    }, [counter])



    return (
        <>
            hello {counter}
            <button onClick={() => {setCounter(counter + 1)}}> counter+ </button>
            <button onClick={() => {setFake(fake + 1)}}>fake+ </button>

        </>
    );


}
export const SetIntervalExample1 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {

        setInterval(()=>{
            console.log('tick ' + counter)
            setCounter((state)=>state+1)
        }, 1000)
    }, [])



    return (
        <>
            hello, {counter} - fake {fake}
            {/*<button onClick={() => {setCounter(counter + 1)}}> counter+ </button>*/}
            {/*<button onClick={() => {setFake(fake + 1)}}>fake+ </button>*/}

        </>
    );


}