import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test ('Collapsed should be true',()=>{
    //data
    const state: StateType = {
        collapsed:false
    }
    // action
   const newState = reducer(state,{type:TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(true)
})
test ('Collapsed should be false',()=>{
    //data
    const state: StateType = {
        collapsed:true
    }
    // action
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(false)
})
test ('Reducer should Error because action type is incorrect',()=>{
    //data
    const state: StateType = {
        collapsed:true
    }


    //expect
    expect(()=>{reducer(state,{type:"FAKE_TYPE"})}).toThrowError();
})