import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'UseState demo (callback)'
}

function generateData() {
    //difficult counting
    console.log('generate data')
    return 7845478
}

/** useState  може приймати не фіксоване значення, а якусь функцію. я її визву і подивлюсь , що вона
 * мені верне і використаю це значення як стартове значення
 *  const [count, setCount] = useState(()=>{})
 *  використвоувати, тыльки уоли необхыдно пыдрахувати важкі обрахунки
 * --- ще юстейт може приймати функцію в сетстейт*/
export const Example1 = () => {
    console.log('Example1')
    const [count, setCount] = useState(generateData)
    const changer = (state: number) => {
        return state + 1
    }
    return (
        <>
            <button onClick={() => setCount(changer)}>+</button>
            {count}
        </>
    );
}

