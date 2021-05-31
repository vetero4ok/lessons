import React, {ChangeEvent, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';


export default {
    title: 'Example/Button',
    // component: Button,

} as Meta;

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value} </>
}
const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return <><input id={'inputId'}> ref= {inputRef}</input>
        <button onClick={save}>save</button>
        - actual value: {value}</>

}

// export const controlledInput = () => {
//     const [parentValue, setParentValue] = useState('')
//     const onChange =(e:ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
//     return <input value={parentValue} onChange={onChange}/>
//
// }
// export const controlledCheckbox = () => {
//     const [parentChecked, setParentChecked] = useState(true)
//     return( <input type='Checkbox' checked={parentChecked} onChange={(e) =>
//         setParentChecked(e.currentTarget.checked)}/>
//     );
// }
// export const controlledSelect = () => {
//     const [parentSelect, setParentSelect] = useState<string | undefined>('2')
//     const onChange =(e:ChangeEvent<HTMLSelectElement>) =>
//         setParentSelect(e.currentTarget.value)
//     return (
//         <select value={parentSelect} onChange={onChange}>
//         <option>none</option>
//         <option value="1">Kyev</option>
//         <option value="2">Moscow</option>
//         <option value="3">Minsk</option>
//         </select>
//         );
//         }


        export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>
