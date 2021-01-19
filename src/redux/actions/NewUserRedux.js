import { createReducer,createActions } from 'reduxsauce'

// Action and Types
const { Types, Creators} = createActions({
    newUserRegistrationData: ['data'], 
})

export const NewUserRegistrationDataTypes = Types
export default Creators

// Initial State
export const INITIAL_STATE = {
    data: null,
}

// Reducer

export const newUserData = (state = INITIAL_STATE, {data}) => {
    console.log('newUserData - ACTION',data)
    //const { data } = action
    return {...state, data}
}


export const reducer = createReducer(INITIAL_STATE,{
    [Types.NEW_USER_REGISTRATION_DATA]: newUserData
})
