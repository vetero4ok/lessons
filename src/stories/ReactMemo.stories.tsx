import React, {useState} from 'react'

export default {
    title: 'React.memo demo'
}
const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<any> }) => {
    //console.log('rerender')
    return <div>
        {props.users.map((u, i) => <div key = {i}> {u} </div>)}
    </div>
}
const Users = React.memo(UsersSecret)


export const Example1 = () => {
  //  console.log('example1')
    const [count, setCount] =  useState(0)
    const [users, setUsers] =  useState(['Igor', 'Maryna', 'Petro', 'Ivan'])

    const addUser = () => {
        console.log('1')
        const newUsers = [...users, 'Andrey ' + new Date().getTime()];
        setUsers(newUsers);
    }
    return <>
        <NewMessageCounter count={count}/>
        <button onClick={()=>setCount(count+1) } >+</button>
        <button onClick={addUser}>+</button>
        <Users users={users}/>

    </>
}