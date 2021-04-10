import {createStore, applyMiddleware} from 'redux';
import   thunk from 'redux-thunk';
import rootReducer from './reducers';//here automatically select index.js in ./reducers folder when we call rootReducer

const initialState ={};
export default createStore(rootReducer, initialState, applyMiddleware(thunk));