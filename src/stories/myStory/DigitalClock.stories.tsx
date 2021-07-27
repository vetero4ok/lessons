// import React, {useEffect, useState} from 'react'
//
export default {
    title: 'Digital clock'
}

// export const ClockMyExample1 = () => {
//     const newDate = new Date();
//     let hovers = newDate.getHours();
//     let minutes = newDate.getMinutes();
//     let seconds = newDate.getSeconds();
//
//     const [counter, setCounter] = useState(seconds)
//
//
//     useEffect(() => {
//
//         setInterval(() => {
//             // if (hovers < 10) {
//             //     hovers = +('0' + hovers);
//             // }
//             // if (minutes < 10) {
//             //     minutes = +('0' + minutes);
//             // }
//             // if (seconds < 10) {
//             //     seconds = +('0' + seconds);
//             // }
//             if (hovers < 24) {
//                 if (minutes < 60) {
//                     if (seconds < 60) {
//                         console.log('sec')
//                         setCounter((state) => state + 1)
//                     } else {
//                         console.log('sec2')
//                         minutes = minutes + 1
//                         setCounter(state => 0)
//                     }
//                 } else {
//                     hovers = hovers + 1
//                     minutes = 0
//                     setCounter(state => 0)
//                 }
//             }
//
//         }, 1000)
//     }, [])
//
//
//     return (
//         <>
//             hello, my timer {hovers}:{minutes}:{counter}
//
//         </>
//     );
//
//
// }