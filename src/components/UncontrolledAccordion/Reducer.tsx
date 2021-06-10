type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // const copyState = {...state}
            // copyState.collapsed=!state.collapsed

            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error('Bad Action Type')

    }
    return state;
}