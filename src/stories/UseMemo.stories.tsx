import React, {useMemo, useState} from 'react'

export default {
    title: 'UseMemo demo'
}


export const DifficultExample1 = () => {
  const [a,setA]= useState<number>(1)
  const [b,setB]= useState<number>(1)
   let resultA
   let resultB = 1;
   resultA = useMemo(()=>{
       let tempres = 1;
        for(let i = 1; i<=a;i++){
            let j = 0;
            while (j<10000000){
                const sat = Math.random()
                j++
            }
            tempres = tempres * i;
        }

        return tempres

    },[a])

    for(let i = 1; i<=b;i++){
        resultB = resultB * i;

    }

    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <div>Res A = {resultA}</div>
        <div>Res B  = {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<any> }) => {
    //console.log('rerender')
    return <div>
        {props.users.map((u, i) => <div key = {i}> {u} </div>)}
    </div>
}
const Users = React.memo(UsersSecret)


export const HelpToReactMemo = () => {
      console.log('example1')
    const [count, setCount] =  useState(0)
    const [users, setUsers] =  useState(['Igor', 'Maryna', 'Petro', 'Ivan'])

    const newArray = useMemo(()=>{
        const usersFilter =  users.filter(u=>u.toLowerCase().indexOf('a')>-1)
        return usersFilter
    }, [users])
    const addUser = () => {
        console.log('1')
        const newUsers = [...users, 'Andrey ' + new Date().getTime()];
        setUsers(newUsers);
    }
    return <>
        {count}
        <button onClick={()=>setCount(count+1) } >+</button>
        <button onClick={addUser}>add user</button>
        <Users users={newArray}/>

    </>
}