import {ADD_REGISTRATION_USER} from '../actions'

const initialState = {
    userList: []
}

const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REGISTRATION_USER: 
            
            return {
                ...state, user: action.payload
            };
        default : 
            return state;
        
    }

}

export default addUserReducer;