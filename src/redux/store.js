import { createStore, combineReducers } from 'redux'
import { resettableReducer } from 'reduxsauce';
import  addUserReducer  from './reducers/addUserReducer'
import { reducer as NewUser } from './actions/NewUserRedux'

const resettable = resettableReducer('RESET')

const rootReducer = combineReducers({
    users: addUserReducer,
    newUsers: resettable(NewUser)
})

const configureStore = () => createStore(rootReducer);

export default configureStore;